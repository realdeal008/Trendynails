"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
