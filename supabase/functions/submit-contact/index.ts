import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CONTACT_TO_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") || "info@mario-handwerker.com";
const CONTACT_FROM_EMAIL = Deno.env.get("CONTACT_FROM_EMAIL") || "Mario Handwerker <onboarding@resend.dev>";

// In-memory rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 requests per 15 minutes per IP

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// Validation schema
const validateContactForm = (data: any) => {
  const errors: string[] = [];

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name ist erforderlich');
  } else if (data.name.length < 2 || data.name.length > 50) {
    errors.push('Name muss zwischen 2 und 50 Zeichen lang sein');
  } else if (!/^[a-zA-ZäöüÄÖÜß\s]+$/.test(data.name)) {
    errors.push('Name darf nur Buchstaben und Leerzeichen enthalten');
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push('E-Mail ist erforderlich');
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
    errors.push('Bitte geben Sie eine gültige E-Mail-Adresse ein');
  }

  // Phone validation (optional)
  if (data.phone && typeof data.phone === 'string' && data.phone.trim() !== '') {
    if (!/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
      errors.push('Telefonnummer darf nur Zahlen, Leerzeichen und Sonderzeichen enthalten');
    }
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Nachricht ist erforderlich');
  } else if (data.message.length < 10 || data.message.length > 1000) {
    errors.push('Nachricht muss zwischen 10 und 1000 Zeichen lang sein');
  }

  return errors;
};

const checkRateLimit = (clientIP: string): boolean => {
  const now = Date.now();
  const userLimit = rateLimitMap.get(clientIP);

  if (!userLimit) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > userLimit.resetTime) {
    // Reset the window
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';

    console.log(`Contact form submission from IP: ${clientIP}`);

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(JSON.stringify({ 
        error: 'Zu viele Anfragen. Bitte warten Sie 15 Minuten bevor Sie erneut eine Anfrage senden.' 
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse request body
    const requestData = await req.json();
    console.log('Received form data:', { ...requestData, email: '[REDACTED]' });

    // Validate form data
    const validationErrors = validateContactForm(requestData);
    if (validationErrors.length > 0) {
      console.log('Validation errors:', validationErrors);
      return new Response(JSON.stringify({ 
        error: 'Validierungsfehler', 
        details: validationErrors 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable');
      throw new Error('Email service is not configured');
    }

    const contactData = {
      name: requestData.name.trim(),
      email: requestData.email.trim().toLowerCase(),
      phone: requestData.phone?.trim() || "",
      message: requestData.message.trim(),
      timestamp: new Date().toISOString(),
      source: requestData.source || "secure-form",
      clientIP: clientIP
    };

    const emailHtml = `
      <h2>Neue Anfrage über mario-handwerker.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(contactData.name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(contactData.email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(contactData.phone || "Nicht angegeben")}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(contactData.message).replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Quelle: ${escapeHtml(contactData.source)}</small></p>
      <p><small>Zeitpunkt: ${escapeHtml(contactData.timestamp)}</small></p>
      <p><small>IP: ${escapeHtml(contactData.clientIP)}</small></p>
    `;

    const emailText = [
      "Neue Anfrage über mario-handwerker.com",
      "",
      `Name: ${contactData.name}`,
      `E-Mail: ${contactData.email}`,
      `Telefon: ${contactData.phone || "Nicht angegeben"}`,
      "",
      "Nachricht:",
      contactData.message,
      "",
      `Quelle: ${contactData.source}`,
      `Zeitpunkt: ${contactData.timestamp}`,
      `IP: ${contactData.clientIP}`,
    ].join("\n");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: contactData.email,
        subject: `Neue Anfrage von ${contactData.name}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Email delivery failed:', emailResponse.status, await emailResponse.text());
      throw new Error(`Email delivery failed with status ${emailResponse.status}`);
    }

    console.log('Form submitted successfully for:', requestData.email);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Anfrage erfolgreich gesendet' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in submit-contact function:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Ein interner Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
