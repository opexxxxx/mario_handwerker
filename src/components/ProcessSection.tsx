
const ProcessSection = () => {
  const processSteps = [
    { step: "1", title: "Beratung & Planung", description: "Kostenlose Beratung vor Ort und detaillierte Projektplanung" },
    { step: "2", title: "Materialauswahl", description: "Auswahl hochwertiger Materialien passend zu Ihren Anforderungen" },
    { step: "3", title: "Professionelle Ausführung", description: "Fachgerechte Montage durch unser erfahrenes Team" },
    { step: "4", title: "Qualitätskontrolle", description: "Abschlusskontrolle und Übergabe des fertigen Projekts" }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unser Arbeitsprozess</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {processSteps.map((item, index) => (
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
  );
};

export default ProcessSection;
