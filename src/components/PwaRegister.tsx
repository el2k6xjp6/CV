"use client";
import { useEffect } from "react";

export default function PwaRegister() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    if (process.env.NODE_ENV !== 'production') {
      // Dev assets are not content-hashed, so a service worker would serve stale code.
      navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(reg => reg.unregister()));
      return;
    }

    // Bypass the HTTP cache for sw.js so a new version is picked up straight away.
    navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' });
  }, []);
  return null;
}
