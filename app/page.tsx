"use client";

import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { Magnetic } from "@/components/unlumen-ui/magnetic";
import { ProgressiveBlur } from "@/components/unlumen-ui/progressive-blur";
import { CountUp } from "@/components/unlumen-ui/count-up";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ethos />
        <WhatWeDo />
        <Numbers />
        <Work />
        <Approach />
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
          text="We design how rooms feel."
          as="h1"
          splitBy="words"
          staggerDelay={0.08}
          duration={0.7}
          className="font-serif text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] text-cream leading-[0.95] tracking-tight"
        />
        <div className="mt-8 sm:mt-12 max-w-lg">
          <TextReveal
            text="AV production and experiential design for brands, agencies, and venues that refuse to settle for ordinary."
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
              Start a project
            </a>
          </Magnetic>
        </div>
      </div>

      <ProgressiveBlur
        side="bottom"
        strength={3}
        size="80px"
        tint={false}
        style={{ background: `linear-gradient(to top, #f5f0e8 0%, transparent 100%)` }}
      />
    </section>
  );
}

/* ─── Ethos ─── */
function Ethos() {
  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-4xl mx-auto">
        <TextReveal
          text="Most production companies add layers on top of a room — fog, lasers, LEDs on every surface. We start with the room itself. Its geometry. Its materials. Its natural light. Then we use sound, light, and video to amplify what's already there."
          as="p"
          staggerDelay={0.02}
          duration={0.4}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal leading-[1.4] tracking-tight"
        />
        <p className="mt-12 text-sm text-warm-gray uppercase tracking-[3px]">
          Warm &mdash; Clean &mdash; Modern
        </p>
      </div>
    </section>
  );
}

/* ─── What We Do ─── */
function WhatWeDo() {
  const offerings = [
    {
      title: "Experiential Production",
      description: "Brand activations, immersive events, product launches. Full-service AV production designed around your creative brief.",
      href: "/experiential",
    },
    {
      title: "AV Installations",
      description: "Permanent audio, video, lighting, and control systems for venues. Designed to disappear into the architecture.",
      href: "/installations",
    },
    {
      title: "Corporate Events",
      description: "Conferences, galas, award nights, keynotes. Clean production that makes the content — and the room — land.",
      href: "/corporate",
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 pb-28 sm:pb-40">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">What we do</p>

        <div className="space-y-0">
          {offerings.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-10 sm:py-14 border-t border-charcoal/10 last:border-b transition-colors duration-300 hover:border-charcoal/20"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight group-hover:text-brass transition-colors duration-300">
                {item.title}
              </h3>
              <div className="flex items-start justify-between gap-8">
                <p className="text-base sm:text-lg text-warm-gray leading-relaxed font-light max-w-xl">
                  {item.description}
                </p>
                <ArrowRight className="h-5 w-5 text-warm-gray-light shrink-0 mt-1.5 transition-all duration-300 group-hover:text-brass group-hover:translate-x-1" strokeWidth={1.5} />
              </div>
            </a>
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

/* ─── Work ─── */
function Work() {
  const projects = [
    {
      title: "The Burroughes",
      type: "Brand Activation",
      year: "2025",
    },
    {
      title: "Evergreen Brick Works",
      type: "Conference",
      year: "2025",
    },
    {
      title: "Arcadian Court",
      type: "Permanent Installation",
      year: "2024",
    },
  ];

  return (
    <section id="work" className="bg-cream px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Selected work</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <Tilt
              key={project.title}
              rotationFactor={5}
              springOptions={{ stiffness: 200, damping: 25 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-charcoal/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal/70 flex items-end p-6">
                  <span className="font-serif text-6xl text-cream/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal">{project.title}</h3>
                  <p className="text-sm text-warm-gray mt-1">{project.type}</p>
                </div>
                <span className="text-xs text-warm-gray-light">{project.year}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Approach ─── */
function Approach() {
  return (
    <section id="approach" className="bg-charcoal px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-cream/30 mb-16 sm:mb-24">How we work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
          {[
            {
              num: "01",
              title: "Brief",
              text: "We learn your objectives, your audience, and the space. The creative brief drives everything — not a default setup sheet.",
            },
            {
              num: "02",
              title: "Design",
              text: "A technical plan built around the room's architecture. Sound zones, light positions, displays, and show control mapped to your event flow.",
            },
            {
              num: "03",
              title: "Build",
              text: "Our team loads in early and tests everything. When doors open, the technology is invisible. The atmosphere is not.",
            },
            {
              num: "04",
              title: "Execute",
              text: "Live production engineering throughout the event. We adapt in real time — reading the room, not running a script.",
            },
          ].map((step) => (
            <div key={step.num}>
              <span className="text-xs text-brass tracking-[3px]">{step.num}</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-cream mt-3 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-base text-cream/40 leading-relaxed font-light">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section id="contact" className="bg-cream px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-3xl mx-auto">
        <TextReveal
          text="Let's build something together."
          as="h2"
          splitBy="words"
          staggerDelay={0.06}
          duration={0.5}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight leading-[1.1]"
        />
        <p className="mt-6 text-lg text-warm-gray font-light max-w-xl leading-relaxed">
          Planning a brand activation, a conference, or looking for a permanent production partner for your venue? We&apos;d love to hear about the project.
        </p>
        <div className="mt-12">
          <Magnetic strength={0.3}>
            <a
              href="mailto:hello@scriptedav.com"
              className="group inline-flex items-center gap-4 font-serif text-2xl sm:text-3xl text-charcoal transition-colors duration-300 hover:text-brass"
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
