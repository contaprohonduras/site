import { Target, Eye, Heart, Shield, Users, Zap, Trophy, Clock } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en cada proceso'
    },
    {
      icon: Heart,
      title: 'Respeto',
      description: 'Valoramos a nuestros clientes y construimos relaciones duraderas'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboramos para ofrecer soluciones integrales'
    },
    {
      icon: Zap,
      title: 'Disciplina',
      description: 'Mantenemos estándares de calidad y cumplimiento rigurosos'
    },
    {
      icon: Trophy,
      title: 'Excelencia',
      description: 'Búsqueda permanente de la excelencia en nuestros servicios'
    }
  ];

  const stats = [
    {
      icon: Clock,
      number: '20+',
      label: 'Años de Experiencia',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Clientes Atendidos',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Compromiso',
      color: 'text-blue-600'
    },
    {
      icon: Trophy,
      number: '24/7',
      label: 'Soporte',
      color: 'text-green-600'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-krona text-section text-gray-800 mb-6">
            Conoce a <span className="text-blue-600">CONTAPROH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-rubik max-w-3xl mx-auto leading-relaxed">
            El aliado estratégico que las MIPYME's necesitan 
            para organizar y optimizar su contabilidad
          </p>
        </div>

        {/* Sobre Nosotros + Imagen del equipo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="font-krona text-2xl text-gray-800 mb-6">Sobre Nosotros</h3>
            <p className="text-gray-700 font-rubik text-lg leading-relaxed mb-6">
              CONTAPROH es una firma de contadores públicos, establecida en San Pedro Sula y Puerto Cortés, 
              dedicada a brindar servicios contables y fiscales para la MIPYME en Honduras.
            </p>
            <p className="text-gray-700 font-rubik text-lg leading-relaxed mb-6">
              Especialistas en <span className="font-bold text-blue-600">Micro, Pequeña y Mediana Empresa</span>, 
              atendiendo las necesidades únicas de cada negocio y ofreciendo soluciones personalizadas 
              que impulsan el crecimiento y la competitividad.
            </p>
            <p className="text-green-600 font-rubik text-xl font-bold">
              "¡Organizamos la contabilidad de su empresa o negocio!"
            </p>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-2xl transform -rotate-3"></div>
              <img
                src="/images/team-professional.jpg"
                alt="Equipo profesional de CONTAPROH"
                className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-krona text-2xl text-gray-800">Nuestra Misión</h3>
            </div>
            <p className="text-gray-700 font-rubik text-lg leading-relaxed">
              Asesorar a nuestros clientes y brindarles las herramientas para una mejor administración 
              de sus recursos, potenciar oportunidades de crecimiento y competitividad garantizando 
              la calidad de nuestros servicios.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-krona text-2xl text-gray-800">Nuestra Visión</h3>
            </div>
            <p className="text-gray-700 font-rubik text-lg leading-relaxed">
              Ser una firma líder a nivel nacional, responsable de brindar servicios profesionales 
              y soluciones integrales para la micro, pequeña y mediana empresa; contribuyendo con 
              el desarrollo y transformación de la región.
            </p>
          </div>
        </div>

        {/* Valores Corporativos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-krona text-2xl text-gray-800 mb-4">Nuestros Valores</h3>
            <p className="text-gray-600 font-rubik text-lg">Los principios que guían nuestro trabajo y definen nuestra cultura empresarial</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-rubik font-bold text-lg text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600 font-rubik text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estadísticas impresionantes */}
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="font-krona text-3xl mb-4">Nuestra Trayectoria</h3>
            <p className="text-xl font-rubik opacity-90">Números que respaldan nuestra experiencia y compromiso</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white/0 rounded-2xl p-6 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold font-krona mb-2">{stat.number}</div>
                  <div className="text-lg font-rubik opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;