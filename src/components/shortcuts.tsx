"use client";

import { useEffect } from 'react';

interface DisableDevToolsProps {
  enablePointerBlock?: boolean;
  enableDebuggerDetection?: boolean;
  sensitiveMode?: boolean; // For admin/sensitive pages only
}

const DisableDevTools = ({ 
  enablePointerBlock = false, 
  enableDebuggerDetection = false,
  sensitiveMode = false 
}: DisableDevToolsProps = {}) => {
  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    const isProduction = process.env.NODE_ENV === 'production';
    
    // Skip all protections in development
    if (isDev) {
      console.log('🛠️ Dev mode: All protections disabled for development');
      return;
    }

    // Disable right-click context menu
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Comprehensive shortcut blocking for Windows and Mac
    const disableShortcuts = (e: KeyboardEvent) => {
      // F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Windows shortcuts
      if (e.ctrlKey) {
        if (e.shiftKey && (e.key === 'I' || e.key === 'i')) {
          e.preventDefault();
          return false;
        }
        if (e.shiftKey && (e.key === 'J' || e.key === 'j')) {
          e.preventDefault();
          return false;
        }
        if (e.shiftKey && (e.key === 'C' || e.key === 'c')) {
          e.preventDefault();
          return false;
        }
        if (e.shiftKey && (e.key === 'K' || e.key === 'k')) {
          e.preventDefault();
          return false;
        }
        if (e.key === 'u' || e.key === 'U') {
          e.preventDefault();
          return false;
        }
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          return false;
        }
        if (e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          return false;
        }
        if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          return false;
        }
      }

      // Mac shortcuts (Command key)
      if (e.metaKey) {
        if (e.altKey && (e.key === 'I' || e.key === 'i')) {
          e.preventDefault();
          return false;
        }
        if (e.altKey && (e.key === 'J' || e.key === 'j')) {
          e.preventDefault();
          return false;
        }
        if (e.altKey && (e.key === 'C' || e.key === 'c')) {
          e.preventDefault();
          return false;
        }
        if (e.altKey && (e.key === 'U' || e.key === 'u')) {
          e.preventDefault();
          return false;
        }
        if (e.key === 'u' || e.key === 'U') {
          e.preventDefault();
          return false;
        }
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          return false;
        }
        if (e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          return false;
        }
        if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          return false;
        }
      }
    };

    // Lightweight debugger detection (optional and throttled)
    const detectDebugger = () => {
      if (!enableDebuggerDetection) return;
      
      const start = performance.now();
      debugger;
      const end = performance.now();
      
      // More lenient threshold to avoid false positives
      if (end - start > 200) {
        if (sensitiveMode) {
          // More aggressive response for sensitive pages
          document.body.innerHTML = `
            <div style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #000;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
              font-size: 24px;
              z-index: 999999;
            ">
              🚫 Debugging detected. Access denied.
            </div>
          `;
        } else {
          // Just console warning for regular pages
          console.warn('Debugging activity detected');
        }
      }
    };

    // DevTools detection based on window size changes
    let devtools = false;
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      if (widthThreshold || heightThreshold) {
        if (!devtools) {
          devtools = true;
          if (sensitiveMode) {
            // Block access for sensitive pages
            document.body.innerHTML = `
              <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Arial, sans-serif;
                font-size: 24px;
                z-index: 999999;
              ">
                🚫 Developer tools detected. Please close them to continue.
              </div>
            `;
          } else {
            // Just console warning for regular pages
            console.warn('Developer tools opened');
          }
        }
      } else {
        if (devtools) {
          devtools = false;
          if (sensitiveMode) {
            window.location.reload();
          }
        }
      }
    };

    // Selective pointer events disable (only if explicitly enabled)
    const disablePointerEvents = () => {
      if (!enablePointerBlock) return;
      
      const style = document.createElement('style');
      style.innerHTML = `
        /* Only disable on specific elements, not everything */
        img, svg, .no-inspect {
          pointer-events: none !important;
          user-select: none !important;
        }
        
        /* Keep interactive elements working */
        button, a, input, textarea, select, 
        [role="button"], [tabindex], 
        .clickable, nav *, header *, footer * {
          pointer-events: auto !important;
        }
        
        /* Prevent text selection only on sensitive content */
        .no-select {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
      `;
      style.id = 'pointer-protection';
      document.head.appendChild(style);
    };

    // Basic text selection disable
    const disableSelection = () => {
      // Only disable on body, allow selection in specific areas
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      (document.body.style as any).mozUserSelect = 'none';
      (document.body.style as any).msUserSelect = 'none';
      
      // Re-enable for text content areas
      const textAreas = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div.content');
      textAreas.forEach(el => {
        (el as HTMLElement).style.userSelect = 'text';
        (el as HTMLElement).style.webkitUserSelect = 'text';
      });
    };

    // Disable drag and drop
    const disableDragDrop = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Console protection (production only)
    const setupConsoleProtection = () => {
      if (!isProduction) return;
      
      if (typeof console !== 'undefined') {
        console.clear();
        console.log('%c🚫 Developer tools access is restricted.', 'color: red; font-size: 16px; font-weight: bold;');
        
        // Only override in production and if sensitive mode is on
        if (sensitiveMode) {
          const originalLog = console.log;
          console.log = () => {};
          console.warn = () => {};
          console.error = () => {};
          console.info = () => {};
          console.debug = () => {};
          
          setTimeout(() => {
            originalLog('%c🚫 Console access disabled for security.', 'color: red; font-size: 14px;');
          }, 100);
        }
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableShortcuts);
    document.addEventListener('dragstart', disableDragDrop);
    document.addEventListener('selectstart', (e) => {
      if (!(e.target as HTMLElement).closest('input, textarea, .selectable')) {
        e.preventDefault();
      }
    });

    // Apply protections based on settings
    disableSelection();
    setupConsoleProtection();
    disablePointerEvents();

    // Start detection intervals (less frequent to avoid performance issues)
    const detectionInterval = setInterval(detectDevTools, 500); // Less frequent
    const debuggerInterval = enableDebuggerDetection 
      ? setInterval(detectDebugger, 3000) // Even less frequent 
      : null;

    // Frame-busting protection
    if (window.top !== window.self) {
      window.top!.location.href = window.self.location.href;
    }

    // Performance monitoring
    let performanceWarned = false;
    const checkPerformance = () => {
      if (performance.now() > 5000 && !performanceWarned) {
        performanceWarned = true;
        if (enableDebuggerDetection || enablePointerBlock) {
          console.warn('Security features may be affecting performance. Consider disabling on non-sensitive pages.');
        }
      }
    };
    
    const perfInterval = setTimeout(checkPerformance, 5000);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableShortcuts);
      document.removeEventListener('dragstart', disableDragDrop);
      document.removeEventListener('selectstart', (e) => e.preventDefault());
      
      // Re-enable text selection
      document.body.style.userSelect = 'auto';
      document.body.style.webkitUserSelect = 'auto';
      (document.body.style as any).mozUserSelect = 'auto';
      (document.body.style as any).msUserSelect = 'auto';

      // Remove pointer protection styles
      const styleEl = document.getElementById('pointer-protection');
      if (styleEl) {
        styleEl.remove();
      }

      // Clear intervals
      clearInterval(detectionInterval);
      if (debuggerInterval) {
        clearInterval(debuggerInterval);
      }
      clearTimeout(perfInterval);
    };
  }, [enablePointerBlock, enableDebuggerDetection, sensitiveMode]);

  return null;
};

export default DisableDevTools;