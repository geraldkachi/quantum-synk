import { useState } from 'react';
import { Navbar, Footer, PageHero, Reveal } from '../components/shared';

const OFFICES = [
  { city: 'Lagos', country: 'Nigeria', address: '1 Johnson St, Yaba Onike Lagos', email: 'lagos@quantumsynk.com', phone: '+234 800 000 0000', tz: 'WAT (UTC+1)' },
  { city: 'London', country: 'United Kingdom', address: '1 Canada Square, Canary Wharf', email: 'london@quantumsynk.com', phone: '+44 20 0000 0000', tz: 'GMT/BST (UTC+0/+1)' },
  { city: 'Dubai', country: 'UAE', address: 'DIFC Gate Village, Building 3', email: 'dubai@quantumsynk.com', phone: '+971 4 000 0000', tz: 'GST (UTC+4)' },
];

const TOPICS = [
  'Software Engineering Project',
  'Data Engineering / Pipelines',
  'Business Intelligence',
  'AI & ML Integration',
  'API Design & Integration',
  'Cloud Architecture',
  'Partnership Enquiry',
  'Other',
];

function OfficeCard({ office, delay }: { office: typeof OFFICES[0], delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="p-7 bg-[#111] border border-border rounded-2xl hover:border-[#89C441]/30 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-outfit text-lg font-bold text-white">{office.city}</h3>
            <p className="font-mono text-xs text-[#89C441] mt-0.5">{office.country}</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#89C441] mt-2" style={{ animation: 'pulseG 2s ease-in-out infinite' }} />
        </div>
        <p className="font-outfit text-sm text-white/40 mb-4 leading-relaxed">{office.address}</p>
        <div className="space-y-2">
          <a href={`mailto:${office.email}`} className="flex items-center gap-2 font-outfit text-sm text-white/60 no-underline hover:text-[#89C441] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {office.email}
          </a>
          <div className="flex items-center gap-2 font-outfit text-sm text-white/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.65 4.36 2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {office.phone}
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-white/30">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {office.tz}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', topic: '', message: '', budget: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handle = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); };

  const inputClass = (key: string) =>
    `w-full px-4 py-3.5 bg-[#111] border rounded-xl font-outfit text-sm text-white placeholder-white/25 outline-none transition-all duration-200 ${focused === key ? 'border-[#89C441]/60' : 'border-border'} focus:border-[#89C441]/60`;

  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath="/contact" />

      <PageHero
        label="Get In Touch"
        title="Let's Build"
        accent="Something Great."
        sub="Tell us about your project. We'll respond within one business day with an honest assessment of how we can help — no fluff, no commitment required."
      />

      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 gap-12">

          {/* Form — 3 cols */}
          <div className="xl:col-span-3">
            <Reveal>
              <div className="p-8 md:p-10 bg-[#0a0a0a] border border-border rounded-2xl">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#89C441]" style={{ animation: 'pulseG 2s ease-in-out infinite' }} />
                  <span className="font-mono text-xs text-[#89C441] tracking-widest uppercase">Start a Conversation</span>
                </div>

                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#89C441]/10 border border-[#89C441]/30">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#89C441" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <h3 className="font-outfit text-2xl font-bold mb-3">Message Received</h3>
                    <p className="font-outfit text-white/50 max-w-sm mx-auto">We'll be in touch within one business day. Looking forward to learning about your project.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Full Name *</label>
                        <input required value={form.name} onChange={e => handle('name', e.target.value)}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                          className={inputClass('name')} placeholder="Amara Johnson" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Company</label>
                        <input value={form.company} onChange={e => handle('company', e.target.value)}
                          onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                          className={inputClass('company')} placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Work Email *</label>
                        <input required type="email" value={form.email} onChange={e => handle('email', e.target.value)}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                          className={inputClass('email')} placeholder="amara@company.com" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Phone</label>
                        <input value={form.phone} onChange={e => handle('phone', e.target.value)}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                          className={inputClass('phone')} placeholder="+1 555 000 0000" />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Topic *</label>
                      <select required value={form.topic} onChange={e => handle('topic', e.target.value)}
                        onFocus={() => setFocused('topic')} onBlur={() => setFocused('')}
                        className={inputClass('topic') + ' cursor-pointer'} style={{ appearance: 'none' }}>
                        <option value="" disabled>Select a service area...</option>
                        {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Estimated Budget</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {['< $10k', '$10–50k', '$50–200k', '$200k+'].map(b => (
                          <button key={b} type="button" onClick={() => handle('budget', b)}
                            className={`py-2.5 rounded-lg border font-outfit text-sm transition-all duration-200 cursor-pointer ${form.budget === b ? 'border-[#89C441] bg-[#89C441]/10 text-[#89C441]' : 'border-border bg-transparent text-white/40 hover:border-white/30'}`}>
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-white/40 tracking-widest uppercase mb-2">Tell Us About Your Project *</label>
                      <textarea required rows={5} value={form.message} onChange={e => handle('message', e.target.value)}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                        className={inputClass('message') + ' resize-none'} placeholder="Describe the challenge you're solving, your current setup, and what success looks like..." />
                    </div>

                    <button type="submit"
                      className="w-full py-4 bg-[#89C441] text-black font-outfit font-bold text-base rounded-xl border-none cursor-pointer transition-all duration-200 hover:bg-[#9fd44d] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(137,196,65,0.25)] flex items-center justify-center gap-2">
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="xl:col-span-2 space-y-6">
            <Reveal delay={0.1}>
              <div className="p-7 bg-[#0a0a0a] border border-border rounded-2xl">
                <h3 className="font-outfit text-base font-bold mb-5">What Happens Next</h3>
                <div className="space-y-5">
                  {[
                    { n: '01', t: 'We Read Your Brief', d: 'Within 4 hours, your message reaches our team and we assign it to the right specialist.' },
                    { n: '02', t: 'Discovery Call', d: 'We schedule a 30-minute call to understand your project, timeline, and goals in depth.' },
                    { n: '03', t: 'Proposal & Scope', d: 'We deliver a tailored proposal with a clear scope, timeline, and transparent pricing.' },
                    { n: '04', t: "We Start Building", d: "Once aligned, we kick off immediately. No long onboarding, no delays." },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <span className="font-mono text-xs text-[#89C441] pt-0.5 flex-shrink-0">{s.n}</span>
                      <div>
                        <p className="font-outfit text-sm font-semibold mb-1">{s.t}</p>
                        <p className="font-outfit text-xs text-white/40 leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-7 bg-[#0a0a0a] border border-border rounded-2xl">
                <h3 className="font-outfit text-base font-bold mb-1">Direct Line</h3>
                <p className="font-outfit text-xs text-white/40 mb-5">Prefer talking to a human right now?</p>
                <a href="mailto:hello@quantumsynk.com"
                  className="flex items-center gap-3 p-4 bg-[#89C441]/8 border border-[#89C441]/20 rounded-xl no-underline hover:bg-[#89C441]/12 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#89C441]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#89C441" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="font-outfit text-sm font-semibold text-white">hello@quantumsynk.com</p>
                    <p className="font-outfit text-xs text-white/40">Replies within 4 hours</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-outfit text-3xl font-bold tracking-tight mb-2">Our Offices</h2>
          <p className="font-outfit text-white/40 text-sm mb-10">Global reach, local presence.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {OFFICES.map((o, i) => <OfficeCard key={o.city} office={o} delay={i * 0.08} />)}
        </div>
      </section>

      <Footer />
      <style>{`@keyframes pulseG{0%,100%{box-shadow:0 0 0 0 rgba(137,196,65,0.4)}50%{box-shadow:0 0 0 8px rgba(137,196,65,0)}}`}</style>
    </div>
  );
}
