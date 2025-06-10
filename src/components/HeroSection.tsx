
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Allaround-Handwerker
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Ihr kompetenter Partner für alle Handwerksleistungen - Von der Planung bis zur Fertigstellung
          </p>
          <Button size="lg" className="animate-scale-in" onClick={scrollToContact}>
            <ArrowRight className="mr-2 h-5 w-5" />
            Jetzt Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
