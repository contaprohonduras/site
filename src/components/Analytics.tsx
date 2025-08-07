import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsProps {
  trackingId?: string;
  enableInDevelopment?: boolean;
}

export const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = 'G-XXXXXXXXXX', // Reemplazar con tu Google Analytics ID
  enableInDevelopment = false 
}) => {
  useEffect(() => {
    // Solo cargar analytics en producción o si está habilitado en desarrollo
    if (!enableInDevelopment && import.meta.env.DEV) {
      return;
    }

    // Cargar Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', trackingId, {
        page_title: 'CONTAPROH - Servicios Contables Profesionales',
        page_location: window.location.href,
        send_page_view: true
      });
    };

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="${trackingId}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [trackingId, enableInDevelopment]);

  return null;
};

// Funciones de tracking personalizadas
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'CONTAPROH',
      event_label: parameters.label || '',
      value: parameters.value || 1,
      ...parameters
    });
  }
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: source,
    source: source
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'Lead',
    event_label: formType,
    form_type: formType
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'Navigation',
    event_label: sectionName,
    section: sectionName
  });
};

export const trackPageView = (pageName: string) => {
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};
