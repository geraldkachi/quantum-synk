import { Navbar, Footer, PageHero, Reveal, Label } from '../components/shared';

const VALUES = [
  { icon: '⚡', title: 'Ruthless Clarity', desc: 'We eliminate ambiguity from every project. Clear objectives, clear metrics, clear accountability.' },
  { icon: '🔬', title: 'Engineering Rigour', desc: "We don't cut corners. Architecture decisions are made once and made well." },
  { icon: '🤝', title: 'Embedded Partnership', desc: 'We work as an extension of your team, not a supplier you manage from arm\'s length.' },
  { icon: '📊', title: 'Data-First Thinking', desc: 'Every solution we build is designed to generate and leverage intelligence, not just function.' },
  { icon: '🌍', title: 'Global Perspective', desc: 'Operating across Africa, Europe, and the Middle East, we understand global business realities.' },
  { icon: '🚀', title: 'Ownership Mindset', desc: 'We treat your product like it\'s ours. Because until it succeeds, it is.' },
];

const TEAM = [
  { initials: 'LV', name: 'Lawson Oladele Valentino', role: 'Founder & CEO', bio: 'Visionary technologist with 15+ years building enterprise systems across fintech, government, and logistics.', color: 'from-[#89C441] to-[#6fa332]' },
  { initials: 'AO', name: 'Adaeze Okonkwo', role: 'Chief Technology Officer', bio: 'Systems architect with deep expertise in distributed systems, data pipelines, and cloud-native applications.', color: 'from-blue-500 to-blue-700' },
  { initials: 'KM', name: 'Kwame Mensah', role: 'Head of Data Engineering', bio: 'Former data lead at Jumia and Flutterwave. Specialises in real-time analytics and ML infrastructure.', color: 'from-purple-500 to-purple-700' },
  { initials: 'FI', name: 'Funmilayo Ibrahim', role: 'Head of Delivery', bio: 'Certified scrum master and programme director. Zero projects shipped late under her watch.', color: 'from-orange-500 to-orange-700' },
  { initials: 'TN', name: 'Tolu Nwosu', role: 'Lead Solutions Architect', bio: 'API design specialist with experience integrating 200+ enterprise systems across banking and telecoms.', color: 'from-pink-500 to-pink-700' },
  { initials: 'SB', name: 'Sade Bankole', role: 'Head of AI/ML', bio: 'PhD in Computer Science from Imperial College London. Built recommendation engines serving 10M+ users.', color: 'from-teal-500 to-teal-700' },
];

