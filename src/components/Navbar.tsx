import { Menu, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const whatsappNumber = "5538998622897"; // Número do WhatsApp
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const instagramUser = "seu_perfil"; // Substitua pelo seu usuário do Instagram
  const instagramMessage = "Olá! Gostaria de saber mais sobre os serviços.";
  const instagramUrl = `https://www.instagram.com/direct/t/${instagramUser}?text=${encodeURIComponent(instagramMessage)}`;

  const facebookUser = "seu_perfil"; // Substitua pelo seu usuário do Facebook
  const facebookMessage = "Olá! Tenho interesse nos planos!";
  const facebookUrl = `https://m.me/${facebookUser}?text=${encodeURIComponent(facebookMessage)}`;

  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" className="text-white lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text"
            >
              Net
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Ícone de Telefone */}
            <Button variant="ghost" className="text-white rounded-full w-10 h-10 p-0 bg-white">
              <Phone className="w-5 h-5 text-primary" />
            </Button>

            {/* Botão do Facebook */}
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white rounded-full w-10 h-10 p-0 bg-white">
                <Facebook className="w-5 h-5 text-blue-600" />
              </Button>
            </a>

            {/* Botão do Instagram */}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white rounded-full w-10 h-10 p-0 bg-white">
                <Instagram className="w-5 h-5 text-pink-600" />
              </Button>
            </a>

            {/* Botão do WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white rounded-full w-10 h-10 p-0 bg-white">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </Button>
            </a>

            {/* Botão de Suporte via WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="bg-green-500 text-white hover:bg-green-600 border-none">
                Suporte
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center py-2 border-t border-orange-700 space-x-4">
          <Link to="/">
            <Button variant="ghost" className="text-white bg-orange-600 px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition">
              PLANOS
            </Button>
          </Link>
          <Link to="/accessories">
            <Button variant="ghost" className="text-white bg-orange-600 px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition">
              ACESSÓRIOS
            </Button>
          </Link>
          <Link to="/news">
            <Button variant="ghost" className="text-white bg-orange-600 px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition">
              NOTÍCIAS
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
