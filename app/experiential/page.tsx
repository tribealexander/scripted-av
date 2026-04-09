"use client";

import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { Magnetic } from "@/components/unlumen-ui/magnetic";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Experiential() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Capabilities />
        <Process />
        <Work />
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
        <p className="text-xs tracking-[3px] uppercase text-brass mb-6">Experiential Production</p>
        <TextReveal
          text="Immersive experiences that people actually remember."
          as="h1"
          splitBy="words"
          staggerDelay={0.07}
          duration={0.6}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream leading-[0.95] tracking-tight"
        />
        <div className="mt-8 max-w-xl">
          <p className="text-base sm:text-lg text-warm-gray-light leading-relaxed font-light">
            Brand activations, product launches, immersive pop-ups, festivals. Full AV production designed around your creative brief — not a default package.
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
          text="Your agency has the concept. We bring the technical layer that makes it tangible — sound that shapes mood, light that directs attention, video that transforms surfaces. Every element choreographed to your creative vision."
          as="p"
          staggerDelay={0.02}
          duration={0.4}
          className="font-serif text-2xl sm:text-3xl text-charcoal leading-[1.4] tracking-tight"
        />
      </div>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    {
      category: "Sound",
      items: [
        "Distributed audio systems — zone-controlled, tuned to the space",
        "Live sound engineering and mixing",
        "Spatial audio and directional speaker design",
        "DJ and music programming",
        "Background and ambient sound design",
      ],
    },
    {
      category: "Light",
      items: [
        "Architectural uplighting and wash lighting",
        "Programmable LED and intelligent fixtures",
        "Pin spots, gobos, and texture projection",
        "DMX show control and cue programming",
        "Haze and atmospheric effects (tasteful, not fog machines)",
      ],
    },
    {
      category: "Video",
      items: [
        "Projection mapping on surfaces, structures, and facades",
        "LED walls and modular display systems",
        "Content creation and playback",
        "IMAG (live camera feeds for large audiences)",
        "Interactive and sensor-triggered visuals",
      ],
    },
    {
      category: "Production",
      items: [
        "Full technical production management",
        "Rigging, power distribution, and staging",
        "Show control and cue-to-cue programming",
        "On-site technical direction",
        "Vendor coordination and load-in management",
      ],
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 pb-28 sm:pb-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Capabilities</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20">
          {capabilities.map((cap) => (
            <div key={cap.category}>
              <h3 className="font-serif text-3xl text-charcoal tracking-tight mb-6">{cap.category}</h3>
              <ul className="space-y-3">
                {cap.items.map((item) => (
                  <li key={item} className="text-base text-warm-gray leading-relaxed font-light flex items-start gap-3">
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
    <section className="bg-charcoal px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-cream/30 mb-16 sm:mb-24">How it works</p>

        <div className="space-y-16 sm:space-y-20">
          {[
            {
              num: "01",
              title: "Creative Brief",
              text: "We start with your vision — the concept, the audience, the space. We ask the questions that make the technical plan serve the creative, not the other way around.",
            },
            {
              num: "02",
              title: "Technical Design",
              text: "We produce a full AV plan — speaker plots, lighting renders, video mapping previews, power requirements. You see what the room will feel like before load-in day.",
            },
            {
              num: "03",
              title: "Load-in & Test",
              text: "Our crew arrives early. Everything is installed, tested, and rehearsed. We build in time for adjustments — because things always look different in the actual room.",
            },
            {
              num: "04",
              title: "Live Execution",
              text: "A technical director and crew on-site throughout the event. We run the show live — adapting levels, cues, and energy in real time. You focus on your client.",
            },
          ].map((step) => (
            <div key={step.num} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-12">
              <span className="text-xs text-brass tracking-[3px] md:pt-3">{step.num}</span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-cream tracking-tight mb-3">{step.title}</h3>
                <p className="text-base text-cream/40 leading-relaxed font-light max-w-2xl">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      title: "The Burroughes",
      type: "Brand Activation",
      description: "Multi-room immersive experience with spatial audio zones, projection-mapped brick walls, and programmable lighting that shifted with a 4-hour narrative arc.",
    },
    {
      title: "Distillery District",
      type: "Festival Installation",
      description: "Outdoor AV installation across three courtyard zones. Weather-rated speakers, architectural lighting on heritage buildings, and live video content.",
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Selected work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((project, i) => (
            <Tilt
              key={project.title}
              rotationFactor={4}
              springOptions={{ stiffness: 200, damping: 25 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/70 flex items-end p-6">
                  <span className="font-serif text-5xl text-cream/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <p className="text-xs tracking-[2px] uppercase text-brass mb-2">{project.type}</p>
              <h3 className="font-serif text-2xl text-charcoal mb-2">{project.title}</h3>
              <p className="text-sm text-warm-gray leading-relaxed font-light">{project.description}</p>
            </Tilt>
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
          Have a brief? Let&apos;s talk.
        </h2>
        <p className="mt-6 text-base text-cream/40 font-light max-w-xl leading-relaxed">
          Send us the concept, the space, and the date. We&apos;ll come back with ideas and a scope — no commitment, no generic quote.
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
