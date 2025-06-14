
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
        <h2 className="text-3xl font-bold text-center mb-12">Warum wir?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-accent transition-colors">
                <advantage.icon className="h-8 w-8 text-primary" />
                <span className="text-lg font-medium">{advantage.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
