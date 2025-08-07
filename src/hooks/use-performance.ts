import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  domContentLoaded: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  cumulativeLayoutShift: number | null;
  firstInputDelay: number | null;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    domContentLoaded: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    cumulativeLayoutShift: null,
    firstInputDelay: null,
  });

  useEffect(() => {
    // Función para obtener métricas básicas de navigation timing
    const getNavigationMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navTiming) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navTiming.loadEventEnd - navTiming.loadEventStart,
            domContentLoaded: navTiming.domContentLoadedEventEnd - navTiming.domContentLoadedEventStart,
          }));
        }
      }
    };

    // Función para obtener Core Web Vitals
    const getCoreWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        
        // First Contentful Paint
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({
                  ...prev,
                  firstContentfulPaint: entry.startTime,
                }));
              }
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer not supported');
        }

        // Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: lastEntry.startTime,
            }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }

        // Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
                setMetrics(prev => ({
                  ...prev,
                  cumulativeLayoutShift: clsValue,
                }));
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }

        // First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              setMetrics(prev => ({
                ...prev,
                firstInputDelay: (entry as any).processingStart - entry.startTime,
              }));
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }
      }
    };

    // Esperar a que el DOM esté cargado
    if (document.readyState === 'complete') {
      getNavigationMetrics();
      getCoreWebVitals();
    } else {
      window.addEventListener('load', () => {
        getNavigationMetrics();
        getCoreWebVitals();
      });
    }

    // Cleanup no es necesario para PerformanceObserver ya que se desconectan automáticamente
  }, []);

  // Función para obtener una evaluación general de performance
  const getPerformanceScore = (): 'excellent' | 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    const { firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift, firstInputDelay } = metrics;

    if (!firstContentfulPaint || !largestContentfulPaint) return 'unknown';

    let score = 0;
    let checks = 0;

    // FCP scoring (good < 1.8s, needs improvement < 3s)
    if (firstContentfulPaint < 1800) score += 3;
    else if (firstContentfulPaint < 3000) score += 2;
    else score += 1;
    checks++;

    // LCP scoring (good < 2.5s, needs improvement < 4s)
    if (largestContentfulPaint < 2500) score += 3;
    else if (largestContentfulPaint < 4000) score += 2;
    else score += 1;
    checks++;

    // CLS scoring (good < 0.1, needs improvement < 0.25)
    if (cumulativeLayoutShift !== null) {
      if (cumulativeLayoutShift < 0.1) score += 3;
      else if (cumulativeLayoutShift < 0.25) score += 2;
      else score += 1;
      checks++;
    }

    // FID scoring (good < 100ms, needs improvement < 300ms)
    if (firstInputDelay !== null) {
      if (firstInputDelay < 100) score += 3;
      else if (firstInputDelay < 300) score += 2;
      else score += 1;
      checks++;
    }

    const avgScore = score / checks;
    
    if (avgScore >= 2.5) return 'excellent';
    if (avgScore >= 2) return 'good';
    if (avgScore >= 1.5) return 'needs-improvement';
    return 'poor';
  };

  return {
    metrics,
    performanceScore: getPerformanceScore(),
    logMetrics: () => {
      if (import.meta.env.DEV) {
        console.table(metrics);
        console.log('Performance Score:', getPerformanceScore());
      }
    }
  };
};
