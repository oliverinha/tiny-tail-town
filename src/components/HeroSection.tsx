import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import heroImage from "@/assets/hero-puppies.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <PawPrint className="w-16 h-16 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Mundo dos
            <span className="text-primary block">Cachorrinhos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra tudo sobre nossos amigos de quatro patas: cuidados, raças, 
            dicas e muito amor!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-warm">
              <Heart className="w-5 h-5 mr-2" />
              Explorar Raças
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Dicas de Cuidado
            </Button>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 opacity-30">
        <PawPrint className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-32 right-16 opacity-30">
        <PawPrint className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <Heart className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default HeroSection;