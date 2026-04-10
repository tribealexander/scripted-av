"use client";

import { ScrambleText } from "@/components/unlumen-ui/scramble-text";
import { Magnetic } from "@/components/unlumen-ui/magnetic";

export function Nav({ mode = "av" }: { mode?: "av" | "djs" }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 bg-charcoal/80 backdrop-blur-xl">
      <a href="/" className="text-sm font-medium tracking-[4px] uppercase text-cream">
        <span className="hidden sm:inline">
          <ScrambleText
            text={mode === "av" ? "Scripted / AV" : "Scripted / Talent"}
            scrambleSpeed={40}
            scrambledLetterCount={3}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="text-cream"
            scrambledClassName="text-brass/50"
            delay={300}
          />
        </span>
        <span className="sm:hidden">{mode === "av" ? "Scripted / AV" : "Scripted / Talent"}</span>
      </a>

      {/* Nav links — contextual */}
      <div className="hidden md:flex items-center gap-8 text-xs tracking-[2px] uppercase text-cream/40">
        {mode === "av" ? (
          <>
            <a href="/experiential" className="transition-colors duration-300 hover:text-cream">Experiential</a>
            <a href="/installations" className="transition-colors duration-300 hover:text-cream">Installations</a>
            <a href="/corporate" className="transition-colors duration-300 hover:text-cream">Corporate</a>
            <a href="/#work" className="transition-colors duration-300 hover:text-cream">Work</a>
          </>
        ) : (
          <>
            <a href="/djs#roster" className="transition-colors duration-300 hover:text-cream">Roster</a>
            <a href="/djs#contact" className="transition-colors duration-300 hover:text-cream">Book</a>
          </>
        )}
      </div>

      <div className="flex items-center gap-5">
        <Magnetic strength={0.25}>
          <a
            href={mode === "av" ? "/#contact" : "/djs#contact"}
            className="text-xs tracking-[2px] uppercase text-cream/60 transition-colors duration-300 hover:text-cream"
          >
            Inquire
          </a>
        </Magnetic>

        {/* Pill toggle */}
        <div className="flex items-center bg-cream/8 rounded-full p-0.5">
          <a
            href="/"
            className={`px-3 py-1 rounded-full text-[10px] tracking-[2px] uppercase transition-all duration-300 ${
              mode === "av"
                ? "bg-cream text-charcoal"
                : "text-cream/40 hover:text-cream/70"
            }`}
          >
            AV
          </a>
          <a
            href="/djs"
            className={`px-3 py-1 rounded-full text-[10px] tracking-[2px] uppercase transition-all duration-300 ${
              mode === "djs"
                ? "bg-cream text-charcoal"
                : "text-cream/40 hover:text-cream/70"
            }`}
          >
            Talent
          </a>
        </div>
      </div>
    </nav>
  );
}
