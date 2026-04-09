"use client";

import { ScrambleText } from "@/components/unlumen-ui/scramble-text";
import { Magnetic } from "@/components/unlumen-ui/magnetic";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 bg-charcoal/80 backdrop-blur-xl">
      <a href="/" className="text-sm font-medium tracking-[4px] uppercase text-cream">
        <span className="hidden sm:inline">
          <ScrambleText
            text="Scripted / AV"
            scrambleSpeed={40}
            scrambledLetterCount={3}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="text-cream"
            scrambledClassName="text-brass/50"
            delay={300}
          />
        </span>
        <span className="sm:hidden">Scripted / AV</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-xs tracking-[2px] uppercase text-cream/40">
        <a href="/experiential" className="transition-colors duration-300 hover:text-cream">Experiential</a>
        <a href="/installations" className="transition-colors duration-300 hover:text-cream">Installations</a>
        <a href="/corporate" className="transition-colors duration-300 hover:text-cream">Corporate</a>
        <a href="/#work" className="transition-colors duration-300 hover:text-cream">Work</a>
      </div>
      <Magnetic strength={0.25}>
        <a
          href="/#contact"
          className="text-xs tracking-[2px] uppercase text-cream/60 transition-colors duration-300 hover:text-cream"
        >
          Inquire
        </a>
      </Magnetic>
    </nav>
  );
}
