import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const emailData = {
      to: "z-103103@yandex.ru",
      subject: `Neue Anfrage von ${formData.name}`,
      body: `
        Name: ${formData.name}
        E-Mail: ${formData.email}
        Telefon: ${formData.phone}
        Projektart: ${formData.project}
        
        Nachricht:
        ${formData.message}
      `
    };

    try {
      // Da wir keine Backend-Integration haben, verwenden wir mailto:
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "E-Mail-Client geöffnet",
        description: "Bitte senden Sie die E-Mail über Ihren E-Mail-Client.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Öffnen des E-Mail-Clients.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl text-muted-foreground">
              Lassen Sie uns Ihr Projekt gemeinsam planen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+49 12345678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@handwerker-example.de</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Musterstraße 123, 74177 Bad Friedrichshall</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Anfrage senden</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden bei Ihnen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <Label htmlFor="project">Projektart</Label>
                      <Input
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        placeholder="z.B. Trockenbau, Maler"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Beschreiben Sie Ihr Projekt..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Wird gesendet..." : "Anfrage senden"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
