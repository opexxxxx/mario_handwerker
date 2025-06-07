
import { Clock, CheckCircle, Users, Home } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    { icon: Clock, text: "Schnelle Bauzeit" },
    { icon: CheckCircle, text: "Hochwertige Materialien" },
    { icon: Users, text: "Erfahrenes Team" },
    { icon: Home, text: "Komplettservice" }
  ];

  return (
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
  );
};

export default AdvantagesSection;
