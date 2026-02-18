import { useState } from 'react';
import Reveal from './Reveal';
import { SectionLabel } from './UI';

const STEPS = [
  { n: '01', title: 'Discovery & Scoping', desc: 'Deep-dive into your business context, goals, and constraints. We define the problem before writing a single line of code.' },
  { n: '02', title: 'Architecture & Design', desc: 'Systems architecture, data modelling, and technical roadmap aligned to your growth trajectory. No guesswork, only precision.' },
  { n: '03', title: 'Agile Development', desc: 'Iterative delivery in structured sprints with CI, code reviews, and live demos. Full visibility at every stage.' },
  { n: '04', title: 'QA, Launch & Handoff', desc: "Rigorous testing, performance tuning, deployment, and knowledge transfer. We don't disappear after go-live." },
  { n: '05', title: 'Ongoing Support & Growth', desc: 'Long-term partnerships built on accountability. Monitoring, optimisation, and scaling support as your business evolves.' },
];

const CODE_LINES = [
  { n: 1,  content: <span className="text-[#546e7a]"># QuantumSynk Data Pipeline — v2.4.1</span> },
  { n: 2,  content: null },
  { n: 3,  content: <><span className="text-[#c792ea]">from</span><span className="text-white mx-1.5">qs_core</span><span className="text-[#c792ea]">import</span><span className="text-white ml-1.5">Pipeline, Transform</span></> },
  { n: 4,  content: <><span className="text-[#c792ea]">from</span><span className="text-white mx-1.5">qs_analytics</span><span className="text-[#c792ea]">import</span><span className="text-white ml-1.5">Aggregator</span></> },
  { n: 5,  content: null },
  { n: 6,  content: <><span className="text-[#c792ea]">class</span><span className="text-[#82aaff] ml-1.5">BusinessPipeline</span><span className="text-white/50">(Pipeline):</span></> },
  { n: 7,  content: <><span className="ml-8 text-[#82aaff]">def</span><span className="text-[#82aaff] ml-1.5">configure</span><span className="text-white/50">(self):</span></> },
  { n: 8,  content: <><span className="ml-16 text-[#c792ea]">self</span><span className="text-white/50">.</span><span className="text-[#82aaff]">source</span><span className="text-white/50 mx-1">= </span><span className="text-[#89C441]">"enterprise_db"</span></> },
  { n: 9,  content: <><span className="ml-16 text-[#c792ea]">self</span><span className="text-white/50">.</span><span className="text-[#82aaff]">transform</span><span className="text-white/50">(Transform.normalize)</span></> },
  { n: 10, content: <><span className="ml-16 text-[#c792ea]">self</span><span className="text-white/50">.</span><span className="text-[#82aaff]">aggregate</span><span className="text-white/50">(</span></> },
  { n: 11, content: <><span className="ml-24 text-[#ffcb6b]">metrics</span><span className="text-white/50">=</span><span className="text-white/50">[</span><span className="text-[#89C441]">"revenue"</span><span className="text-white/50">, </span><span className="text-[#89C441]">"churn"</span><span className="text-white/50">, </span><span className="text-[#89C441]">"ltv"</span><span className="text-white/50">]</span></> },
  { n: 12, content: <span className="ml-16 text-white/50">)</span> },
  { n: 13, content: null },
  { n: 14, content: <><span className="ml-8 text-[#82aaff]">def</span><span className="text-[#82aaff] ml-1.5">run</span><span className="text-white/50">(self):</span></> },
  { n: 15, content: <span className="ml-16 text-[#546e7a]"># Returns insight, not just data</span> },
  { n: 16, content: <><span className="ml-16 text-[#c792ea]">return</span><span className="text-[#82aaff] ml-1.5">self</span><span className="text-white/50">.</span><span className="text-[#82aaff]">emit</span><span className="text-white/50">(</span><span className="text-[#89C441]">"dashboard"</span><span className="text-white/50">)</span><span className="inline-block w-0.5 h-3.5 ml-0.5 align-middle bg-[#89C441]" style={{ animation: 'blink 1s ease-in-out infinite' }} /></> },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <Reveal>
        <SectionLabel>How We Work</SectionLabel>
        <h2 className="font-outfit text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          From Brief to <span className="text-[#89C441]">Production</span>
        </h2>
        <p className="font-outfit text-white/40 text-lg leading-relaxed max-w-lg">
          A disciplined, transparent process that delivers predictably — every time.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mt-16 items-center">
        {/* Steps */}
        <Reveal className="flex flex-col gap-0">
          {STEPS.map((step, i: number) => (
            <div
              key={step.n}
              className="relative flex gap-6 py-7 border-b border-border cursor-pointer transition-all duration-300"
              style={{ paddingLeft: activeStep === i ? '20px' : '0' }}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#89C441] transition-transform duration-300 origin-top"
                style={{ transform: activeStep === i ? 'scaleY(1)' : 'scaleY(0)' }}
              />
              <span className="font-mono-qs text-xs pt-1 min-w-8 text-[#89C441]">
                {step.n}
              </span>
              <div>
                <h3 className="font-outfit text-base font-bold mb-1.5 tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="font-outfit text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Code editor */}
        <Reveal delay={0.2}>
          <div className="bg-[#111] border border-border rounded-2xl overflow-hidden">
            {/* Editor header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono-qs text-xs text-white/30">
                quantumsynk_pipeline.py
              </span>
            </div>

            {/* Code */}
            <div className="p-6 space-y-1.5 overflow-x-auto">
              {CODE_LINES.map((line) => (
                <div
                  key={line.n}
                  className="flex items-center gap-3 font-mono-qs text-xs leading-relaxed"
                >
                  <span className="text-white/20 min-w-5 text-right select-none">
                    {line.n}
                  </span>
                  <span>{line.content}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
