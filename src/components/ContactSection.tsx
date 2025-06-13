
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Anfrage gesendet!",
      description: "Wir werden uns bald bei Ihnen melden.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kostenloses Angebot anfordern</h2>
            <p className="text-xl text-muted-foreground">
              Lassen Sie uns Ihr Projekt gemeinsam planen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6 h-full flex flex-col">
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Kontakt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+49 15171847310</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@trockenbau-experte.de</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Musterstraße 123, 74177 Bad Friedrichshall</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle>Unsere Vorteile</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      20+ Jahre Erfahrung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Kostenlose Beratung
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Festpreisgarantie
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      10 Jahre Gewährleistung
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Anfrage senden</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden bei Ihnen
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
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
                        placeholder="z.B. Wohnungsbau, Büro"
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Beschreiben Sie Ihr Projekt..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full mt-auto" size="lg">
                    Anfrage senden
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
