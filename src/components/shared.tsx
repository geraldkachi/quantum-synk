import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../context/ThemeContext';

export const GREEN = '#89C441';

const year = new Date().getFullYear();

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref as React.RefObject<null>} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.65s ease-out ${delay}s, transform 0.65s ease-out ${delay}s`,
    }}>{children}</div>
  );
}

export function QSLogo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill={GREEN} />
      <path d="M8 18L14 10L22 26L28 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="18" r="3" fill="black" />
      <circle cx="8" cy="18" r="3" fill="black" />
    </svg>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-4 font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-[#89C441]">
      <span className="w-5 h-px bg-[#89C441]" />{children}
    </div>
  );
}

// export function PageHero({ label, title, accent, sub }: { label: string, title: string, accent?: string, sub?: string }) {
//   return (
//     <div className="relative pt-36 pb-20 px-6 md:px-16 overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none bg-grid" />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full pointer-events-none bg-hero-glow" />
//       <div className="max-w-5xl">
//         <div className="flex items-center gap-2.5 mb-5 font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-[#89C441]"
//           style={{ opacity: 0, animation: 'qs-slideRight 0.6s ease-out 0.1s forwards' }}>
//           <span className="w-5 h-px bg-[#89C441]" />{label}
//         </div>
//         <h1 className="font-outfit font-black leading-[1.04] tracking-[-0.03em] mb-5 text-foreground"
//           style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', opacity: 0, animation: 'qs-slideUp 0.7s ease-out 0.25s forwards' }}>
//           {title}{accent && <><br /><span className="text-[#89C441]">{accent}</span></>}
//         </h1>
//         {sub && <p className="font-outfit text-lg text-muted max-w-2xl leading-relaxed" style={{ opacity: 0, animation: 'qs-slideUp 0.7s ease-out 0.4s forwards' }}>{sub}</p>}
//       </div>
//     </div>
//   );
// }

export function PageHero({ label, title, accent, sub }: { label: string, title: string, accent?: string, sub?: string }) {
  return (
    <div className="relative pt-36 pb-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-grid" 
    //   style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: 0.05 }} 
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full pointer-events-none bg-hero-glow" 
    //   style={{ background: 'radial-gradient(ellipse at center,rgba(137,196,65,0.10) 0%,transparent 70%)' }} 
      />
      <div className="max-w-5xl">
        <div className="flex items-center gap-2.5 mb-5 font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-[#89C441]"
          style={{ opacity: 0, animation: 'qs-slideRight 0.6s ease-out 0.1s forwards' }}>
          <span className="w-5 h-px bg-[#89C441]" />{label}
        </div>
        <h1 className="font-outfit font-black leading-[1.04] tracking-[-0.03em] mb-5 text-white"
          style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', opacity: 0, animation: 'qs-slideUp 0.7s ease-out 0.25s forwards' }}>
          {title}{accent && <><br /><span className="text-[#89C441]">{accent}</span></>}
        </h1>
        {sub && <p className="font-outfit text-lg text-white/50 max-w-2xl leading-relaxed" style={{ opacity: 0, animation: 'qs-slideUp 0.7s ease-out 0.4s forwards' }}>{sub}</p>}
      </div>
      <style>{`
        @keyframes qs-slideUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes qs-slideRight { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes qs-pulseG     { 0%,100%{box-shadow:0 0 0 0 rgba(137,196,65,0.4)} 50%{box-shadow:0 0 0 8px rgba(137,196,65,0)} }
        @keyframes qs-blink      { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes qs-ticker     { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes qs-float      { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-12px)} }
        @keyframes qs-rotate     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}

const NAV_SERVICES: { label: string, href: string }[] = [
  { label: 'Software Engineering',  href: '/services/software' },
  { label: 'Data Engineering',      href: '/services/data' },
  { label: 'Business Intelligence', href: '/services/bi' },
  { label: 'AI & ML Integration',   href: '/services/ai' },
  { label: 'API & Integrations',    href: '/services/api' },
  { label: 'Cloud & DevOps',        href: '/services/cloud' },
];

