import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Building, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const servicios = [
    'Servicios Contables',
    'Servicios Fiscales', 
    'Servicios Administrativos',
    'Servicios Legales',
    'Otros Servicios'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
    if (!formData.empresa.trim()) newErrors.empresa = 'El nombre de la empresa es requerido';
    if (!formData.servicio) newErrors.servicio = 'Seleccione un servicio';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Crear mensaje para WhatsApp en el formato solicitado
      const whatsappMessage = `Nueva consulta para CONTAPROH:
      
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Empresa: ${formData.empresa}
Servicio de interés: ${formData.servicio}
Mensaje: ${formData.mensaje}`;

      // Abrir WhatsApp con el mensaje
      const whatsappUrl = `https://wa.me/50498212291?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        mensaje: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/50498212291?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20CONTAPROH', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-krona text-section text-gray-800 mb-6">
            ¡Contáctanos <span className="text-blue-600">Hoy</span>!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-rubik max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ayudarle a organizar la contabilidad de su negocio. 
            ¡Comience su consulta gratuita hoy mismo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="animate-slide-in-left">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="font-krona text-2xl text-gray-800 mb-6">Solicite su Consulta Gratuita</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-rubik font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl font-rubik focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.nombre ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Su nombre completo"
                      />
                    </div>
                    {errors.nombre && <p className="text-red-500 text-sm mt-1 font-rubik">{errors.nombre}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-rubik font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl font-rubik focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="su@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1 font-rubik">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-rubik font-medium mb-2">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl font-rubik focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.telefono ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+504 0000-0000"
                      />
                    </div>
                    {errors.telefono && <p className="text-red-500 text-sm mt-1 font-rubik">{errors.telefono}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-rubik font-medium mb-2">
                      Empresa *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl font-rubik focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.empresa ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                    {errors.empresa && <p className="text-red-500 text-sm mt-1 font-rubik">{errors.empresa}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-rubik font-medium mb-2">
                    Servicio de Interés *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl font-rubik focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none ${
                        errors.servicio ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Seleccione un servicio</option>
                      {servicios.map((servicio, index) => (
                        <option key={index} value={servicio}>{servicio}</option>
                      ))}
                    </select>
                  </div>
                  {errors.servicio && <p className="text-red-500 text-sm mt-1 font-rubik">{errors.servicio}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-rubik font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-xl font-rubik focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                      errors.mensaje ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Cuéntenos sobre sus necesidades contables..."
                  />
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1 font-rubik">{errors.mensaje}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-rubik font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Información principal */}
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 text-white">
                <h3 className="font-krona text-2xl mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-rubik font-bold mb-1">Teléfono</h4>
                      <p className="font-rubik opacity-90">+504 9821-2291</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-rubik font-bold mb-1">Email</h4>
                      <p className="font-rubik opacity-90">info.contaproh@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-rubik font-bold mb-1">Ubicación</h4>
                      <p className="font-rubik opacity-90">San Pedro Sula, Cortés, Honduras</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-rubik font-bold mb-1">Horarios de Atención</h4>
                      <p className="font-rubik opacity-90">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="font-rubik opacity-90">Sábados: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Botones de acción rápida */}
              <div className="grid gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-rubik font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat directo</span>
                </button>
                
                <a
                  href="tel:+50498212291"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-rubik font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Llama Ahora</span>
                </a>
                
                <a
                  href="mailto:info.contaproh@gmail.com"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-rubik font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Enviar Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;