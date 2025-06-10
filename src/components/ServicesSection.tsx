
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Hammer, Palette, Zap, Droplets, Truck, Building, Brush } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Trockenbau",
      description: "Professionelle Trockenbauarbeiten für Wohn- und Gewerberäume"
    },
    {
      icon: Building,
      title: "Stuckateur",
      description: "Kreative Stuckarbeiten und dekorative Wandgestaltung"
    },
    {
      icon: Palette,
      title: "Maler",
      description: "Hochwertige Malerarbeiten innen und außen"
    },
    {
      icon: Brush,
      title: "Fliesenleger",
      description: "Fachgerechte Verlegung von Fliesen in Bad und Küche"
    },
    {
      icon: Hammer,
      title: "Fassade",
      description: "Fassadensanierung und -gestaltung für Ihr Gebäude"
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Zuverlässige Transportdienstleistungen für Ihr Projekt"
    },
    {
      icon: Wrench,
      title: "Innenausbau",
      description: "Kompletter Innenausbau nach Ihren Wünschen"
    },
    {
      icon: Zap,
      title: "Strom",
      description: "Elektroinstallationen und elektrische Arbeiten"
    },
    {
      icon: Droplets,
      title: "Wasser",
      description: "Sanitärinstallationen und Wasseranschlüsse"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale h-full">
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
  );
};

export default ServicesSection;
