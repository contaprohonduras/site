import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/50498212291?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20CONTAPROH', '_blank');
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'propuestas', label: 'Propuestas' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Barra superior de contacto */}
      <div className="hidden lg:block bg-slate-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+504 9821-2291</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info.contaproh@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>San Pedro Sula, Cortés, Honduras</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="font-krona text-xl text-blue-600">CONTAPROH</h1>
              </div>
            </div>

            {/* Navegación desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-rubik font-medium py-2 px-3 rounded-md transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={openWhatsApp}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-rubik font-medium transition-colors duration-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left font-rubik font-medium py-3 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+504 9821-2291</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>info.contaproh@gmail.com</span>
                    </div>
                  </div>
                  <button
                    onClick={openWhatsApp}
                    className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-rubik font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Consulta Ahora</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;