const NAV_COMPANY = [
  { label: 'About Us',    href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Case Studies',href: '/case-studies' },
  { label: 'Careers',     href: '/careers' },
  { label: 'Blog',        href: '/blog' },
];

export function Navbar({ currentPath = '' }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]     = useState(false);
  const [servOpen, setServOpen]     = useState(false);
  const [compOpen, setCompOpen]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servHoverTimeout, setServHoverTimeout] = useState<number | null>(null);
  const [compHoverTimeout, setCompHoverTimeout] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servHoverTimeout) clearTimeout(servHoverTimeout);
      if (compHoverTimeout) clearTimeout(compHoverTimeout);
    };
  }, [servHoverTimeout, compHoverTimeout]);

  const isActive = (p: string) => currentPath === p || currentPath.startsWith(p);

  const handleServMouseEnter = () => {
    if (servHoverTimeout) clearTimeout(servHoverTimeout);
    setServOpen(true);
  };

  const handleServMouseLeave = () => {
    const timeout = setTimeout(() => setServOpen(false), 150);
    setServHoverTimeout(timeout);
  };

  const handleCompMouseEnter = () => {
    if (compHoverTimeout) clearTimeout(compHoverTimeout);
    setCompOpen(true);
  };

  const handleCompMouseLeave = () => {
    const timeout = setTimeout(() => setCompOpen(false), 150);
    setCompHoverTimeout(timeout);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-18 flex items-center justify-between px-6 md:px-12 border-b border-border transition-all duration-300 bg-nav ${scrolled ? 'bg-nav-scrolled' : ''}`}
      style={{ backdropFilter: 'blur(20px)' }}>

      <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
        <img src={theme === 'dark' ? '/vite.svg' : '/vites.svg'} className='w-20' alt="QuantumSynk" />
      </a>

      <div className="hidden md:flex items-center gap-7">
        {/* Services Dropdown */}
        <div 
          className="relative" 
          onMouseEnter={handleServMouseEnter} 
          onMouseLeave={handleServMouseLeave}
        >
          <button 
            className={`flex items-center gap-1.5 text-sm font-medium font-outfit bg-transparent border-none cursor-pointer transition-colors ${
              isActive('/services') ? 'text-[#89C441]' : 'text-muted hover:text-foreground'
            }`}
          >
            Services
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          
          {servOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-60 bg-dropdown border border-border rounded-2xl overflow-hidden shadow-2xl py-1.5"
              onMouseEnter={handleServMouseEnter}
              onMouseLeave={handleServMouseLeave}
            >
              {NAV_SERVICES.map(item => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className={`flex items-center gap-2.5 px-4 py-2.5 font-outfit text-sm no-underline transition-colors hover:bg-white/[0.04] ${
                    isActive(item.href) ? 'text-[#89C441]' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span 
                    className="w-1 h-1 rounded-full shrink-0" 
                    style={{ background: isActive(item.href) ? GREEN : 'var(--muted-darker)' }} 
                  />
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div 
          className="relative" 
          onMouseEnter={handleCompMouseEnter} 
          onMouseLeave={handleCompMouseLeave}
        >
          <button 
            className={`flex items-center gap-1.5 text-sm font-medium font-outfit bg-transparent border-none cursor-pointer transition-colors ${
              ['/about','/process','/case-studies','/careers','/blog'].some(p => isActive(p)) ? 'text-[#89C441]' : 'text-muted hover:text-foreground'
            }`}
          >
            Company
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          
          {compOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-48 bg-dropdown border border-border rounded-2xl overflow-hidden shadow-2xl py-1.5"
              onMouseEnter={handleCompMouseEnter}
              onMouseLeave={handleCompMouseLeave}
            >
              {NAV_COMPANY.map(item => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className={`flex items-center gap-2.5 px-4 py-2.5 font-outfit text-sm no-underline transition-colors hover:bg-white/4 ${
                    isActive(item.href) ? 'text-[#89C441]' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span 
                    className="w-1 h-1 rounded-full shrink-0" 
                    style={{ background: isActive(item.href) ? GREEN : 'var(--muted-darker)' }} 
                  />
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a 
          href="/contact" 
          className={`text-sm font-medium font-outfit no-underline transition-colors ${
            isActive('/contact') ? 'text-[#89C441]' : 'text-muted hover:text-foreground'
          }`}
        >
          Contact
        </a>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg border border-border bg-transparent hover:bg-white/5 transition-all duration-200 flex items-center justify-center group"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-[#89C441] transition-colors">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-[#89C441] transition-colors">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <a href="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold border border-[#89C441] text-[#89C441] rounded-lg font-outfit no-underline transition-all duration-200 hover:bg-[#89C441] hover:text-black">
          Book a Call
        </a>
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden flex flex-col gap-1.25 p-2 bg-transparent border-none cursor-pointer" 
        onClick={() => setMobileOpen(!mobileOpen)} 
        aria-label="Menu"
      >
        <span className={`block w-5.5 h-0.5 bg-white origin-center transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
        <span className={`block w-5.5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-5.5 h-0.5 bg-white origin-center transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-nav-mobile border-b border-border px-6 pt-5 pb-8 space-y-0.5 md:hidden max-h-[80vh] overflow-y-auto">
          <p className="font-mono text-[10px] text-muted-dark tracking-[0.15em] uppercase py-2">Services</p>
          {NAV_SERVICES.map(i => (
            <a 
              key={i.href} 
              href={i.href} 
              className={`flex items-center gap-2 py-2 font-outfit text-sm no-underline ${
                isActive(i.href) ? 'text-[#89C441]' : 'text-muted'
              }`}
            >
              <span className="w-1 h-1 rounded-full bg-muted-darker" />
              {i.label}
            </a>
          ))}
          
          <p className="font-mono text-[10px] text-muted-dark tracking-[0.15em] uppercase pt-4 pb-2">Company</p>
          {NAV_COMPANY.map(i => (
            <a 
              key={i.href} 
              href={i.href} 
              className={`flex items-center gap-2 py-2 font-outfit text-sm no-underline ${
                isActive(i.href) ? 'text-[#89C441]' : 'text-muted'
              }`}
            >
              <span className="w-1 h-1 rounded-full bg-muted-darker" />
              {i.label}
            </a>
          ))}
          
          <div className="pt-5">
            <a 
              href="/contact" 
              className="block py-3 text-center font-outfit text-sm font-semibold border border-[#89C441] text-[#89C441] rounded-xl no-underline"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
      const { theme } = useTheme();

  return (
    <footer className="bg-footer border-t border-border pt-16 pb-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-14">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={theme === 'dark' ? '/vite.svg' : '/vites.svg' } alt="companyLogo" className="w-20" />
          </div>
          <p className="font-outfit text-sm text-muted-dark leading-relaxed max-w-65 mb-5">
            Engineering intelligence for businesses that refuse to stand still.
          </p>
          <a 
            href="mailto:hello@quantumsynk.com" 
            className="font-mono text-xs no-underline hover:opacity-70 transition-opacity" 
            style={{ color: GREEN }}
          >
            hello@quantumsynk.com
          </a>
        </div>
        
        {[
          { title: 'Services', links: NAV_SERVICES },
          { title: 'Company', links: NAV_COMPANY },
          { 
            title: 'Connect', 
            links: [
              { label: 'Contact Us', href: '/contact' }, 
              { label: 'Book a Call', href: '/contact' }, 
              { label: 'LinkedIn', href: '#' }, 
              { label: 'Twitter / X', href: '#' }, 
              { label: 'GitHub', href: '#' }
            ] 
          },
        ].map(col => (
          <div key={col.title}>
            <div className="font-mono text-[10px] font-bold text-muted-dark tracking-[0.12em] uppercase mb-5">{col.title}</div>
            <ul className="list-none space-y-2.5">
              {col.links.map(l => (
                <li key={l.href + l.label}>
                  <a 
                    href={l.href} 
                    className="font-outfit text-sm text-muted no-underline hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
        <p className="font-outfit text-xs text-muted-dark text-center md:text-left">
          © {year} QuantumSynk. Founded by <span style={{ color: GREEN }}>Lawson Oladele Valentino</span>.
        </p>
        <span className="font-mono text-[10px] text-muted-darker">
          Built with precision. Delivered with purpose.
        </span>
      </div>
    </footer>
  );
}