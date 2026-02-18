import { QSLogo } from './UI';

const FOOTER_LINKS = {
  Services: [
    'Software Engineering',
    'Data Engineering',
    'Business Intelligence',
    'AI & ML Integration',
    'API & Integrations',
    'Cloud & DevOps',
  ],
  Company: ['About Us', 'Our Process', 'Case Studies', 'Careers', 'Blog'],
  Contact: ['Book a Call', 'Request a Demo', 'Partner with Us', 'LinkedIn', 'Twitter / X'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-16 pb-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <QSLogo size={32} />
            <span className="font-outfit text-lg font-bold text-white tracking-tight">
              Quantum<span className="text-[#89C441]">Synk</span>
            </span>
          </div>
          <p className="font-outfit text-sm text-white/30 leading-relaxed max-w-70 mb-5">
            Engineering intelligence for businesses that refuse to stand still. Your technology
            partner from brief to scale.
          </p>
          <a
            href="mailto:hello@quantumsynk.com"
            className="font-mono-qs text-xs text-[#89C441] no-underline hover:opacity-80 transition-opacity"
          >
            hello@quantumsynk.com
          </a>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([col, links]) => (
          <div key={col}>
            <div className="font-mono-qs text-xs font-bold text-white/30 tracking-[0.1em] uppercase mb-5">
              {col}
            </div>
            <ul className="list-none space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-outfit text-sm text-white/40 no-underline hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
        <p className="font-outfit text-xs text-white/30 text-center md:text-left">
          © {new Date().getFullYear()} QuantumSynk. All rights reserved. Founded by{' '}
          <span className="text-[#89C441]">Lawson Oladele Valentino</span>.
        </p>
        <span className="font-mono-qs text-xs text-white/20">
          Built with precision. Delivered with purpose.
        </span>
      </div>
    </footer>
  );
}
