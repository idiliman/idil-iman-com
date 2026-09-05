"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type SoundContextValue = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return context;
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  useEffect(() => {
    const audio = new Audio("/audio/tap.wav");
    audio.preload = "auto";

    const playTap = () => {
      if (!enabledRef.current) return;
      if (navigator.userActivation && !navigator.userActivation.hasBeenActive) {
        return;
      }

      audio.currentTime = 0;
      void audio.play().catch(() => {
        // Autoplay policies reject until a user gesture; ignore.
      });
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor) return;
      if (anchor.hasAttribute("data-no-sound")) return;

      const related = event.relatedTarget;
      if (related instanceof Node && anchor.contains(related)) return;

      playTap();
    };

    document.addEventListener("pointerover", onPointerOver, { passive: true });

    return () => {
      document.removeEventListener("pointerover", onPointerOver);
    };
  }, []);

  return (
    <SoundContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}
