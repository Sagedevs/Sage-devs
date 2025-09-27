// Add this component to your layout.tsx after your other imports

"use client";

import { useEffect } from 'react';

const DisableDevTools = () => {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable common developer shortcuts
    const disableShortcuts = (e: KeyboardEvent) => {
      // F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }

      // Ctrl+A (Select All)
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        return false;
      }

      // Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+K (Firefox Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        return false;
      }

      // F5 and Ctrl+R (Refresh) - Optional, might hurt UX
      // if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
      //   e.preventDefault();
      //   return false;
      // }
    };

    // Disable text selection
    const disableSelection = () => {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      (document.body.style as any).mozUserSelect = 'none';
      (document.body.style as any).msUserSelect = 'none';
    };

    // Disable drag and drop for images
    const disableDragDrop = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableShortcuts);
    document.addEventListener('dragstart', disableDragDrop);
    document.addEventListener('selectstart', (e) => e.preventDefault());

    // Apply selection styles
    disableSelection();

    // Additional console warning (optional)
    if (typeof console !== 'undefined') {
      console.clear();
      console.log('%c🚫 Developer tools are disabled on this site.', 'color: red; font-size: 20px; font-weight: bold;');
    }

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

      // Clear interval if using console clearing
      // clearInterval(consoleInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DisableDevTools;