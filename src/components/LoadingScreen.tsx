import React from 'react';
import { Calculator } from 'lucide-react';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Cargando CONTAPROH..." 
}) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo animado */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
            <Calculator className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>

        {/* Texto */}
        <h2 className="text-2xl font-krona text-gray-800 mb-4">
          CONTAPROH
        </h2>
        <p className="text-lg font-rubik text-gray-600 mb-8">
          {message}
        </p>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Barra de progreso opcional */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full animate-pulse w-3/4"></div>
          </div>
        </div>

        {/* Texto adicional */}
        <p className="text-sm font-rubik text-gray-500 mt-6">
          Preparando la mejor experiencia contable para su empresa
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
