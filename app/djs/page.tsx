"use client";

import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { Magnetic } from "@/components/unlumen-ui/magnetic";
import { CountUp } from "@/components/unlumen-ui/count-up";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function DJs() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <LeadDJ />
        <WhatYouGet />
        <Numbers />
        <EventTypes />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal px-6 sm:px-10 flex items-end pb-40 sm:pb-48">
      <div className="max-w-5xl w-full">
        <TextReveal
          text="The right DJ changes the room."
          as="h1"
          splitBy="words"
          staggerDelay={0.08}
          duration={0.7}
          className="font-serif text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] text-cream leading-[0.95] tracking-tight"
        />
        <div className="mt-8 sm:mt-12 max-w-lg">
          <TextReveal
            text="Curated DJ talent for weddings, private events, and corporate gatherings. Every set designed around the moment — not a playlist."
            as="p"
            staggerDelay={0.02}
            duration={0.4}
            className="text-base sm:text-lg text-warm-gray-light leading-relaxed font-light"
          />
        </div>
        <div className="mt-10 flex items-center gap-6">
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm tracking-[2px] uppercase text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              <span className="h-px w-12 bg-brass transition-all duration-500 group-hover:w-20" />
              Book a DJ
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

/* ─── Intro ─── */
function Intro() {
  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-4xl mx-auto">
        <TextReveal
          text="A great DJ doesn't just play music — they read the room, build energy, and know exactly when to push and when to pull back. We don't hire DJs who hide behind a laptop. Our talent works the crowd, curates live, and treats every event like it matters."
          as="p"
          staggerDelay={0.02}
          duration={0.4}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal leading-[1.4] tracking-tight"
        />
        <p className="mt-12 text-sm text-warm-gray uppercase tracking-[3px]">
          Feel &mdash; Energy &mdash; Precision
        </p>
      </div>
    </section>
  );
}

/* ─── Lead DJ ─── */
function LeadDJ() {
  return (
    <section className="bg-charcoal px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-cream/30 mb-16 sm:mb-24">Lead talent</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-charcoal-light" />
            {/* Film grain overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: "128px 128px",
              }}
            />
            {/* Gradient overlay with name */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="font-serif text-4xl sm:text-5xl text-cream tracking-tight">Conor Cutz</h3>
                <p className="text-sm text-brass tracking-[2px] uppercase mt-2">Lead DJ &amp; Creative Director</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <TextReveal
              text="15 years behind the decks. 2,000+ events. From intimate 50-person dinners to 500-person galas — Conor reads the room before the first track drops."
              as="p"
              staggerDelay={0.02}
              duration={0.4}
              className="font-serif text-2xl sm:text-3xl text-cream leading-[1.4] tracking-tight"
            />

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-xs tracking-[3px] uppercase text-brass mb-3">Specialties</p>
                <p className="text-base text-cream/50 leading-relaxed font-light">
                  Weddings, corporate galas, private events, brand launches, cocktail hours, late-night sets
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[3px] uppercase text-brass mb-3">Sound</p>
                <p className="text-base text-cream/50 leading-relaxed font-light">
                  Open format — R&B, house, hip-hop, disco, soul, top 40. Every set is built for the audience in the room, not a generic formula.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[3px] uppercase text-brass mb-3">Approach</p>
                <p className="text-base text-cream/50 leading-relaxed font-light">
                  Pre-event consultation to understand the vibe, the timeline, and the non-negotiables. On the night, it&apos;s instinct — reading energy, building momentum, making every transition feel intentional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── What You Get ─── */
function WhatYouGet() {
  const items = [
    {
      num: "01",
      title: "Consultation",
      text: "A planning call to understand your event, your crowd, and the energy you're after. We build the set around your vision — not a template.",
    },
    {
      num: "02",
      title: "Curated Music",
      text: "A tailored playlist direction developed before the event. Genre flow, must-plays, do-not-plays — all locked in ahead of time.",
    },
    {
      num: "03",
      title: "Professional Setup",
      text: "Pioneer CDJs, quality monitors, clean cable management. We arrive early, soundcheck thoroughly, and leave no trace.",
    },
    {
      num: "04",
      title: "Live Reading",
      text: "On the night, the plan is a guide — not a script. We read the room in real time, adjusting energy, tempo, and selection to keep the floor alive.",
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">What you get</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
          {items.map((step) => (
            <div key={step.num}>
              <span className="text-xs text-brass tracking-[3px]">{step.num}</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal mt-3 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-base text-warm-gray leading-relaxed font-light">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Numbers ─── */
function Numbers() {
  return (
    <section className="bg-charcoal px-6 sm:px-10 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-12 md:gap-8">
        {[
          { value: 15, suffix: "+", label: "Years" },
          { value: 2000, suffix: "+", label: "Events" },
          { value: 500, suffix: "+", label: "Venues" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-4xl sm:text-5xl text-cream tracking-tight">
              <CountUp to={stat.value} duration={2.5} digitEffect="blur" />
              <span className="text-brass">{stat.suffix}</span>
            </div>
            <p className="mt-2 text-xs tracking-[2px] uppercase text-cream/30">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Event Types ─── */
function EventTypes() {
  const events = [
    {
      title: "Weddings",
      description: "Ceremony through last dance. We handle the energy arc of the entire night — cocktail hour warmth, dinner ambiance, dance floor heat.",
    },
    {
      title: "Corporate Events",
      description: "Galas, holiday parties, product launches, awards nights. Music that elevates without overpowering — appropriate energy for every moment.",
    },
    {
      title: "Private Events",
      description: "Birthdays, anniversaries, house parties, intimate gatherings. Tailored sets for the people in the room, not a generic crowd.",
    },
    {
      title: "Brand Activations",
      description: "Curated sound that aligns with your brand identity. We work with your creative team to make the music part of the experience design.",
    },
    {
      title: "Cocktail & Lounge",
      description: "Low-key, high-taste. Deep cuts, easy tempo, conversation-friendly. The kind of music that makes people ask who's DJing.",
    },
    {
      title: "Late Night Sets",
      description: "Doors close, energy opens. High-energy, floor-filling sets built for the crowd that stays. This is where years of experience show.",
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Events we play</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <Tilt
              key={event.title}
              rotationFactor={4}
              springOptions={{ stiffness: 200, damping: 25 }}
            >
              <div className="bg-charcoal rounded-sm p-8 sm:p-10 h-full relative overflow-hidden">
                {/* Film grain texture */}
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                  }}
                />
                <h3 className="font-serif text-2xl sm:text-3xl text-cream tracking-tight mb-4 relative">{event.title}</h3>
                <p className="text-sm text-cream/40 leading-relaxed font-light relative">{event.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section id="contact" className="bg-charcoal px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-3xl mx-auto">
        <TextReveal
          text="Your event deserves better than a playlist."
          as="h2"
          splitBy="words"
          staggerDelay={0.06}
          duration={0.5}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream tracking-tight leading-[1.1]"
        />
        <p className="mt-6 text-lg text-cream/40 font-light max-w-xl leading-relaxed">
          Tell us about your event — the date, the venue, the vibe you&apos;re after. We&apos;ll match you with the right DJ and handle the rest.
        </p>
        <div className="mt-12">
          <Magnetic strength={0.3}>
            <a
              href="mailto:hello@scriptedav.com"
              className="group inline-flex items-center gap-4 font-serif text-2xl sm:text-3xl text-cream transition-colors duration-300 hover:text-brass"
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
