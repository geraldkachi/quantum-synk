import { useState } from 'react';
import Reveal from './Reveal';
import { SectionLabel } from './UI';

const WHY = [
  {
    title: 'Speed Without Compromise',
    desc: 'We move fast because our process is tight. Agile sprints, continuous delivery, and zero rework mentality means your product ships on time.',
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="1.8" />,
  },
  {
    title: 'Enterprise-Grade Reliability',
    desc: 'Security, scalability, and stability baked in from day one. We build like your system will serve a million users — because one day it will.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.8" />,
  },
  {
    title: 'Long-Term Thinking',
    desc: 'We architect for the next three years so your investment grows in value rather than accumulating technical debt.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" strokeWidth="1.8" />
      </>
    ),
  },
  {
    title: 'Embedded Partnership',
    desc: "We integrate with your team, understand your business deeply, and make decisions like a co-founder — not a contractor clocking out.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.8" />
        <circle cx="9" cy="7" r="4" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.8" />
      </>
    ),
  },
  {
    title: 'Data as a Core Discipline',
    desc: 'Every system we build is designed to generate, capture, and leverage data. We make your data an asset, not a liability.',
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="1.8" />,
  },
  {
    title: 'Full-Stack Ownership',
    desc: 'From database schema to UI polish — one partner, full accountability. No finger-pointing across multiple agencies.',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.8" />
        <path d="M3 9h18M9 21V9" strokeWidth="1.8" />
      </>
    ),
  },
];

function WhyCard({ item, delay }: { item: typeof WHY[0], delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className="relative p-10 bg-[#111] border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          borderColor: hovered ? 'rgba(137,196,65,0.25)' : '#1a1a1a',
          transform: hovered ? 'translateY(-4px)' : '',
          boxShadow: hovered ? '0 24px 48px rgba(0,0,0,0.4)' : '',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, #89C441, transparent)' }}
        />

        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
          style={{ background: 'rgba(137,196,65,0.08)' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#89C441"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {item.icon}
          </svg>
        </div>

        <h3 className="font-outfit text-base font-bold mb-3 tracking-tight text-white">
          {item.title}
        </h3>
        <p className="font-outfit text-sm text-white/40 leading-relaxed">{item.desc}</p>
      </div>
    </Reveal>
  );
}

export default function WhyQS() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <Reveal>
        <SectionLabel>Why QuantumSynk</SectionLabel>
        <h2 className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          The Partner Your Business <span className="text-[#89C441]">Deserves</span>
        </h2>
        <p className="font-outfit text-white/40 text-lg leading-relaxed max-w-lg">
          We're not a vendor. We're the engineering team your business never had — embedded, accountable, and invested in your success.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
        {WHY.map((item, i) => (
          <WhyCard key={item.title} item={item} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
