import { PawPrint, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-warm py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <PawPrint className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-foreground">
                Mundo dos Cachorrinhos
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Compartilhando amor, conhecimento e cuidado pelos nossos 
              melhores amigos de quatro patas.
            </p>
          </div>

          {/* Links úteis */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Links Úteis
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Raças de Cachorros
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Guias de Cuidado
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Dicas de Treinamento
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Saúde e Bem-estar
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Entre em Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end">
                <Mail className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">contato@cachorrinhos.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <MapPin className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Mundo dos Cachorrinhos. Feito com{" "}
              <Heart className="w-4 h-4 inline text-primary" />{" "}
              para nossos amigos peludos.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;