import { Heart, Layers, Handshake, TrendingDown, Cpu, ArrowRight } from 'lucide-react';

const ValuePropositions = () => {
  const propositions = [
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Cada cliente es único. Desarrollamos estrategias contables adaptadas a las necesidades específicas de su empresa.',
      features: [
        'Asesoría dedicada y personalizada',
        'Comprensión profunda de su negocio',
        'Comunicación directa y constante',
        'Flexibilidad en horarios y metodologías'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Layers,
      title: 'Soluciones Integrales',
      description: 'Un solo lugar para todas sus necesidades contables, fiscales, administrativas y legales.',
      features: [
        'Servicios contables completos',
        'Gestión fiscal y tributaria',
        'Asesoría administrativa',
        'Soporte legal empresarial'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Handshake,
      title: 'Relación a Largo Plazo',
      description: 'No somos solo un proveedor, somos su socio estratégico para el crecimiento sostenible.',
      features: [
        'Compromiso a largo plazo',
        'Crecimiento conjunto',
        'Adaptación a cambios del mercado',
        'Soporte en expansión empresarial'
      ],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: TrendingDown,
      title: 'Reducción de Costos',
      description: 'Optimizamos sus recursos y maximizamos la productividad de su equipo administrativo.',
      features: [
        'Eliminación de costos fijos',
        'Reducción de errores costosos',
        'Optimización de procesos',
        'Mayor eficiencia operativa'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/50498212291?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20las%20propuestas%20de%20valor%20de%20CONTAPROH', '_blank');
  };

  return (
    <section id="propuestas" className="py-20 bg-gray-50 overflow-visible">
      <div className="container mx-auto px-4 w-full max-w-full overflow-visible">
        {/* Encabezado de sección */}
        <div className="text-center mb-16 animate-fade-in w-full max-w-full px-2">
          <h2 className="font-krona text-section text-gray-800 mb-6">
            ¿Por qué elegir <span className="text-blue-600">CONTAPROH</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-rubik max-w-3xl mx-auto leading-relaxed">
            Descubra las ventajas competitivas que nos convierten en la elección preferida 
            de las MIPYME hondureñas
          </p>
        </div>

        {/* Grid de propuestas de valor */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 w-full max-w-full">
          {propositions.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg card-hover animate-slide-up w-full max-w-full overflow-visible"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 w-full max-w-full">
                    <h3 className="font-krona text-xl text-gray-800 mb-4">{prop.title}</h3>
                    <p className="text-gray-600 font-rubik mb-6 leading-relaxed">{prop.description}</p>
                    
                    <ul className="space-y-3">
                      {prop.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 font-rubik">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección de tecnología contable */}
        <div className="bg-white rounded-3xl p-4 sm:p-12 shadow-xl w-full max-w-full overflow-visible">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-full">
            <div className="animate-slide-in-left">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-krona text-3xl text-gray-800">Tecnología Contable Moderna</h3>
              </div>
              
              <p className="text-lg text-gray-700 font-rubik mb-6 leading-relaxed">
                Utilizamos las herramientas tecnológicas más avanzadas para garantizar 
                precisión, eficiencia y acceso en tiempo real a la información financiera 
                de su empresa.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-rubik">Software contable de última generación</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-rubik">Acceso remoto y seguro a sus datos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-rubik">Reportes automatizados en tiempo real</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-rubik">Respaldo y seguridad de información</span>
                </div>
              </div>
              
              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-rubik font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 w-full sm:w-auto"
              >
                <span>Conoce Nuestra Tecnología</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative w-full max-w-full overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/technology-digital.jpeg"
                  alt="Tecnología contable digital"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;