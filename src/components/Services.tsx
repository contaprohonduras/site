import { Calculator, FileText, Users, Building, TrendingUp, Shield, Briefcase, Scale } from 'lucide-react';
import LazyImage from './LazyImage';

const Services = () => {
  const serviceCategories = [
    {
      icon: Calculator,
      title: 'Servicios Contables',
      description: 'Soluciones integrales para la gestión financiera de su empresa',
      services: [
        'Outsourcing contable completo',
        'Estados financieros detallados',
        'Análisis de costos y rentabilidad',
        'Contabilidad de inventarios',
        'Conciliaciones bancarias'
      ],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      title: 'Servicios Fiscales',
      description: 'Cumplimiento tributario y optimización fiscal para su negocio',
      services: [
        'Declaraciones de impuestos',
        'Planificación fiscal estratégica',
        'Cumplimiento normativo',
        'Asesoría en DEI y RTN',
        'Gestión ante la SAR'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Servicios Administrativos',
      description: 'Optimización de procesos administrativos y de recursos humanos',
      services: [
        'Gestión de nóminas completa',
        'Elaboración de presupuestos',
        'Control interno y auditoría',
        'Implementación de sistemas',
        'Capacitación del personal'
      ],
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Scale,
      title: 'Servicios Legales',
      description: 'Asesoría legal especializada en el ámbito empresarial',
      services: [
        'Constitución de empresas',
        'Elaboración de contratos',
        'Asesoría laboral',
        'Trámites corporativos',
        'Representación legal'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const openWhatsApp = (service) => {
    const message = `Hola, me interesa conocer más sobre los ${service} de CONTAPROH`;
    window.open(`https://wa.me/50498212291?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-white overflow-visible">
      <div className="container mx-auto px-4 w-full max-w-full overflow-visible">

        {/* Encabezado */}
        <div className="text-center mb-16 animate-fade-in w-full max-w-full px-2">
          <h2 className="font-krona text-section text-gray-800 mb-6">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-rubik max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de servicios contables, fiscales, administrativos y legales especializados para MIPYME
          </p>
        </div>

        {/* Servicios grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 w-full max-w-full">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`${category.bgColor} rounded-3xl p-4 sm:p-6 md:p-8 card-hover w-full max-w-full overflow-visible`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1 w-full max-w-full">
                    <h3 className="font-krona text-xl text-gray-800 mb-3">{category.title}</h3>
                    <p className="text-gray-600 font-rubik mb-6 leading-relaxed">{category.description}</p>
                    <ul className="space-y-3 mb-6">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 font-rubik">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openWhatsApp(category.title)}
                      className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full font-rubik font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto`}
                    >
                      Consultar Ahora
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Especialistas MIPYME */}
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white w-full max-w-full overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-full">
            <div className="w-full max-w-full px-4">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-krona text-2xl sm:text-3xl leading-tight">Especialistas en MIPYME</h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl font-rubik mb-6 opacity-90 leading-relaxed">
                Entendemos las necesidades únicas de las Micro, Pequeñas y Medianas Empresas. Nuestros servicios están diseñados específicamente para impulsar el crecimiento de su negocio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="font-rubik text-sm sm:text-base">Crecimiento Sostenible</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="font-rubik text-sm sm:text-base">Protección Legal</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="font-rubik text-sm sm:text-base">Solución Integral</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="font-rubik text-sm sm:text-base">Atención Personalizada</span>
                </div>
              </div>
              <button
                onClick={() => openWhatsApp('servicios especializados para MIPYME')}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-rubik font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
              >
                Conoce Más sobre MIPYME
              </button>
            </div>
            <div className="relative w-full max-w-full overflow-visible">
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-3"></div>
              <LazyImage
                src="/images/mipyme-growth.jpg"
                alt="MIPYME en crecimiento - Empresas hondureñas exitosas"
                className="relative rounded-2xl shadow-2xl w-full h-auto max-h-[400px]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;