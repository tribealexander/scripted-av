"use client";

import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { Magnetic } from "@/components/unlumen-ui/magnetic";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Corporate() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <EventTypes />
        <Capabilities />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] bg-charcoal px-6 sm:px-10 flex items-end pb-24 sm:pb-32">
      <div className="max-w-5xl w-full">
        <p className="text-xs tracking-[3px] uppercase text-brass mb-6">Corporate Events</p>
        <TextReveal
          text="Production that respects the content."
          as="h1"
          splitBy="words"
          staggerDelay={0.07}
          duration={0.6}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream leading-[0.95] tracking-tight"
        />
        <div className="mt-8 max-w-xl">
          <p className="text-base sm:text-lg text-warm-gray-light leading-relaxed font-light">
            Conferences, galas, award nights, keynotes, and corporate gatherings. Clean, reliable AV production that makes the room feel considered — not like a hotel ballroom with rented speakers.
          </p>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto">
        <TextReveal
          text="Corporate events have a hundred moving parts. AV shouldn't be one of them. We handle the technical production end-to-end so your team can focus on the event itself — not whether the microphone works."
          as="p"
          staggerDelay={0.02}
          duration={0.4}
          className="font-serif text-2xl sm:text-3xl text-charcoal leading-[1.4] tracking-tight"
        />
      </div>
    </section>
  );
}

function EventTypes() {
  const types = [
    {
      title: "Conferences & Summits",
      description: "Multi-track agendas, breakout rooms, main stage. Clear audio for every seat, confidence monitors for speakers, seamless session transitions.",
    },
    {
      title: "Galas & Award Nights",
      description: "The room should feel as polished as the occasion. Warm lighting, crisp sound, video playback and IMAG timed to the program flow.",
    },
    {
      title: "Product Launches",
      description: "High-impact reveals deserve production to match. Surround sound, dramatic lighting cues, and video that makes the product the hero.",
    },
    {
      title: "Town Halls & All-Hands",
      description: "Hybrid-ready with professional audio, camera feeds for remote attendees, and presentation systems that don't require an IT person on standby.",
    },
    {
      title: "Fundraisers & Charity Events",
      description: "Paddle-raise audio that reaches every table, stage lighting for speakers and performers, and video that tells the story.",
    },
    {
      title: "Holiday Parties & Social Events",
      description: "DJ, dancing, and atmosphere done with restraint. Great sound without the cheese. Your brand, not a nightclub.",
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 pb-28 sm:pb-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Event types</p>

        <div className="space-y-0">
          {types.map((type) => (
            <div
              key={type.title}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-10 sm:py-12 border-t border-charcoal/10 last:border-b"
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal tracking-tight">
                {type.title}
              </h3>
              <p className="text-base text-warm-gray leading-relaxed font-light max-w-xl">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    {
      category: "Audio",
      items: [
        "PA systems sized to the room",
        "Wireless microphone systems (handheld, lavalier, headset)",
        "Confidence monitors and stage foldback",
        "Press feeds and mult boxes",
        "Audio recording and live streaming feeds",
        "Breakout room and multi-zone audio",
      ],
    },
    {
      category: "Video & Presentation",
      items: [
        "Projectors and screens (front and rear projection)",
        "LED walls for main stage and breakouts",
        "IMAG — live camera feeds on screens",
        "Presentation management and slide advancing",
        "Video playback, rolls, and sizzle reels",
        "Hybrid event camera and streaming setup",
      ],
    },
    {
      category: "Lighting",
      items: [
        "Stage lighting for speakers and presenters",
        "Room wash and uplighting to set the tone",
        "Gobo projection (logos, patterns, branding)",
        "Pin spots for centerpieces and decor",
        "Follow spots for keynotes and award presentations",
        "Scene presets — dinner, presentation, dancing",
      ],
    },
    {
      category: "Production Management",
      items: [
        "Full show calling and cue-to-cue",
        "On-site technical director",
        "Stage management and speaker wrangling",
        "Rehearsal coordination",
        "Vendor liaison (venue, catering, decor)",
        "Load-in/load-out scheduling",
      ],
    },
  ];

  return (
    <section className="bg-charcoal px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-cream/30 mb-16 sm:mb-24">Capabilities</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20">
          {capabilities.map((cap) => (
            <div key={cap.category}>
              <h3 className="font-serif text-3xl text-cream tracking-tight mb-6">{cap.category}</h3>
              <ul className="space-y-3">
                {cap.items.map((item) => (
                  <li key={item} className="text-base text-cream/40 leading-relaxed font-light flex items-start gap-3">
                    <span className="h-px w-4 bg-brass shrink-0 mt-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">How we work</p>

        <div className="space-y-16 sm:space-y-20">
          {[
            {
              num: "01",
              title: "Scope",
              text: "Share your event details — agenda, venue, audience size, any specific needs. We'll ask the right questions and come back with a clear proposal.",
            },
            {
              num: "02",
              title: "Plan",
              text: "Detailed technical plot, equipment list, and run-of-show. We coordinate with your venue and other vendors to make sure nothing falls through the cracks.",
            },
            {
              num: "03",
              title: "Load-in",
              text: "Our crew arrives with time to spare. Everything installed, tested, and rehearsed. We do a full tech check with your speakers and presenters.",
            },
            {
              num: "04",
              title: "Show Day",
              text: "Technical director on headset, crew at every position. We run the AV so your event team can focus on the event. Smooth transitions, clear audio, zero stress.",
            },
          ].map((step) => (
            <div key={step.num} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-12">
              <span className="text-xs text-brass tracking-[3px] md:pt-3">{step.num}</span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal tracking-tight mb-3">{step.title}</h3>
                <p className="text-base text-warm-gray leading-relaxed font-light max-w-2xl">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-charcoal px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight leading-[1.1]">
          One less thing to worry about.
        </h2>
        <p className="mt-6 text-base text-cream/40 font-light max-w-xl leading-relaxed">
          Send us the date, the venue, and the agenda. We&apos;ll handle the rest.
        </p>
        <div className="mt-10">
          <Magnetic strength={0.3}>
            <a
              href="mailto:hello@scriptedav.com"
              className="group inline-flex items-center gap-4 font-serif text-xl sm:text-2xl text-cream transition-colors duration-300 hover:text-brass"
            >
              hello@scriptedav.com
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={1.5} />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
