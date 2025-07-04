
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 sm:-left-16 md:-left-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg animate-scale-in">
              Mario
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Allaround-Handwerker
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Ihr kompetenter Partner für alle Handwerksleistungen - Von der Planung bis zur Fertigstellung
          </p>
          <Link to="/contact">
            <Button size="lg" className="animate-scale-in">
              <ArrowRight className="mr-2 h-5 w-5" />
              Jetzt Beratung anfragen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
