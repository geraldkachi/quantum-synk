import { useState } from 'react';
import { Navbar, Footer, PageHero, Reveal, Label } from '../components/shared';

// ══════════════════════════════════════
// OUR PROCESS PAGE
// ══════════════════════════════════════
const PHASES = [
  {
    num: '01', title: 'Discovery & Brief',
    duration: 'Week 1–2',
    color: 'from-[#89C441] to-[#6fa332]',
    steps: ['Stakeholder interviews & workshops', 'Business objective mapping', 'Technical constraint analysis', 'Success metric definition', 'Risk identification'],
    deliverable: 'Project Brief & Scope Document',
  },
  {
    num: '02', title: 'Architecture & Design',
    duration: 'Week 2–4',
    color: 'from-blue-500 to-blue-700',
    steps: ['System architecture diagram', 'Database / data model design', 'Tech stack finalisation', 'API contract drafting', 'Security model design'],
    deliverable: 'Technical Architecture Document',
  },
  {
    num: '03', title: 'Sprint Delivery',
    duration: 'Ongoing (2-week sprints)',
    color: 'from-purple-500 to-purple-700',
    steps: ['Sprint planning & backlog grooming', 'Daily standups', 'Feature development & code review', 'Continuous integration & testing', 'Sprint demos & retrospectives'],
    deliverable: 'Working Software Every Sprint',
  },
  {
    num: '04', title: 'QA & Pre-Launch',
    duration: '2–4 weeks before launch',
    color: 'from-orange-500 to-orange-700',
    steps: ['End-to-end regression testing', 'Performance & load testing', 'Security penetration testing', 'UAT with client stakeholders', 'Launch readiness checklist'],
    deliverable: 'QA Report & Launch Sign-Off',
  },
  {
    num: '05', title: 'Launch & Handoff',
    duration: 'Launch week',
    color: 'from-pink-500 to-pink-700',
    steps: ['Production deployment (zero-downtime)', 'Monitoring & alerting setup', 'Runbook & documentation delivery', 'Team training sessions', 'Knowledge transfer'],
    deliverable: 'Live System + Full Documentation',
  },
  {
    num: '06', title: 'Ongoing Support',
    duration: 'Post-launch',
    color: 'from-teal-500 to-teal-700',
    steps: ['Performance monitoring', 'Bug fixes & patch releases', 'Feature iteration planning', 'Quarterly architecture reviews', 'Scaling & cost optimisation'],
    deliverable: 'Continuous Improvement Partnership',
  },
];

