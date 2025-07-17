import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Heart, Gamepad2, Shield, Clock, Users } from "lucide-react";
import puppyCareImage from "@/assets/puppy-care.jpg";
import puppyPlayingImage from "@/assets/puppy-playing.jpg";

const CareSection = () => {
  const careTopics = [
    {
      icon: Utensils,
      title: "Alimentação Saudável",
      description: "Aprenda sobre a nutrição adequada para cada fase da vida do seu cachorrinho."
    },
    {
      icon: Heart,
      title: "Cuidados Veterinários",
      description: "Vacinas, check-ups regulares e sinais de saúde para ficar atento."
    },
    {
      icon: Gamepad2,
      title: "Exercícios e Brincadeiras",
      description: "Atividades físicas e mentais essenciais para o bem-estar."
    },
    {
      icon: Shield,
      title: "Segurança e Proteção",
      description: "Como manter seu pet seguro em casa e durante passeios."
    },
    {
      icon: Clock,
      title: "Rotina e Treinamento",
      description: "Estabeleça horários e ensine comandos básicos com amor e paciência."
    },
    {
      icon: Users,
      title: "Socialização",
      description: "A importância de apresentar seu cachorrinho a outras pessoas e pets."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cuidados
            <span className="text-primary block">Essenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cuidar de um cachorrinho é uma responsabilidade cheia de amor. 
            Descubra as melhores práticas para garantir uma vida feliz e saudável 
            para seu companheiro.
          </p>
        </div>

        {/* Imagens ilustrativas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <img 
              src={puppyCareImage} 
              alt="Cuidados com cachorrinhos" 
              className="rounded-2xl shadow-warm w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
          <div className="relative">
            <img 
              src={puppyPlayingImage} 
              alt="Cachorrinhos brincando" 
              className="rounded-2xl shadow-warm w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Cards de cuidados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {careTopics.map((topic, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <topic.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-warm inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quer saber mais sobre cuidados?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Explore nossos guias detalhados e dicas de especialistas para 
              cuidar melhor do seu amigo de quatro patas.
            </p>
            <Button className="bg-primary hover:bg-primary/90 shadow-warm">
              <Heart className="w-4 h-4 mr-2" />
              Ver Guias Completos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;