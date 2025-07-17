import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Amor Incondicional",
      description: "Os cachorrinhos nos ensinam sobre amor puro e incondicional todos os dias."
    },
    {
      icon: Shield,
      title: "Companhia e Proteção",
      description: "Nossos amigos de quatro patas são os melhores companheiros e guardiões."
    },
    {
      icon: Users,
      title: "Parte da Família",
      description: "Cada cachorrinho traz alegria e se torna um membro querido da família."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Amamos
            <span className="text-primary block">Cachorrinhos?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Os cachorrinhos trazem uma alegria única para nossas vidas. Eles são leais, 
            carinhosos e sempre prontos para nos fazer sorrir. Descubra porque estes 
            companheiros são tão especiais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border-0">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;