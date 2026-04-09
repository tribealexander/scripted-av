"use client";

import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/unlumen-ui/text-reveal";
import { Tilt } from "@/components/unlumen-ui/tilt";
import { Magnetic } from "@/components/unlumen-ui/magnetic";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Installations() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Systems />
        <VenueTypes />
        <Process />
        <Maintenance />
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
        <p className="text-xs tracking-[3px] uppercase text-brass mb-6">AV Installations</p>
        <TextReveal
          text="Technology that disappears into architecture."
          as="h1"
          splitBy="words"
          staggerDelay={0.07}
          duration={0.6}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-cream leading-[0.95] tracking-tight"
        />
        <div className="mt-8 max-w-xl">
          <p className="text-base sm:text-lg text-warm-gray-light leading-relaxed font-light">
            Permanent audio, video, lighting, and control systems for venues and commercial spaces. Designed, installed, and maintained — so your space is always show-ready.
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
          text="A great venue shouldn't need a production company every time it hosts an event. We design and install systems that make your space self-sufficient — with the option to scale up when the occasion calls for it."
          as="p"
          staggerDelay={0.02}
          duration={0.4}
          className="font-serif text-2xl sm:text-3xl text-charcoal leading-[1.4] tracking-tight"
        />
      </div>
    </section>
  );
}

function Systems() {
  const systems = [
    {
      title: "Audio Systems",
      items: [
        "Distributed ceiling and wall-mount speakers",
        "Zoned audio with independent volume control",
        "Subwoofer integration for music venues",
        "Wireless microphone systems",
        "Background music and paging systems",
        "DSP processing and room tuning",
      ],
    },
    {
      title: "Video & Displays",
      items: [
        "Commercial-grade TV installations",
        "LED video walls (indoor and outdoor)",
        "Projection systems and screens",
        "Digital signage and menu boards",
        "Content management systems",
        "HDMI/SDI distribution and matrix switching",
      ],
    },
    {
      title: "Lighting",
      items: [
        "Architectural and accent lighting",
        "Programmable LED fixtures and color wash",
        "DMX control systems",
        "Scene presets (dinner, cocktails, party, presentation)",
        "Exterior and facade lighting",
        "Emergency and house lighting integration",
      ],
    },
    {
      title: "Control & Infrastructure",
      items: [
        "Centralized control panels (touch screen or wall-mount)",
        "Network infrastructure and rack builds",
        "One-touch scene selection for staff",
        "Remote monitoring and management",
        "Power distribution and circuit planning",
        "Cable management and concealment",
      ],
    },
  ];

  return (
    <section className="bg-cream px-6 sm:px-10 pb-28 sm:pb-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Systems we design & install</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20">
          {systems.map((system) => (
            <div key={system.title}>
              <h3 className="font-serif text-3xl text-charcoal tracking-tight mb-6">{system.title}</h3>
              <ul className="space-y-3">
                {system.items.map((item) => (
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

function VenueTypes() {
  const venues = [
    {
      title: "Event Venues",
      description: "Banquet halls, lofts, galleries, rooftops. Systems designed for flexibility — wedding one night, corporate gala the next.",
    },
    {
      title: "Restaurants & Bars",
      description: "Background audio that sets the mood without drowning conversation. TVs placed for sightlines, not as an afterthought.",
    },
    {
      title: "Hotels & Hospitality",
      description: "Lobby, conference rooms, ballrooms, outdoor spaces. Consistent brand experience across every touchpoint.",
    },
    {
      title: "Retail & Showrooms",
      description: "Audio and digital signage that reinforces the brand. Zoned by area — entrance, product floor, checkout.",
    },
    {
      title: "Corporate Offices",
      description: "Boardrooms, town halls, huddle rooms. Video conferencing, presentation systems, and room scheduling done right.",
    },
    {
      title: "Houses of Worship",
      description: "Spoken word clarity, music reinforcement, live streaming. Acoustics-first design for spaces that challenge most systems.",
    },
  ];

  return (
    <section className="bg-charcoal px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-cream/30 mb-16 sm:mb-24">Spaces we work in</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Tilt
              key={venue.title}
              rotationFactor={4}
              springOptions={{ stiffness: 200, damping: 25 }}
              className="border border-cream/8 rounded-sm p-8"
            >
              <h3 className="font-serif text-xl text-cream mb-3">{venue.title}</h3>
              <p className="text-sm text-cream/40 leading-relaxed font-light">{venue.description}</p>
            </Tilt>
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
        <p className="text-xs tracking-[3px] uppercase text-warm-gray mb-16 sm:mb-24">Installation process</p>

        <div className="space-y-16 sm:space-y-20">
          {[
            {
              num: "01",
              title: "Site Survey",
              text: "We walk the space, review floor plans, assess acoustics, and understand how you actually use it. Every install starts with the room.",
            },
            {
              num: "02",
              title: "System Design",
              text: "A detailed proposal with equipment specs, placement drawings, wiring diagrams, and a clear scope. You know exactly what you're getting before we start.",
            },
            {
              num: "03",
              title: "Installation",
              text: "Our team handles everything — cable runs, mounting, rack builds, programming. We work around your schedule and leave the space clean.",
            },
            {
              num: "04",
              title: "Commission & Training",
              text: "Every system is tuned, tested, and documented. We train your staff on day-to-day operation — one-touch presets, not a manual nobody reads.",
            },
            {
              num: "05",
              title: "Ongoing Support",
              text: "Maintenance contracts, remote monitoring, and priority support. When something needs attention, we're already on it.",
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

function Maintenance() {
  return (
    <section className="bg-charcoal px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-cream/30 mb-12">Maintenance & support</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-cream tracking-tight leading-[1.3] mb-8">
          Your venue runs events every week. Your AV should just work.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {[
            { title: "Preventive Maintenance", text: "Scheduled visits to inspect, clean, and update systems before issues surface." },
            { title: "Remote Monitoring", text: "We see problems before you do. Automated alerts for system health, connectivity, and performance." },
            { title: "Priority Response", text: "Event tomorrow and something's off? Maintenance clients get same-day support." },
            { title: "System Updates", text: "Firmware, software, and configuration updates handled on a regular cycle. No tech debt." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-medium text-cream mb-2">{item.title}</h3>
              <p className="text-sm text-cream/40 leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-cream px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-[1.1]">
          Ready to upgrade your space?
        </h2>
        <p className="mt-6 text-base text-warm-gray font-light max-w-xl leading-relaxed">
          Tell us about your venue and what you need. We&apos;ll schedule a site visit and come back with a design and a number — no surprises.
        </p>
        <div className="mt-10">
          <Magnetic strength={0.3}>
            <a
              href="mailto:hello@scriptedav.com"
              className="group inline-flex items-center gap-4 font-serif text-xl sm:text-2xl text-charcoal transition-colors duration-300 hover:text-brass"
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
