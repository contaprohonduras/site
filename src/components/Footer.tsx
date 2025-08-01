import { Phone, Mail, MapPin, ArrowRight, Calculator, FileText, Users, Scale } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/50498212291?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20CONTAPROH', '_blank');
  };

  const navigationLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'propuestas', label: 'Propuestas' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const serviceLinks = [
    { icon: Calculator, label: 'Servicios Contables', id: 'servicios' },
    { icon: FileText, label: 'Servicios Fiscales', id: 'servicios' },
    { icon: Users, label: 'Servicios Administrativos', id: 'servicios' },
    { icon: Scale, label: 'Servicios Legales', id: 'servicios' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Información corporativa */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="font-krona text-xl text-white">CONTAPROH</h1>
                <p className="text-sm text-gray-400 font-rubik">Contadores Profesionales de Honduras</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-rubik text-lg leading-relaxed mb-6">
              Con más de 20 años de experiencia, somos el aliado estratégico que las MIPYME hondureñas 
              necesitan para organizar y optimizar su contabilidad.
            </p>
            
            <div className="mb-6">
              <p className="text-green-400 font-rubik text-xl font-bold mb-4">
                "¡Organizamos la contabilidad de su negocio!"
              </p>
            </div>
            
            {/* Información de contacto */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 font-rubik">+504 9821-2291</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 font-rubik">firma.contaproh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 font-rubik">San Pedro Sula, Cortés, Honduras</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-krona text-lg text-white mb-6">Navegación</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white font-rubik transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-krona text-lg text-white mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="text-gray-300 hover:text-white font-rubik transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <IconComponent className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      <span>{service.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-rubik font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
              >
                <span>Ver Todos</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA de contacto */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-krona text-2xl text-white mb-4">
              ¿Listo para organizar la contabilidad de su negocio?
            </h3>
            <p className="text-xl font-rubik text-white/90 mb-8">
              Contacte a nuestros expertos hoy mismo y reciba una consulta gratuita
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-rubik font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Consulta por WhatsApp</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-rubik font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Formulario de Contacto</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-rubik text-sm mb-4 md:mb-0">
              © 2025 CONTAPROH - Contadores Profesionales de Honduras. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-rubik text-sm">Más de 20 años de experiencia</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-400 font-rubik text-sm">Especialistas en MIPYME</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;