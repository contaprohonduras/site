import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

const serializeError = (error: any) => {
  if (error instanceof Error) {
    return error.message + '\n' + error.stack;
  }
  return JSON.stringify(error, null, 2);
};

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const isDevelopment = import.meta.env.DEV;

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>
        
        <h1 className="text-2xl font-krona text-gray-900 mb-4">
          ¡Algo salió mal!
        </h1>
        
        <p className="text-gray-600 font-rubik mb-6">
          Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
        </p>

        <div className="space-y-3 mb-6">
          <button
            onClick={resetError}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-rubik font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Intentar de nuevo</span>
          </button>
          
          <button
            onClick={handleReload}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-rubik font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Recargar página</span>
          </button>
          
          <button
            onClick={handleGoHome}
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-rubik font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Ir al inicio</span>
          </button>
        </div>

        {isDevelopment && (
          <details className="text-left">
            <summary className="cursor-pointer text-sm text-gray-500 font-rubik mb-2">
              Detalles del error (desarrollo)
            </summary>
            <pre className="text-xs text-red-600 bg-red-50 p-3 rounded border overflow-auto max-h-40">
              {serializeError(error)}
            </pre>
          </details>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-rubik">
            Si el problema persiste, contáctanos:
          </p>
          <a
            href="https://wa.me/50498212291"
            className="text-green-600 hover:text-green-700 font-rubik font-medium"
          >
            WhatsApp: +504 9821-2291
          </a>
        </div>
      </div>
    </div>
  );
};

export class ErrorBoundary extends React.Component<
  { 
    children: React.ReactNode;
    fallback?: React.ComponentType<ErrorFallbackProps>;
  },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<ErrorFallbackProps> }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (!import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
      // Here you could send to error tracking service like Sentry
      // logErrorToService(error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || ErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}