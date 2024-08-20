"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;

      // Show the install button if you have one
      // yourInstallButton.style.display = 'block';

      // Optional: automatically prompt user
      // deferredPrompt.prompt();
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA installed');
    });
  }, []);

  return null;
}