export function ProcessPage() {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath="/process" />
      <PageHero label="How We Work" title="Our Delivery" accent="Process."
        sub="A disciplined, transparent methodology refined across 50+ products. We don't improvise — we execute a proven playbook, adapted to your context." />

      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.num} delay={i * 0.07}>
              <div className={`p-7 bg-[#0a0a0a] border rounded-2xl cursor-pointer transition-all duration-300 ${active === i ? 'border-[#89C441]/50' : 'border-border hover:border-white/20'}`}
                onClick={() => setActive(i)}>
                <div className="flex items-start justify-between mb-5">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-mono text-xs font-bold text-black bg-gradient-to-br ${phase.color}`}>{phase.num}</span>
                  <span className="font-mono text-[10px] text-white/30 text-right">{phase.duration}</span>
                </div>
                <h3 className="font-outfit text-base font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2 mb-5">
                  {phase.steps.map(s => (
                    <li key={s} className="flex items-center gap-2 font-outfit text-xs text-white/40">
                      <span className="w-1 h-1 rounded-full bg-[#89C441] flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <span className="font-mono text-[10px] text-[#89C441] uppercase tracking-widest">Deliverable: </span>
                  <span className="font-outfit text-xs text-white/60">{phase.deliverable}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Principles */}
        <Reveal>
          <Label>Our Principles</Label>
          <h2 className="font-outfit text-3xl font-extrabold tracking-tight mb-10">How We Think <span className="text-[#89C441]">About Delivery</span></h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { t: 'No Surprises', d: 'Weekly written updates, shared tracking boards, and proactive communication when plans change. Clients should never feel out of the loop.' },
            { t: 'Outcome Over Output', d: "Lines of code and features shipped are vanity metrics. We measure success by whether your business goal is achieved." },
            { t: 'Built to Be Handed Over', d: "Every codebase we write is documented, tested, and structured so your own engineers can own it without heroics." },
            { t: 'Honest Scope Conversations', d: "When something is out of scope or will delay delivery, we say so immediately — not in week 10 of a 12-week project." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07}>
              <div className="p-7 bg-[#0a0a0a] border border-border rounded-2xl hover:border-[#89C441]/20 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#89C441] mb-4" />
                <h3 className="font-outfit text-base font-bold mb-2">{p.t}</h3>
                <p className="font-outfit text-sm text-white/40 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ══════════════════════════════════════
// CASE STUDIES PAGE
// ══════════════════════════════════════
const CASES = [
  {
    tag: 'Fintech', client: 'Tier-1 Nigerian Bank', title: 'Core Transaction Platform Rebuild',
    summary: 'Rebuilt a 15-year-old COBOL-era transaction system handling ₦2.4T in daily volume to a modern microservices architecture — with zero downtime migration.',
    results: ['99.99% uptime since launch', '8x throughput improvement', '60% infrastructure cost reduction', '3.2M daily transactions processed'],
    stack: ['Node.js', 'PostgreSQL', 'Kafka', 'Kubernetes', 'AWS'],
    duration: '11 months', color: 'from-[#89C441] to-[#6fa332]', emoji: '🏦',
  },
  {
    tag: 'Data Engineering', client: 'Pan-African Retailer', title: 'Unified Data Platform — 47 Systems',
    summary: 'Built a central data lakehouse ingesting from 47 source systems across 12 countries, enabling real-time inventory analytics and demand forecasting.',
    results: ['47 source systems connected', 'Real-time inventory across 12 countries', '92% forecast accuracy (vs 71% prior)', '$4.2M inventory savings in year 1'],
    stack: ['Kafka', 'Databricks', 'dbt', 'Snowflake', 'Airflow', 'Python'],
    duration: '7 months', color: 'from-blue-500 to-blue-700', emoji: '🛒',
  },
  {
    tag: 'AI/ML', client: 'Insurance Group', title: 'Claims Fraud Detection Engine',
    summary: 'Designed and deployed an ML model that flags fraudulent insurance claims in real time at point of submission, reducing fraud loss by 67%.',
    results: ['67% reduction in fraud losses', '94% model precision at deployment', '<200ms inference latency', '$12M annual savings'],
    stack: ['Python', 'XGBoost', 'FastAPI', 'Kafka', 'AWS SageMaker'],
    duration: '4 months', color: 'from-purple-500 to-purple-700', emoji: '🛡️',
  },
  {
    tag: 'Software Engineering', client: 'Government Agency', title: 'National Passport Application Portal',
    summary: 'End-to-end digital passport application system replacing a paper-based process, serving 800,000+ citizens annually with integrated payment and biometric scheduling.',
    results: ['800K+ applications processed', 'Processing time cut from 21 to 5 days', '99.7% system uptime', '94% citizen satisfaction score'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'GCP'],
    duration: '9 months', color: 'from-orange-500 to-orange-700', emoji: '🏛️',
  },
  {
    tag: 'Business Intelligence', client: 'Telecoms Operator', title: 'Executive Analytics Suite',
    summary: 'Replaced 14 disconnected Excel-based reports with a unified, real-time BI platform used daily by C-suite and 200+ managers across the business.',
    results: ['14 reports consolidated', '200+ daily active users', 'Board reports automated (saved 40hrs/month)', 'Churn reduced 18% via intervention dashboards'],
    stack: ['Looker', 'dbt', 'BigQuery', 'Airflow', 'Python'],
    duration: '5 months', color: 'from-teal-500 to-teal-700', emoji: '📡',
  },
  {
    tag: 'Cloud & DevOps', client: 'SaaS Startup (Series B)', title: 'Cloud Cost & Reliability Overhaul',
    summary: 'Audited and restructured AWS infrastructure for a 150-employee SaaS company, reducing cloud spend by 54% while improving availability from 98.2% to 99.95%.',
    results: ['54% cloud cost reduction ($340K/year saved)', '99.95% uptime (up from 98.2%)', 'Deploy time cut from 45min to 6min', 'MTTR reduced from 4hrs to 22min'],
    stack: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Datadog'],
    duration: '3 months', color: 'from-pink-500 to-pink-700', emoji: '☁️',
  },
];

export function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...new Set(CASES.map(c => c.tag))];
  const filtered = filter === 'All' ? CASES : CASES.filter(c => c.tag === filter);

  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath="/case-studies" />
      <PageHero label="Our Work" title="Case" accent="Studies."
        sub="Real projects. Real results. A selection of the work we're most proud of — and the measurable impact it delivered." />

      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        {/* Filter */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full font-outfit text-sm border cursor-pointer transition-all duration-200 ${filter === t ? 'bg-[#89C441] text-black border-[#89C441]' : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white'}`}>
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filtered.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="p-8 bg-[#0a0a0a] border border-border rounded-2xl hover:border-[#89C441]/25 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.emoji}</span>
                    <div>
                      <span className={`inline-block px-2.5 py-1 rounded-full font-mono text-[10px] font-bold text-black bg-gradient-to-r ${c.color}`}>{c.tag}</span>
                      <p className="font-outfit text-xs text-white/30 mt-1">{c.client}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-dark">{c.duration}</span>
                </div>

                <h3 className="font-outfit text-xl font-bold mb-3 tracking-tight">{c.title}</h3>
                <p className="font-outfit text-sm text-white/50 leading-relaxed mb-6">{c.summary}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {c.results.map(r => (
                    <div key={r} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#89C441" strokeWidth="2.5" strokeLinecap="round" className="mt-0.5 flex-shrink-0"><path d="M20 6L9 17l-5-5"/></svg>
                      <span className="font-outfit text-xs text-white/60 leading-snug">{r}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                  {c.stack.map(s => (
                    <span key={s} className="px-2.5 py-1 bg-white/5 border border-border rounded-md font-mono text-[10px] text-white/40">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ══════════════════════════════════════
// CAREERS PAGE
// ══════════════════════════════════════
const ROLES = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Lagos / Remote', type: 'Full-time', level: 'Senior', desc: 'Build product features end-to-end using React, Node.js, and PostgreSQL. Own technical decisions and mentor junior engineers.' },
  { title: 'Data Engineer', team: 'Data', location: 'Lagos / London / Remote', type: 'Full-time', level: 'Mid–Senior', desc: 'Design and build ETL pipelines using Kafka, dbt, Airflow and cloud data warehouses. Drive data quality and reliability.' },
  { title: 'ML Engineer', team: 'AI/ML', location: 'Remote', type: 'Full-time', level: 'Senior', desc: 'Take ML models from research to production. Build serving infrastructure, monitoring, and retraining pipelines.' },
  { title: 'Cloud/DevOps Engineer', team: 'Infrastructure', location: 'Lagos / Remote', type: 'Full-time', level: 'Mid–Senior', desc: 'Own Kubernetes clusters, Terraform modules, and CI/CD pipelines across AWS and GCP environments.' },
  { title: 'BI / Analytics Engineer', team: 'Data', location: 'London / Remote', type: 'Full-time', level: 'Mid', desc: 'Build semantic layers, dbt models, and dashboards in Looker/Metabase. Bridge the gap between data engineering and business users.' },
  { title: 'Solutions Architect', team: 'Engineering', location: 'Dubai / Remote', type: 'Full-time', level: 'Principal', desc: 'Lead technical discovery for enterprise clients, define architecture, and own delivery quality across complex engagements.' },
];

export function CareersPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath="/careers" />
      <PageHero label="Join the Team" title="Build the Future" accent="With Us."
        sub="We're a team of engineers, data scientists, and problem-solvers who care deeply about craft. If you do too, we'd love to talk." />

      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        {/* Perks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: '🌍', t: 'Remote-First', d: 'Work from anywhere, overlap with your team' },
            { icon: '📈', t: 'Equity Available', d: 'Long-term alignment on select roles' },
            { icon: '🧠', t: 'Learning Budget', d: '$2,000/year for courses and conferences' },
            { icon: '🏖️', t: 'Flexible PTO', d: 'Unlimited leave — we trust you' },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07}>
              <div className="p-6 bg-[#0a0a0a] border border-border rounded-2xl text-center">
                <span className="text-2xl block mb-3">{p.icon}</span>
                <p className="font-outfit text-sm font-bold mb-1">{p.t}</p>
                <p className="font-outfit text-xs text-white/40">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Label>Open Roles</Label>
          <h2 className="font-outfit text-3xl font-extrabold tracking-tight mb-10">Current <span className="text-[#89C441]">Openings</span></h2>
        </Reveal>

        <div className="space-y-4">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <div className={`bg-[#0a0a0a] border rounded-xl overflow-hidden transition-all duration-300 ${open === i ? 'border-[#89C441]/40' : 'border-border hover:border-white/20'}`}>
                <button className="w-full flex items-center justify-between p-6 cursor-pointer bg-transparent text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="font-outfit text-base font-bold">{role.title}</h3>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-[#89C441]/10 border border-[#89C441]/20 rounded-md font-mono text-[10px] text-[#89C441]">{role.team}</span>
                      <span className="px-2.5 py-1 bg-white/5 border border-border rounded-md font-mono text-[10px] text-white/40">{role.level}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-outfit text-xs text-white/40 hidden md:block">{role.location}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-border pt-5">
                      <p className="font-outfit text-sm text-white/50 leading-relaxed mb-5">{role.desc}</p>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="font-outfit text-xs text-white/40">{role.location} · {role.type}</span>
                        <a href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#89C441] text-black font-outfit font-bold text-sm rounded-lg no-underline hover:bg-[#9fd44d] transition-colors">
                          Apply Now
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 p-7 bg-[#0a0a0a] border border-border rounded-2xl text-center">
            <p className="font-outfit text-base font-semibold mb-2">Don't see your role?</p>
            <p className="font-outfit text-sm text-white/40 mb-5">We're always open to exceptional talent. Send us your CV and tell us how you'd contribute.</p>
            <a href="mailto:careers@quantumsynk.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#89C441] text-[#89C441] font-outfit font-semibold text-sm rounded-lg no-underline hover:bg-[#89C441] hover:text-black transition-all">
              Send an Open Application
            </a>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}

// ══════════════════════════════════════
// BLOG PAGE
// ══════════════════════════════════════
const POSTS = [
  {
    tag: 'Data Engineering', date: 'Feb 12, 2026', readTime: '8 min read',
    title: 'Why Your Data Warehouse Is Lying to You (And How to Fix It)',
    excerpt: 'Most data warehouses suffer from undocumented transformations, conflicting metric definitions, and untested pipelines. Here\'s how we approach fixing broken data trust at scale.',
    author: { name: 'Kwame Mensah', role: 'Head of Data Engineering', initials: 'KM', color: 'from-purple-500 to-purple-700' },
    featured: true,
  },
  {
    tag: 'AI/ML', date: 'Jan 28, 2026', readTime: '12 min read',
    title: 'The Production ML Gap: Why 87% of Models Never Leave Staging',
    excerpt: 'Notebook-to-production is the hardest gap in ML engineering. We break down the architectural patterns and tooling that bridge it reliably.',
    author: { name: 'Sade Bankole', role: 'Head of AI/ML', initials: 'SB', color: 'from-teal-500 to-teal-700' },
    featured: true,
  },
  {
    tag: 'Software Engineering', date: 'Jan 15, 2026', readTime: '6 min read',
    title: 'The Hidden Cost of "Good Enough" Architecture',
    excerpt: 'Technical debt isn\'t just slow delivery. It\'s missed business opportunities, burned-out engineers, and compounding risk that eventually becomes someone\'s crisis.',
    author: { name: 'Adaeze Okonkwo', role: 'CTO', initials: 'AO', color: 'from-blue-500 to-blue-700' },
  },
  {
    tag: 'Cloud & DevOps', date: 'Dec 20, 2025', readTime: '9 min read',
    title: 'How We Cut a Client\'s AWS Bill by 54% in 3 Months',
    excerpt: 'A walkthrough of the exact infrastructure audit process, right-sizing methodology, and reserved instance strategy that delivered $340K in annual savings.',
    author: { name: 'Tolu Nwosu', role: 'Lead Solutions Architect', initials: 'TN', color: 'from-pink-500 to-pink-700' },
  },
  {
    tag: 'Business Intelligence', date: 'Dec 5, 2025', readTime: '7 min read',
    title: 'Building a BI Culture, Not Just a BI Stack',
    excerpt: 'The best dashboards go unused if the organisation isn\'t ready for them. How we run our BI adoption workshops alongside technical delivery.',
    author: { name: 'Funmilayo Ibrahim', role: 'Head of Delivery', initials: 'FI', color: 'from-orange-500 to-orange-700' },
  },
  {
    tag: 'Engineering Culture', date: 'Nov 18, 2025', readTime: '5 min read',
    title: 'What "Done" Actually Means at QuantumSynk',
    excerpt: 'A feature isn\'t done when it\'s deployed. It\'s done when it\'s monitored, documented, tested, and your team can own it without us in the room.',
    author: { name: 'Lawson Oladele Valentino', role: 'CEO', initials: 'LV', color: 'from-[#89C441] to-[#6fa332]' },
  },
];

export function BlogPage() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...new Set(POSTS.map(p => p.tag))];
  const featured = POSTS.filter(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  const filteredRest = filter === 'All' ? rest : rest.filter(p => p.tag === filter);

  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath="/blog" />
      <PageHero label="Insights" title="The QuantumSynk" accent="Blog."
        sub="Engineering insights, lessons from the field, and thinking on the future of enterprise technology — from the team building it." />

      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        {/* Featured */}
        <Reveal>
          <Label>Featured</Label>
          <h2 className="font-outfit text-2xl font-bold tracking-tight mb-8">Latest <span className="text-[#89C441]">Articles</span></h2>
        </Reveal>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-16">
          {featured.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <div className="p-8 bg-[#0a0a0a] border border-border rounded-2xl hover:border-[#89C441]/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1.5 bg-[#89C441]/10 border border-[#89C441]/20 rounded-full font-mono text-[10px] text-[#89C441]">{post.tag}</span>
                  <span className="font-mono text-[10px] text-muted-dark">{post.date} · {post.readTime}</span>
                </div>
                <h3 className="font-outfit text-xl font-bold mb-3 leading-snug tracking-tight group-hover:text-[#89C441] transition-colors">{post.title}</h3>
                <p className="font-outfit text-sm text-white/45 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${post.author.color} flex items-center justify-center font-outfit text-xs font-black text-white`}>
                      {post.author.initials}
                    </div>
                    <div>
                      <p className="font-outfit text-xs font-semibold">{post.author.name}</p>
                      <p className="font-mono text-[10px] text-white/30">{post.author.role}</p>
                    </div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89C441" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Filter + rest */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full font-outfit text-sm border cursor-pointer transition-all duration-200 ${filter === t ? 'bg-[#89C441] text-black border-[#89C441]' : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white'}`}>
                {t}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredRest.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <div className="p-7 bg-[#0a0a0a] border border-border rounded-2xl hover:border-[#89C441]/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-white/5 border border-border rounded-full font-mono text-[10px] text-white/50">{post.tag}</span>
                  <span className="font-mono text-[10px] text-white/20">{post.readTime}</span>
                </div>
                <h3 className="font-outfit text-base font-bold mb-2.5 leading-snug group-hover:text-[#89C441] transition-colors">{post.title}</h3>
                <p className="font-outfit text-xs text-white/40 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-2.5 pt-4 border-t border-border">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${post.author.color} flex items-center justify-center font-outfit text-[10px] font-black text-white`}>
                    {post.author.initials}
                  </div>
                  <span className="font-outfit text-xs text-white/40">{post.author.name}</span>
                  <span className="ml-auto font-mono text-[10px] text-muted-dark">{post.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
