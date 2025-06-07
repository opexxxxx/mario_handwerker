
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Hammer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Wohnungsbau",
      description: "Professionelle Trockenbauarbeiten für Wohnräume, Büros und Gewerbeimmobilien",
      link: "/wohnungsbau"
    },
    {
      icon: Wrench,
      title: "Renovierung",
      description: "Modernisierung und Sanierung bestehender Räume mit modernen Trockenbautechniken",
      link: "/renovierung"
    },
    {
      icon: Hammer,
      title: "Neugestaltung",
      description: "Kreative Raumaufteilung und Designlösungen für optimale Raumnutzung",
      link: "/neugestaltung"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="hover:shadow-lg transition-all duration-300 hover-scale h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-primary font-medium">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
