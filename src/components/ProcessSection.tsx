
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "1",
      title: "Beratung & Planung",
      description: "In einem ausführlichen Beratungsgespräch vor Ort analysieren wir Ihre Wünsche und Anforderungen. Gemeinsam entwickeln wir eine detaillierte Projektplanung, die alle Aspekte Ihres Vorhabens berücksichtigt. Von der ersten Idee bis zur technischen Umsetzung - wir begleiten Sie durch jeden Planungsschritt.",
      imageUrl: "/lovable-uploads/a68f6011-43d6-4833-b233-7598271d7cb5.png",
      reverse: false
    },
    {
      step: "2",
      title: "Materialauswahl",
      description: "Basierend auf Ihren Anforderungen und unserem Fachwissen wählen wir gemeinsam die optimalen Materialien aus. Dabei achten wir auf Qualität, Langlebigkeit und Ihr Budget. Unsere langjährigen Partnerschaften mit renommierten Herstellern ermöglichen uns, Ihnen stets beste Qualität zu fairen Preisen anzubieten.",
      imageUrl: "/placeholder.svg",
      reverse: true
    },
    {
      step: "3",
      title: "Professionelle Ausführung",
      description: "Unser erfahrenes Handwerkerteam setzt Ihr Projekt mit höchster Präzision und Sorgfalt um. Dabei halten wir uns strikt an vereinbarte Termine und Qualitätsstandards. Durch regelmäßige Zwischenkontrollen stellen wir sicher, dass alle Arbeiten fachgerecht und nach neuesten Standards ausgeführt werden.",
      imageUrl: "/placeholder.svg",
      reverse: false
    },
    {
      step: "4",
      title: "Qualitätskontrolle & Übergabe",
      description: "Nach Fertigstellung führen wir eine umfassende Qualitätskontrolle durch und nehmen gemeinsam mit Ihnen das Projekt ab. Wir erklären Ihnen alle durchgeführten Arbeiten und übergeben Ihnen alle relevanten Unterlagen. Auch nach Projektabschluss stehen wir Ihnen für Fragen und Nacharbeiten zur Verfügung.",
      imageUrl: "/placeholder.svg",
      reverse: true
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unser Arbeitsprozess</h2>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((item, index) => (
              <div key={index} className={`flex items-center gap-8 ${item.reverse ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <h4 className="text-2xl font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-secondary/20 rounded-lg flex items-center justify-center">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
