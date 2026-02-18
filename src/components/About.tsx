import { useState } from 'react';
import Reveal from './Reveal';
import { SectionLabel } from './UI';

const METRICS = [
  { num: '50+',  label: 'Products successfully shipped to market', dark: false },
  { num: '98%',  label: 'Client satisfaction and retention rate',  dark: true },
  { num: '4x',   label: 'Average operational efficiency gain',      dark: true },
  { num: '12+',  label: 'Industries with active deployments',       dark: false },
];

function MetricCard({ metric, delay }: { metric: typeof METRICS[0], delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className="relative p-7 border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: metric.dark ? '#000' : '#111',
          borderColor: hovered ? 'rgba(137,196,65,0.3)' : 'rgba(255,255,255,0.1)',
          transform: hovered ? 'translateY(-3px)' : '',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#89C441]" />
        <div className="font-outfit text-4xl font-black tracking-tight mb-2 text-[#89C441]" style={{ lineHeight: 1 }}>
          {metric.num}
        </div>
        <div className="font-outfit text-xs text-white/40 leading-snug">{metric.label}</div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="company" className="py-32 px-6 md:px-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">

        {/* Left — content */}
        <div>
          <Reveal>
            <SectionLabel>Our Company</SectionLabel>
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Built by Builders,<br />
              <span className="text-[#89C441]">for Businesses</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-outfit text-2xl font-bold leading-snug tracking-tight mt-8 mb-8 text-white">
              "We started QuantumSynk because we kept seeing the same problem — great businesses
              held back by poor technology. Our mission is to change that, one{' '}
              <span className="text-[#89C441]">intelligent system</span> at a time."
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-outfit text-white/40 text-base leading-relaxed mb-8">
              QuantumSynk was founded on the belief that every ambitious business deserves access
              to world-class engineering. We partner with enterprises, scale-ups, and growth-stage
              companies to deliver technology that is not just functional — but transformative.
            </p>
          </Reveal>

          {/* CEO Card */}
          <Reveal delay={0.3}>
            <div className="flex items-center gap-4 p-5 bg-[#111] border border-border rounded-xl">
              {/* <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-outfit text-xl font-black text-black"
                style={{ background: 'linear-gradient(135deg, #89C441, #6fa332)' }}
              >
                LV
              </div> */}
                <img 
                    src="/dele.jpg" 
                    alt="Lawson Oladele Valentino" 
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                  />
              <div className="flex-1">
                <div className="font-outfit text-sm font-bold text-white">
                  Lawson Oladele Valentino
                </div>
                <div className="font-mono-qs text-xs text-white/30 mt-0.5">
                  Founder & Chief Executive Officer
                </div>
              </div>
              <div
                className="px-3 py-1.5 rounded-full font-mono-qs text-xs font-semibold border"
                style={{
                  background: 'rgba(137,196,65,0.08)',
                  borderColor: 'rgba(137,196,65,0.2)',
                  color: '#89C441',
                }}
              >
                CEO
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          {METRICS.map((m, i) => (
            <MetricCard key={m.num + m.label} metric={m} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
