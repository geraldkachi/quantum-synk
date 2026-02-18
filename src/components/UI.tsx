export function QSLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill="#89C441" />
      <path
        d="M8 18L14 10L22 26L28 18"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="18" r="3" fill="black" />
      <circle cx="8" cy="18" r="3" fill="black" />
    </svg>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5 font-mono-qs text-xs font-medium tracking-[0.14em] uppercase text-[#89C441]">
      <span className="w-6 h-px bg-[#89C441]" />
      {children}
    </div>
  );
}

export function PrimaryBtn({ href, onClick, children, className = '' }: { href?: string; onClick?: () => void; children: React.ReactNode; className?: string }) {
  const base =
    'inline-flex items-center gap-2.5 px-8 py-4 font-outfit text-base font-bold rounded-xl no-underline transition-all duration-200 bg-[#89C441] text-black hover:bg-[#9fd44d] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(137,196,65,0.3)]';
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${className} border-none cursor-pointer`}>
      {children}
    </button>
  );
}

export function SecondaryBtn({ href, onClick, children, className = '' }: { href?: string; onClick?: () => void; children: React.ReactNode; className?: string }) {
  const base =
    'inline-flex items-center gap-2 px-8 py-4 font-outfit text-base font-medium rounded-xl no-underline border border-white/15 text-white/70 transition-all duration-200 hover:border-white/40 hover:bg-white/[0.06] hover:text-white';
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${className} bg-transparent cursor-pointer`}>
      {children}
    </button>
  );
}
