import Reveal from './Reveal';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 md:px-12 text-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.4,
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(137,196,65,0.10) 0%, transparent 65%)',
        }}
      />

      {/* Eyebrow */}
      <Reveal>
        <div className="inline-flex items-center gap-2 font-mono-qs text-xs tracking-[0.14em] uppercase text-[#89C441] mb-6">
          <span
            className="w-2 h-2 rounded-full bg-[#89C441] inline-block"
            style={{ animation: 'pulseGreen 2s ease-in-out infinite' }}
          />
          Ready to build?
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={0.1}>
        <h2
          className="font-outfit font-black tracking-tight leading-[1.05] mb-5 text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Let's Build<br />
          <span className="text-[#89C441]">Something</span>
          <br />
          Extraordinary.
        </h2>
      </Reveal>

      {/* Sub */}
      <Reveal delay={0.2}>
        <p className="font-outfit text-white/40 text-lg max-w-lg mx-auto leading-relaxed mb-12">
          Tell us about your challenge. We'll tell you exactly how we'd solve it — no fluff, no
          sales pitch, just an honest conversation.
        </p>
      </Reveal>

      {/* Buttons */}
      <Reveal delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@quantumsynk.com"
            className="inline-flex items-center gap-2.5 px-9 py-5 font-outfit text-base font-bold rounded-xl no-underline bg-[#89C441] text-black transition-all duration-200 hover:bg-[#9fd44d] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(137,196,65,0.3)]"
          >
            Start a Conversation
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:hello@quantumsynk.com"
            className="inline-flex items-center gap-2 px-9 py-5 font-outfit text-base font-medium rounded-xl no-underline border border-white/15 text-white/70 transition-all duration-200 hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
          >
            Schedule a Demo
          </a>
        </div>
      </Reveal>
    </section>
  );
}
