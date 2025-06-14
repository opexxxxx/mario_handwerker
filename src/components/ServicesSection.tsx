
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Hammer, Palette, Zap, Droplets, Truck, Building, Brush } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Trockenbau",
      description: "Professionelle Trockenbauarbeiten für Wohn- und Gewerberäume",
      gradient: "bg-gradient-to-tl from-amber-400 to-orange-500"
    },
    {
      icon: Building,
      title: "Stuckarbeiten",
      description: "Kreative Stuckarbeiten und dekorative Wandgestaltung",
      gradient: "bg-gradient-to-tl from-stone-400 to-slate-600"
    },
    {
      icon: Palette,
      title: "Malerarbeiten",
      description: "Hochwertige Malerarbeiten innen und außen",
      gradient: "bg-gradient-to-tl from-blue-400 to-purple-500"
    },
    {
      icon: Brush,
      title: "Fliesenleger",
      description: "Fachgerechte Verlegung von Fliesen in Bad und Küche",
      gradient: "bg-gradient-to-tl from-teal-400 to-cyan-500"
    },
    {
      icon: Hammer,
      title: "Fassade",
      description: "Fassadensanierung und -gestaltung für Ihr Gebäude",
      gradient: "bg-gradient-to-tl from-gray-400 to-gray-600"
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Zuverlässige Transportdienstleistungen und Aufräumarbeiten für Ihr Projekt",
      gradient: "bg-gradient-to-tl from-green-400 to-emerald-500"
    },
    {
      icon: Wrench,
      title: "Innenausbau",
      description: "Kompletter Innenausbau nach Ihren Wünschen",
      gradient: "bg-gradient-to-tl from-rose-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Strom",
      description: "Elektroinstallationen und elektrische Arbeiten",
      gradient: "bg-gradient-to-tl from-yellow-400 to-orange-400"
    },
    {
      icon: Droplets,
      title: "Wasser",
      description: "Sanitärinstallationen und Wasseranschlüsse",
      gradient: "bg-gradient-to-tl from-blue-400 to-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale h-full overflow-hidden">
              <div className={`h-2 w-full ${service.gradient}`}></div>
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
