import { ArrowRight, Users, Calendar, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/50498212291?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20CONTAPROH', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50 pt-32 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-overlay opacity-10"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <h1 className="font-krona text-hero text-gray-800 mb-4 leading-tight">
                Contadores
                <span className="block text-blue-600">Profesionales</span>
                <span className="block text-green-500">de Honduras</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mb-6"></div>
            </div>

            <p className="text-lg text-gray-700 font-rubik mb-8 leading-relaxed">
              Contadores Públicos con <span className="font-bold text-blue-600">más de 20 años de experiencia</span>, brindando servicios de contabilidad y gestión fiscal para la MIPYME en Honduras.
            </p>
            <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-r-lg mb-8">
              <p className="text-lg font-medium text-green-700 m-0">
                "¡Organizamos la contabilidad de su empresa o negocio!"
              </p>
            </div>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-bold text-2xl text-blue-600">20+</div>
                <div className="text-sm text-gray-600 font-rubik">Años de Experiencia</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="font-bold text-2xl text-green-600">500+</div>
                <div className="text-sm text-gray-600 font-rubik">Clientes Atendidos</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="font-bold text-2xl text-blue-600">100%</div>
                <div className="text-sm text-gray-600 font-rubik">Compromiso</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="font-bold text-2xl text-yellow-500">24/7</div>
                <div className="text-sm text-gray-600 font-rubik">Soporte</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-rubik font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover-lift animate-pulse">
                <span>Consulte Ahora</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-rubik font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover-lift animate-pulse"
              >
                <span>Ver Servicios</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Imagen hero */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/hero-office.jpg"
                alt="Oficina moderna de CONTAPROH"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover hover-lift"
              />
              
              {/* Badge flotante */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-lg text-gray-600 font-rubik">Especialistas</div>
                  <div className="text-3xl font-bold text-blue-600 font-krona">MIPYME</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;