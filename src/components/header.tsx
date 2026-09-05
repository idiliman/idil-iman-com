"use client";

import { SpeakerIcon } from "@/components/icons/speaker-icon";
import { useSound } from "@/components/sound-provider";

export function Header() {
  const { enabled, setEnabled } = useSound();

  return (
    <header className="flex items-center justify-between">
      <div className="ml-auto">
        <button
          type="button"
          aria-pressed={enabled}
          aria-label={enabled ? "Turn sound off" : "Turn sound on"}
          data-state={enabled ? "on" : "off"}
          onClick={() => setEnabled(!enabled)}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 transition-colors hover:text-foreground data-[state=off]:text-slate-400"
        >
          <SpeakerIcon muted={!enabled} className="size-3.5" />
          Sound {enabled ? "on" : "off"}
        </button>
      </div>
    </header>
  );
}
