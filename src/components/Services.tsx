import { useState } from 'react';
import Reveal from './Reveal';
import { SectionLabel } from './UI';

const SERVICES = [
  {
    num: '01',
    title: 'Custom Software Engineering',
    desc: 'End-to-end product design and development. From MVP to enterprise-grade systems — we build software that scales with your ambition.',
    icon: (
      <>
        <path d="M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z" strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" strokeWidth="1.8" />
      </>
    ),
  },
  {
    num: '02',
    title: 'Data Engineering & Pipelines',
    desc: 'Modern data infrastructure built for reliability. ETL pipelines, lakehouses, real-time streaming, and warehouse optimisation at any scale.',
    icon: <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeWidth="1.8" />,
  },
  {
    num: '03',
    title: 'Business Intelligence & Analytics',
    desc: 'Transform raw data into decisive insight. Interactive dashboards, predictive models, and reporting systems that drive informed action.',
    icon: <path d="M18 20V10M12 20V4M6 20v-6" strokeWidth="1.8" />,
  },
  {
    num: '04',
    title: 'AI & Machine Learning Integration',
    desc: 'Embed intelligence directly into your product. Recommendation engines, NLP, computer vision, and LLM-powered automation.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeWidth="1.8" />
      </>
    ),
  },
  {
    num: '05',
    title: 'API Design & Systems Integration',
    desc: 'Seamlessly connect your tools and third-party systems through robust, secure, and well-documented API architectures.',
    icon: (
      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeWidth="1.8" />
    ),
  },
  {
    num: '06',
    title: 'Cloud Architecture & DevOps',
    desc: 'Resilient cloud infrastructure for uptime and growth. CI/CD pipelines, containerisation, auto-scaling, and cost optimisation.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.8" />,
  },
];

function ServiceCard({ svc, delay }: { svc: typeof SERVICES[0], delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className="relative h-full p-10 overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: '#111',
          borderRight: '1px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
          transform: hovered ? 'translateY(-4px)' : '',
          zIndex: hovered ? 2 : 1,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover tint */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(137,196,65,0.06), transparent)',
            opacity: hovered ? 1 : 0,
          }}
        />

        <span className="font-mono-qs text-xs tracking-[0.1em] text-[#89C441] block mb-7">
          {svc.num}
        </span>

        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-all duration-300"
          style={{
            background: 'rgba(137,196,65,0.07)',
            borderColor: hovered ? 'rgba(137,196,65,0.4)' : 'rgba(137,196,65,0.15)',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#89C441"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {svc.icon}
          </svg>
        </div>

        <h3 className="font-outfit text-lg font-bold mb-3 tracking-tight text-white">
          {svc.title}
        </h3>
        <p className="font-outfit text-sm text-white/40 leading-relaxed">{svc.desc}</p>

        {/* Arrow */}
        <div
          className="absolute bottom-8 right-8 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: hovered ? '#89C441' : 'transparent',
            background: hovered ? '#89C441' : 'transparent',
            opacity: hovered ? 1 : 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12">
      <Reveal>
        <SectionLabel>What We Build</SectionLabel>
        <h2 className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Solutions Built for <span className="text-[#89C441]">Scale</span>
        </h2>
        <p className="font-outfit text-white/40 text-lg leading-relaxed max-w-lg">
          We architect and deliver technology that becomes the backbone of your business — not just a tool.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-border rounded-2xl overflow-hidden">
        {SERVICES.map((svc, i) => (
          <ServiceCard key={svc.num} svc={svc} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
