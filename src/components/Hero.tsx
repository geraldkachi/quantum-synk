import { useTheme } from '../context/ThemeContext';
import { QSLogo } from './UI';

export default function Hero() {
  const { theme } = useTheme();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.04,
        }}
      />

      {/* Glows */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-225 h-150 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(137,196,65,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-24 -right-48 w-150 h-150 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(137,196,65,0.06) 0%, transparent 70%)' }}
      />

      {/* Eyebrow */}
      <div
        className="flex items-center gap-2.5 mb-7 font-mono-qs text-xs font-medium tracking-[0.12em] uppercase text-[#89C441]"
        style={{ opacity: 0, animation: 'slideRight 0.6s ease-out 0.2s forwards' }}
      >
        <span className="w-8 h-px bg-[#89C441]" />
        {/* B2B Technology Partner */}
        Technology Partner
      </div>

      {/* Headline */}
      <h1
        className="font-outfit font-black leading-[1.02] tracking-[-0.03em] mb-7 max-w-4xl"
        style={{
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          opacity: 0,
          animation: 'slideUp 0.7s ease-out 0.35s forwards',
        }}
      >
        Engineering
        <br />
        <span className="text-[#89C441]">Intelligence</span>
        <br />
        <span
          // style={{
          //   WebkitTextStroke: '2px rgba(255,255,255,0.18)',
          //   color: 'transparent',
          // }}
          style={{
            WebkitTextStroke: theme === 'dark'
              ? '2px rgba(255,255,255,0.18)'
              : '2px rgba(0,0,0,0.25)', // Darker stroke for light mode
            color: 'transparent',
            // background: theme === 'dark'
            //   ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
            //   : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.5), transparent)', // Darker shimmer for light mode
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            animation: 'shimmer 3s ease-in-out infinite',
          }}
        >
          for Business.
        </span>
      </h1>

      {/* Sub */}
      <p
        className="font-outfit text-lg text-white/50 max-w-lg leading-relaxed mb-12"
        style={{ opacity: 0, animation: 'slideUp 0.7s ease-out 0.5s forwards', color: theme == 'dark' ? '' : 'rgba(0, 0, 0, 0.4)' }}
      >
        QuantumSynk builds bespoke software, data engineering, and analytics
        solutions that power the next generation of forward-thinking enterprises.
      </p>

      {/* Actions */}
      <div
        className="flex flex-wrap items-center gap-4"
        style={{ opacity: 0, animation: 'slideUp 0.7s ease-out 0.65s forwards' }}
      >
        <button
          onClick={() => scrollTo('services')}
          className="inline-flex items-center gap-2.5 px-8 py-4 font-outfit text-base font-bold rounded-xl bg-[#89C441] text-black border-none cursor-pointer transition-all duration-200 hover:bg-[#9fd44d] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(137,196,65,0.3)]"
        >
          Explore Services
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        {/* <button
          onClick={() => scrollTo('company')}
          className="inline-flex items-center gap-2 px-8 py-4 font-outfit text-base font-medium rounded-xl border border-white/15 text-white/70 bg-transparent cursor-pointer transition-all duration-200 hover:border-white/40 hover:bg-white/6 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M10 9l5 3-5 3V9z" />
          </svg>
          Our Story
        </button> */}
        <button
          onClick={() => scrollTo('company')}
          className="inline-flex items-center gap-2 px-8 py-4 font-outfit text-base font-medium rounded-xl border border-border text-muted bg-transparent cursor-pointer transition-all duration-200 hover:border-[#89C441] hover:bg-[#89C441]/10 hover:text-[#89C441]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M10 9l5 3-5 3V9z" />
          </svg>
          Our Story
        </button>
      </div>

      {/* Trust badges */}
      <div
        className="flex flex-wrap items-center gap-6 mt-16"
        style={{ opacity: 0, animation: 'fadeIn 0.8s ease-out 0.9s forwards' }}
      >
        {['Enterprise-Grade Solutions', 'End-to-End Delivery', 'Data-First Engineering'].map(
          (badge, i) => (
            <div key={badge} className="flex items-center gap-6">
              {i > 0 && <div className="w-px h-7 bg-white/10" />}
              <div className="flex items-center gap-2 text-sm text-white/40 text-muted-dark font-outfit">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#89C441]"
                  style={{ animation: 'pulseGreen 2s ease-in-out infinite' }}
                />
                {badge}
              </div>
            </div>
          )
        )}
      </div>

      {/* Orbital visual */}
      <div
        className="absolute right-16 top-1/2 w-105 h-105 hidden xl:block"
        style={{
          marginTop: '-210px',
          opacity: 0,
          animation: 'fadeIn 1s ease-out 0.7s forwards',
        }}
      >
        {/* Rings */}
        <div
          className="absolute inset-0 rounded-full border border-[#89C441]/20"
          style={{ animation: 'rotateSlow 20s linear infinite' }}
        >
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#89C441]"
            style={{ boxShadow: '0 0 12px #89C441' }}
          />
        </div>
        <div
          className="absolute inset-8 rounded-full border border-[#89C441]/10"
          style={{ animation: 'rotateSlow 15s linear infinite reverse' }}
        />
        <div
          className="absolute inset-17.5 rounded-full border border-[#89C441]/15"
          style={{ animation: 'rotateSlow 25s linear infinite' }}
        >
          <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>

        {/* Center card */}
        <div
          className="absolute top-1/2 left-1/2 w-28 h-28 bg-[#111] border border-[#89C441]/30 rounded-2xl flex items-center justify-center"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          <QSLogo size={56} />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes slideUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideRight{ from { opacity:0; transform:translateX(-28px);} to { opacity:1; transform:translateX(0); } }
        @keyframes fadeIn    { from { opacity:0; }                            to { opacity:1; } }
        @keyframes rotateSlow{ from { transform:rotate(0deg); }               to { transform:rotate(360deg); } }
        @keyframes float     { 0%,100%{ transform:translate(-50%,-50%) translateY(0);} 50%{ transform:translate(-50%,-50%) translateY(-12px);} }
        @keyframes pulseGreen{ 0%,100%{ box-shadow:0 0 0 0 rgba(137,196,65,0.4);} 50%{ box-shadow:0 0 0 8px rgba(137,196,65,0);} }
        @keyframes blink     { 0%,100%{ opacity:1;} 50%{ opacity:0;} }
        @keyframes ticker    { from{ transform:translateX(0);} to{ transform:translateX(-50%);} }
        @keyframes shimmer {
  0% { background-position: 0% 0; }
  20% { background-position: -100% 0; }
  40% { background-position: -200% 0; }
  60% { background-position: -200% 0; }
  80% { background-position: -100% 0; }
  100% { background-position: 0% 0; }
}
      `}</style>
    </section>
  );
}
