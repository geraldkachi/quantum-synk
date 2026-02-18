import { useState } from 'react';
import Reveal from './Reveal';
import { SectionLabel } from './UI';

const INDUSTRIES = [
  { icon: '🏦', name: 'Fintech & Banking', desc: 'Payment infrastructure, fraud detection, regulatory compliance, and real-time financial analytics.' },
  { icon: '🏥', name: 'Healthcare & MedTech', desc: 'Patient data platforms, diagnostic tooling, and HIPAA-compliant data pipelines.' },
  { icon: '⚡', name: 'Energy & Utilities', desc: 'Grid monitoring, IoT integration, predictive maintenance, and operational efficiency.' },
  { icon: '🛒', name: 'Retail & E-Commerce', desc: 'Personalisation engines, inventory intelligence, and omnichannel analytics platforms.' },
  { icon: '🏭', name: 'Manufacturing & Logistics', desc: 'Supply chain visibility, demand forecasting, and factory floor automation.' },
  { icon: '📡', name: 'Telecoms & Media', desc: 'Network analytics, subscriber intelligence, and real-time content delivery optimisation.' },
  { icon: '🎓', name: 'EdTech & Learning', desc: 'Adaptive learning platforms, engagement analytics, and scalable LMS infrastructure.' },
  { icon: '🏛️', name: 'Government & Public Sector', desc: 'Digital citizen services, interoperable data systems, and secure public infrastructure.' },
];

function IndustryCard({ ind, delay }: { ind: typeof INDUSTRIES[0]; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className="relative p-8 bg-[#111] border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          borderColor: hovered ? 'rgba(137,196,65,0.3)' : '#1a1a1a',
          transform: hovered ? 'translateY(-4px)' : '',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#89C441] transition-transform duration-300 origin-left"
          style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        <span className="text-3xl mb-4 block">{ind.icon}</span>
        <h3 className="font-outfit text-base font-bold mb-2 tracking-tight text-white">{ind.name}</h3>
        <p className="font-outfit text-xs text-white/40 leading-relaxed">{ind.desc}</p>
      </div>
    </Reveal>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="py-32 px-6 md:px-12">
      <Reveal>
        <SectionLabel>Industries</SectionLabel>
        <h2 className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Built Across <span className="text-[#89C441]">Every Sector</span>
        </h2>
        <p className="font-outfit text-white/40 text-lg leading-relaxed max-w-lg">
          Deep domain expertise means our solutions don't just work — they fit the way your industry actually operates.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-16">
        {INDUSTRIES.map((ind, i) => (
          <IndustryCard key={ind.name} ind={ind} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
