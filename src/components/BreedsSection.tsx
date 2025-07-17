import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import puppyBreedsImage from "@/assets/puppy-breeds.jpg";

const BreedsSection = () => {
  const breeds = [
    {
      name: "Golden Retriever",
      personality: "Amigável e Inteligente",
      size: "Grande",
      description: "Conhecidos por sua natureza gentil e amor por crianças."
    },
    {
      name: "Labrador",
      personality: "Energético e Leal",
      size: "Grande", 
      description: "Companheiros perfeitos para famílias ativas."
    },
    {
      name: "Beagle",
      personality: "Curioso e Brincalhão",
      size: "Médio",
      description: "Pequenos exploradores com personalidade vibrante."
    },
    {
      name: "Corgi",
      personality: "Corajoso e Carinhoso",
      size: "Pequeno",
      description: "Cães reais com grandes personalidades."
    },
    {
      name: "Husky Siberiano",
      personality: "Aventureiro e Independente", 
      size: "Grande",
      description: "Espíritos livres que adoram aventuras."
    },
    {
      name: "Bulldog Francês",
      personality: "Calmo e Companheiro",
      size: "Pequeno",
      description: "Perfeitos para apartamentos e vida urbana."
    }
  ];

  const getSizeColor = (size: string) => {
    switch (size) {
      case "Pequeno": return "bg-accent/20 text-accent-foreground";
      case "Médio": return "bg-secondary/20 text-secondary-foreground";
      case "Grande": return "bg-primary/20 text-primary";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Raças Populares
            <span className="text-primary block">de Cachorrinhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Cada raça tem suas características únicas. Conheça algumas das raças 
            mais amadas e descubra qual combina melhor com seu estilo de vida.
          </p>
          
          <div className="flex justify-center mb-12">
            <img 
              src={puppyBreedsImage} 
              alt="Diferentes raças de cachorrinhos" 
              className="rounded-2xl shadow-warm max-w-md w-full object-cover h-64"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breeds.map((breed, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 border-0">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {breed.name}
                  </h3>
                  <Badge className={getSizeColor(breed.size)}>
                    {breed.size}
                  </Badge>
                </div>
                
                <p className="text-primary font-medium mb-3">
                  {breed.personality}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {breed.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedsSection;