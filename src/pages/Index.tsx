
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Hammer, 
  Home, 
  Wrench, 
  CheckCircle, 
  Clock, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
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

  const services = [
    {
      icon: Home,
      title: "Wohnungsbau",
      description: "Professionelle Trockenbauarbeiten für Wohnräume, Büros und Gewerbeimmobilien"
    },
    {
      icon: Wrench,
      title: "Renovierung",
      description: "Modernisierung und Sanierung bestehender Räume mit modernen Trockenbautechniken"
    },
    {
      icon: Hammer,
      title: "Neugestaltung",
      description: "Kreative Raumaufteilung und Designlösungen für optimale Raumnutzung"
    }
  ];

  const advantages = [
    { icon: Clock, text: "Schnelle Bauzeit" },
    { icon: CheckCircle, text: "Hochwertige Materialien" },
    { icon: Users, text: "Erfahrenes Team" },
    { icon: Home, text: "Komplettservice" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Professioneller Trockenbau
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Ihr Experte für moderne Trockenbaulösungen - Von der Planung bis zur Fertigstellung
            </p>
            <Button size="lg" className="animate-scale-in">
              <ArrowRight className="mr-2 h-5 w-5" />
              Jetzt Beratung anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Warum Trockenbau?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-accent transition-colors">
                  <advantage.icon className="h-8 w-8 text-primary" />
                  <span className="text-lg font-medium">{advantage.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Was ist Trockenbau?</h3>
              <p className="text-muted-foreground mb-4">
                Trockenbau bezeichnet eine Bauweise, bei der vorgefertigte Bauteile verwendet werden, 
                die ohne die Zugabe von Wasser montiert werden. Diese Methode ermöglicht es, 
                Innenräume schnell und flexibel zu gestalten.
              </p>
              <p className="text-muted-foreground">
                Zu den häufigsten Anwendungen gehören das Errichten von Zwischenwänden, 
                das Abhängen von Decken, die Verkleidung von Installationen und die 
                Schaffung von Stauraum oder Nischen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unser Arbeitsprozess</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "1", title: "Beratung & Planung", description: "Kostenlose Beratung vor Ort und detaillierte Projektplanung" },
                { step: "2", title: "Materialauswahl", description: "Auswahl hochwertiger Materialien passend zu Ihren Anforderungen" },
                { step: "3", title: "Professionelle Ausführung", description: "Fachgerechte Montage durch unser erfahrenes Team" },
                { step: "4", title: "Qualitätskontrolle", description: "Abschlusskontrolle und Übergabe des fertigen Projekts" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kostenloses Angebot anfordern</h2>
              <p className="text-xl text-muted-foreground">
                Lassen Sie uns Ihr Trockenbau-Projekt gemeinsam planen
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Kontakt
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+49 (0) 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>info@trockenbau-experte.de</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Musterstraße 123, 12345 Musterstadt</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
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
                        2 Jahre Gewährleistung
                      </li>
                    </ul>
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
                          placeholder="z.B. Wohnungsbau, Büro"
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
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
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

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Trockenbau Experte</h3>
            <p className="text-primary-foreground/80">
              Ihr zuverlässiger Partner für professionelle Trockenbaulösungen
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