const MILESTONES = [
  { year: '2019', event: 'Founded in Lagos', detail: 'QuantumSynk launched with a mission to bring world-class engineering to African enterprises.' },
  { year: '2020', event: 'First Enterprise Client', detail: 'Secured contract with a tier-1 Nigerian bank to rebuild their core transaction platform.' },
  { year: '2021', event: 'London Office Opens', detail: 'International expansion driven by demand from UK-based companies entering African markets.' },
  { year: '2022', event: '25 Products Shipped', detail: 'Crossed the milestone of 25 live products serving over 2 million end users.' },
  { year: '2023', event: 'Dubai Hub Established', detail: 'Middle East presence opens to serve GCC enterprises investing in digital transformation.' },
  { year: '2024', event: '50+ Products & 12 Industries', detail: 'QuantumSynk now operates as a preferred engineering partner across the globe.' },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath="/about" />

      <PageHero
        label="Our Company"
        title="Built by Builders,"
        accent="for Businesses."
        sub="QuantumSynk was founded on a simple belief: every ambitious company deserves access to world-class engineering. We exist to close that gap."
      />

      {/* Mission Statement */}
      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="p-10 bg-[#0a0a0a] border border-border rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,#89C441,transparent)' }} />
              <div className="font-mono text-[80px] text-[#89C441]/10 absolute -top-3 -left-3 select-none font-bold leading-none">"</div>
              <p className="font-outfit text-xl font-semibold leading-relaxed text-white relative z-10 mb-6">
                We started QuantumSynk because we kept seeing the same problem — great businesses held back by poor technology, overpriced consultancies, and engineering teams that didn't care about outcomes.
              </p>
              <p className="font-outfit text-base text-white/50 leading-relaxed relative z-10">
                Our mission is to be the engineering partner we wished existed: technically exceptional, commercially aware, and genuinely invested in your success.
              </p>
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-outfit text-sm font-black text-black flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#89C441,#6fa332)' }}>LV</div>
                <div>
                  <p className="font-outfit text-sm font-bold">Lawson Oladele Valentino</p>
                  <p className="font-mono text-xs text-white/30 mt-0.5">Founder & CEO, QuantumSynk</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '50+',  sub: 'Products shipped to production' },
              { num: '98%',  sub: 'Client retention rate' },
              { num: '12+',  sub: 'Industries served globally' },
              { num: '4x',   sub: 'Avg efficiency gains delivered' },
            ].map((m, i) => (
              <Reveal key={m.num} delay={i * 0.08}>
                <div className="p-7 bg-[#111] border border-border rounded-2xl relative overflow-hidden hover:border-[#89C441]/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#89C441]" />
                  <p className="font-outfit text-4xl font-black text-[#89C441] tracking-tight mb-1.5" style={{ lineHeight: 1 }}>{m.num}</p>
                  <p className="font-outfit text-xs text-white/40 leading-snug">{m.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Label>What We Stand For</Label>
            <h2 className="font-outfit text-4xl font-extrabold tracking-tight mb-4">Our Core <span className="text-[#89C441]">Values</span></h2>
            <p className="font-outfit text-white/40 text-lg max-w-xl mb-14">These aren't wall posters. They're the principles that dictate every decision we make.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="p-8 bg-[#111] border border-border rounded-2xl hover:border-[#89C441]/25 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-3xl block mb-5">{v.icon}</span>
                  <h3 className="font-outfit text-base font-bold mb-2.5">{v.title}</h3>
                  <p className="font-outfit text-sm text-white/40 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <Reveal>
          <Label>Our Journey</Label>
          <h2 className="font-outfit text-4xl font-extrabold tracking-tight mb-14">The QuantumSynk <span className="text-[#89C441]">Story</span></h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-0">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.07}>
                <div className="flex gap-8 items-start pb-10 group">
                  <div className="flex-shrink-0 w-[72px] text-right hidden md:block">
                    <span className="font-mono text-xs font-bold text-[#89C441]">{m.year}</span>
                  </div>
                  <div className="relative hidden md:block">
                    <div className="w-3 h-3 rounded-full bg-[#89C441] mt-0.5 relative z-10 transition-all duration-300 group-hover:scale-150"
                      style={{ boxShadow: '0 0 0 3px #000, 0 0 0 5px #89C441' }} />
                  </div>
                  <div className="flex-1 pl-0 md:pl-6">
                    <span className="font-mono text-xs text-[#89C441] md:hidden block mb-1">{m.year}</span>
                    <h3 className="font-outfit text-lg font-bold mb-1.5">{m.event}</h3>
                    <p className="font-outfit text-sm text-white/40 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Label>The Team</Label>
            <h2 className="font-outfit text-4xl font-extrabold tracking-tight mb-4">The People Behind <span className="text-[#89C441]">QuantumSynk</span></h2>
            <p className="font-outfit text-white/40 text-lg max-w-xl mb-14">A carefully assembled team of engineers, data scientists, and delivery specialists who've done this at scale before.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.07}>
                <div className="p-8 bg-[#111] border border-border rounded-2xl hover:border-[#89C441]/25 transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center font-outfit text-base font-black text-white mb-5`}>
                    {member.initials}
                  </div>
                  <h3 className="font-outfit text-base font-bold mb-1">{member.name}</h3>
                  <p className="font-mono text-xs text-[#89C441] mb-3">{member.role}</p>
                  <p className="font-outfit text-sm text-white/40 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(137,196,65,0.08) 0%,transparent 65%)' }} />
        <Reveal>
          <h2 className="font-outfit text-4xl md:text-5xl font-black tracking-tight mb-4">
            Ready to Work <span className="text-[#89C441]">Together?</span>
          </h2>
          <p className="font-outfit text-white/40 text-lg max-w-lg mx-auto mb-8">Let's start with a conversation. No pitch, no commitment — just a direct talk about your goals.</p>
          <a href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#89C441] text-black font-outfit font-bold text-base rounded-xl no-underline hover:bg-[#9fd44d] hover:-translate-y-0.5 transition-all duration-200 hover:shadow-[0_16px_32px_rgba(137,196,65,0.25)]">
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
