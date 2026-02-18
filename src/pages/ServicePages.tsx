/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navbar, Footer, PageHero, Reveal, Label } from '../components/shared';

// ── Service page template ─────────────────────────────────────
function ServicePage({ service }: { service: any }) {
  return (
    <div className="bg-black text-white min-h-screen font-outfit">
      <Navbar currentPath={`/services/${service.slug}`} />
      <PageHero label={service.category} title={service.title} accent={service.accent} sub={service.sub} />

      {/* Overview */}
      <section className="px-6 md:px-16 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          <div className="xl:col-span-2 space-y-6">
            {service.overview.map((para: string, i: number) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-outfit text-base text-white/60 leading-relaxed">{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="p-7 bg-[#0a0a0a] border border-white/10 rounded-2xl space-y-4">
              <h3 className="font-outfit text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Quick Facts</h3>
              {service.facts.map((f: any) => (
                <div key={f.k} className="flex justify-between items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="font-outfit text-xs text-white/40">{f.k}</span>
                  <span className="font-outfit text-xs font-semibold text-white text-right">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#0a0a0a] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal><Label>Capabilities</Label>
            <h2 className="font-outfit text-3xl font-extrabold tracking-tight mb-12">What We <span className="text-[#89C441]">Deliver</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {service.capabilities.map((cap: any, i: number) => (
              <Reveal key={cap.title} delay={i * 0.06}>
                <div className="p-7 bg-[#111] border border-white/10 rounded-2xl hover:border-[#89C441]/25 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 bg-[#89C441]/08 border border-[#89C441]/15">
                    <span className="text-lg">{cap.icon}</span>
                  </div>
                  <h3 className="font-outfit text-sm font-bold mb-2">{cap.title}</h3>
                  <p className="font-outfit text-xs text-white/40 leading-relaxed">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <Reveal>
          <Label>Tech Stack</Label>
          <h2 className="font-outfit text-3xl font-extrabold tracking-tight mb-10">Tools & <span className="text-[#89C441]">Technologies</span></h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {service.tech.map((t: string, i: number) => (
            <Reveal key={t} delay={i * 0.03}>
              <span className="px-4 py-2 bg-[#111] border border-white/10 rounded-full font-mono text-xs text-white/60 hover:border-[#89C441]/40 hover:text-[#89C441] transition-all duration-200 cursor-default">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0a0a] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Label>How We Work</Label>
            <h2 className="font-outfit text-3xl font-extrabold tracking-tight mb-12">Our <span className="text-[#89C441]">Approach</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {service.process.map((step: any, i: number) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="p-7 bg-[#111] border border-white/10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#89C441]" />
                  <span className="font-mono text-xs text-[#89C441] block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-outfit text-sm font-bold mb-2">{step.title}</h3>
                  <p className="font-outfit text-xs text-white/40 leading-relaxed">{step.desc}</p>
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
          <h2 className="font-outfit text-4xl font-black tracking-tight mb-4">
            Ready to Start Your <span className="text-[#89C441]">{service.titleShort}</span> Project?
          </h2>
          <p className="font-outfit text-white/40 text-lg max-w-lg mx-auto mb-8">
            Let's talk about your requirements and scope an engagement that works for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#89C441] text-black font-outfit font-bold text-base rounded-xl no-underline hover:bg-[#9fd44d] hover:-translate-y-0.5 transition-all duration-200">
              Discuss Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="/process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 font-outfit text-base rounded-xl no-underline hover:border-white/40 hover:text-white transition-all duration-200">
              See Our Process
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

// ── Service data ──────────────────────────────────────────────
const SERVICES_DATA = {
  software: {
    slug: 'software', category: 'Service', titleShort: 'Software',
    title: 'Custom Software', accent: 'Engineering.',
    sub: 'We design and build scalable, production-grade software — from complex enterprise platforms to focused SaaS products — with the rigour of a tier-1 engineering team.',
    overview: [
      'Every great product starts with a deep understanding of the problem. Before we write a line of code, we invest time learning your business model, user journeys, and technical constraints. This discovery phase ensures every engineering decision is commercially justified.',
      "We build using modern, battle-tested stacks — React, Next.js, Node.js, Python, Go, and PostgreSQL are our daily tools. We don't chase trends; we choose the right tool for the job.",
      'Our delivery model is fully agile: two-week sprints, live demos, and continuous integration. You have full visibility into progress and can redirect at any stage.',
    ],
    facts: [
      { k: 'Typical Engagement', v: '3–12 months' },
      { k: 'Team Size', v: '3–8 engineers' },
      { k: 'Delivery Model', v: 'Agile sprints' },
      { k: 'Avg Time to MVP', v: '6–10 weeks' },
    ],
    capabilities: [
      { icon: '🖥️', title: 'Web Application Development', desc: 'Responsive, performant web apps built with modern frameworks and accessibility baked in.' },
      { icon: '📱', title: 'Mobile Development', desc: 'React Native and Flutter applications that share logic across iOS and Android.' },
      { icon: '⚙️', title: 'Backend & API Development', desc: 'Robust REST and GraphQL APIs with authentication, rate limiting, and full documentation.' },
      { icon: '🏗️', title: 'Platform Architecture', desc: 'Multi-tenant SaaS platforms, microservices, and event-driven systems built for scale.' },
      { icon: '🔄', title: 'Legacy Modernisation', desc: 'Systematic migration of legacy codebases to modern stacks without disrupting operations.' },
      { icon: '🧪', title: 'QA & Testing Strategy', desc: 'Automated test suites, CI pipelines, and quality gates that prevent regressions at speed.' },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Tailwind CSS', 'GraphQL', 'REST', 'Prisma', 'tRPC'],
    process: [
      { title: 'Discovery & Scoping', desc: 'We define requirements, user stories, and technical constraints before a line of code is written.' },
      { title: 'Architecture Design', desc: 'System design, database modelling, and tech stack decisions aligned to your scale.' },
      { title: 'Sprint Delivery', desc: '2-week sprints with demos, retrospectives, and continuous integration throughout.' },
      { title: 'Launch & Support', desc: 'Production deployment, monitoring setup, and ongoing support post-launch.' },
    ],
  },

  data: {
    slug: 'data', category: 'Service', titleShort: 'Data Engineering',
    title: 'Data Engineering', accent: '& Pipelines.',
    sub: 'Modern data infrastructure that transforms raw, fragmented data into a reliable, governed asset — the foundation of every intelligent business decision.',
    overview: [
      'Data is only valuable when it flows reliably, transforms correctly, and arrives where it\'s needed. Most organisations sit on mountains of data trapped in silos, batch jobs that fail silently, and warehouses no one trusts.',
      'We design and implement modern data stacks built on medallion architecture principles — bronze, silver, gold — using tools like Apache Kafka, dbt, Airflow, Spark, and cloud-native warehouses like BigQuery, Snowflake, and Redshift.',
      'The result is a data infrastructure your analysts trust, your ML models can consume, and your engineers can maintain without heroics.',
    ],
    facts: [
      { k: 'Typical Engagement', v: '2–8 months' },
      { k: 'Data Volume Handled', v: 'GB to petabyte scale' },
      { k: 'Delivery Model', v: 'Milestone-based' },
      { k: 'SLA Uptime Target', v: '99.9%' },
    ],
    capabilities: [
      { icon: '🔀', title: 'ETL / ELT Pipelines', desc: 'Automated, monitored data pipelines that move and transform data reliably at any volume.' },
      { icon: '🏞️', title: 'Data Lakehouse Design', desc: 'Delta Lake and Apache Iceberg architectures that combine the best of lakes and warehouses.' },
      { icon: '⚡', title: 'Real-Time Streaming', desc: 'Apache Kafka and Flink pipelines for event-driven architectures and real-time analytics.' },
      { icon: '🏭', title: 'Data Warehouse Optimisation', desc: 'Query optimisation, partitioning strategy, and cost reduction for Snowflake, BigQuery, Redshift.' },
      { icon: '📐', title: 'Data Modelling (dbt)', desc: 'Dimensional models, slowly changing dimensions, and semantic layers using dbt and SQL.' },
      { icon: '🔍', title: 'Data Quality & Governance', desc: 'Great Expectations, data contracts, lineage tracking, and alerting for data quality breaches.' },
    ],
    tech: ['Apache Kafka', 'Apache Spark', 'Airflow', 'dbt', 'Snowflake', 'BigQuery', 'Redshift', 'Delta Lake', 'Apache Flink', 'Python', 'SQL', 'Terraform', 'AWS Glue', 'Databricks', 'Great Expectations', 'Fivetran', 'Stitch'],
    process: [
      { title: 'Data Audit', desc: 'We map your current data landscape — sources, quality, gaps, and pain points.' },
      { title: 'Architecture Blueprint', desc: 'Design the target state: ingestion layer, transformation layer, serving layer.' },
      { title: 'Build & Migrate', desc: 'Pipeline development, testing, and incremental data migration with zero downtime.' },
      { title: 'Handoff & Training', desc: 'Documentation, runbooks, and team training so your engineers own it confidently.' },
    ],
  },

  bi: {
    slug: 'bi', category: 'Service', titleShort: 'Business Intelligence',
    title: 'Business Intelligence', accent: '& Analytics.',
    sub: 'Turn raw data into decisive insight. We build the dashboards, models, and reporting infrastructure your teams actually use to make better decisions faster.',
    overview: [
      'Most BI projects fail not because of bad tools but because of bad foundations. Dashboards built on unclean data, no semantic layer, and no single source of truth inevitably collapse under scrutiny.',
      'We approach BI as an engineering discipline. We start with the data model, define metrics clearly, build a semantic layer, then expose it through dashboards your stakeholders trust and rely on daily.',
      'The outcome isn&apos;t charts. It&apos;s a culture of data-informed decision making enabled by infrastructure that&apos;s reliable, fast, and maintainable.',
    ],
    facts: [
      { k: 'Typical Engagement', v: '4–12 weeks' },
      { k: 'Dashboard Users', v: '10 to 10,000+' },
      { k: 'Refresh Frequency', v: 'Real-time to daily' },
      { k: 'Tools Supported', v: 'Looker, Metabase, PBI, Tableau' },
    ],
    capabilities: [
      { icon: '📊', title: 'Executive Dashboards', desc: 'Board-level KPI dashboards with clear narrative, trend analysis, and drill-through capability.' },
      { icon: '🔢', title: 'Metrics Layer (Semantic Layer)', desc: 'A single source of truth for business metrics using dbt metrics, LookML, or Cube.js.' },
      { icon: '🧮', title: 'Self-Serve Analytics', desc: 'Empowering non-technical users to explore data safely with guardrails and pre-built models.' },
      { icon: '🔮', title: 'Predictive Analytics', desc: 'Forecasting models, churn prediction, and revenue projections embedded directly in dashboards.' },
      { icon: '⚡', title: 'Real-Time Reporting', desc: 'Live operational dashboards for monitoring transactions, system health, or sales pipelines.' },
      { icon: '📤', title: 'Automated Reporting', desc: 'Scheduled email reports, Slack alerts, and PDF exports for business stakeholders.' },
    ],
    tech: ['Looker', 'Metabase', 'Power BI', 'Tableau', 'Superset', 'dbt', 'Cube.js', 'BigQuery', 'Snowflake', 'Python', 'pandas', 'Plotly', 'SQL', 'LookML'],
    process: [
      { title: 'Metric Definition', desc: 'Work with stakeholders to define what matters and how to measure it unambiguously.' },
      { title: 'Data Modelling', desc: 'Build the semantic layer and dimensional models that power consistent reporting.' },
      { title: 'Dashboard Build', desc: 'Design and develop dashboards iteratively with user feedback at each stage.' },
      { title: 'Training & Adoption', desc: 'Ensure teams can use, trust, and extend the system independently.' },
    ],
  },

  ai: {
    slug: 'ai', category: 'Service', titleShort: 'AI / ML',
    title: 'AI & Machine', accent: 'Learning Integration.',
    sub: 'We embed intelligence into your product and workflows — from recommendation engines and predictive models to LLM-powered automation that actually works in production.',
    overview: [
      'There\'s a significant gap between AI demos and AI in production. Most ML projects never make it to live systems — they stall in notebooks, fail to integrate with existing architecture, or deliver models that degrade over time without monitoring.',
      'QuantumSynk bridges that gap. We design AI/ML systems with production in mind from day one: serving infrastructure, data drift detection, model versioning, A/B testing, and rollback capability.',
      'Whether it\'s a recommendation engine, a document processing pipeline, a computer vision system, or an LLM-based workflow, we build it to run reliably at scale.',
    ],
    facts: [
      { k: 'Typical Engagement', v: '2–6 months' },
      { k: 'Model Types', v: 'Classical ML, Deep Learning, LLMs' },
      { k: 'MLOps Included', v: 'Yes — always' },
      { k: 'Explainability', v: 'SHAP, LIME, built-in' },
    ],
    capabilities: [
      { icon: '🎯', title: 'Recommendation Engines', desc: 'Collaborative, content-based, and hybrid recommenders for products, content, and connections.' },
      { icon: '🤖', title: 'LLM Integration', desc: 'RAG pipelines, fine-tuned models, and agent workflows using GPT-4, Claude, Gemini, and Llama.' },
      { icon: '👁️', title: 'Computer Vision', desc: 'Object detection, document OCR, quality inspection, and image classification at production scale.' },
      { icon: '📝', title: 'NLP & Text Analytics', desc: 'Sentiment analysis, entity extraction, document classification, and intelligent search.' },
      { icon: '📈', title: 'Predictive Modelling', desc: 'Forecasting, churn prediction, anomaly detection, and credit scoring models.' },
      { icon: '🔧', title: 'MLOps & Model Serving', desc: 'End-to-end pipelines from training to serving with monitoring, versioning, and drift detection.' },
    ],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'HuggingFace', 'LangChain', 'OpenAI API', 'Anthropic API', 'MLflow', 'Kubeflow', 'Ray', 'FastAPI', 'Triton Inference Server', 'Feast', 'Great Expectations', 'AWS SageMaker', 'Vertex AI'],
    process: [
      { title: 'Problem Framing', desc: 'Translate the business problem into a precise ML problem with measurable success criteria.' },
      { title: 'Data & Modelling', desc: 'Feature engineering, model training, evaluation, and iterative improvement.' },
      { title: 'Production Deployment', desc: 'API serving, latency optimisation, A/B testing, and monitoring setup.' },
      { title: 'MLOps & Maintenance', desc: 'Retraining pipelines, drift detection, and model governance over time.' },
    ],
  },

  api: {
    slug: 'api', category: 'Service', titleShort: 'API & Integration',
    title: 'API Design &', accent: 'Systems Integration.',
    sub: 'We design, build, and connect APIs that become the nervous system of your enterprise — secure, well-documented, and built to be consumed reliably at scale.',
    overview: [
      'Modern businesses run on integrations. Payment gateways, CRMs, ERPs, government portals, legacy systems, and SaaS platforms — connecting them reliably is an engineering discipline, not a side task.',
      'We design APIs as products: versioned, documented, rate-limited, and built with the consumer in mind. Whether it\'s a public-facing API ecosystem or an internal service mesh, we apply the same rigour.',
      'Our integration work includes third-party API wrappers, webhook handlers, event-driven consumers, and full middleware layers that decouple tightly coupled systems.',
    ],
    facts: [
      { k: 'API Styles', v: 'REST, GraphQL, gRPC, WebSocket' },
      { k: 'Typical Integrations', v: '5–50 per engagement' },
      { k: 'Documentation', v: 'OpenAPI / Swagger, always' },
      { k: 'Uptime Target', v: '99.95%' },
    ],
    capabilities: [
      { icon: '🔌', title: 'RESTful API Design', desc: 'Clean, versioned, OpenAPI-documented REST APIs built to be consumed without confusion.' },
      { icon: '🕸️', title: 'GraphQL APIs', desc: 'Flexible, typed schemas with DataLoader patterns, subscriptions, and federation.' },
      { icon: '⚡', title: 'Real-Time APIs', desc: 'WebSocket and Server-Sent Events APIs for live data feeds and collaborative features.' },
      { icon: '🔗', title: 'Third-Party Integrations', desc: 'Reliable connections to payment gateways, CRMs, ERPs, and government APIs.' },
      { icon: '🛡️', title: 'API Security', desc: 'OAuth2, API keys, rate limiting, WAF integration, and security scanning.' },
      { icon: '📋', title: 'API Governance', desc: 'Versioning strategies, deprecation policies, consumer portals, and SDK generation.' },
    ],
    tech: ['Node.js', 'Python', 'Go', 'FastAPI', 'Express', 'NestJS', 'GraphQL', 'Apollo', 'Prisma', 'OpenAPI', 'Swagger', 'Postman', 'Kong', 'AWS API Gateway', 'OAuth2', 'JWT', 'Redis', 'RabbitMQ', 'Kafka'],
    process: [
      { title: 'API Design Review', desc: 'Review existing or design new API contracts aligned to consumer needs.' },
      { title: 'Integration Mapping', desc: 'Map all integration touch points, authentication flows, and error states.' },
      { title: 'Build & Test', desc: 'Development with integration tests, contract tests, and load tests.' },
      { title: 'Documentation & SDK', desc: 'OpenAPI docs, Postman collections, and optional SDK generation.' },
    ],
  },

  cloud: {
    slug: 'cloud', category: 'Service', titleShort: 'Cloud & DevOps',
    title: 'Cloud Architecture', accent: '& DevOps.',
    sub: 'Resilient, cost-efficient cloud infrastructure and delivery pipelines that let your engineers ship faster, sleep soundly, and scale without pain.',
    overview: [
      'Cloud infrastructure done wrong is expensive, brittle, and slow. Teams spend more time fighting infra fires than shipping features. We fix that by applying infrastructure-as-code principles, immutable deployments, and observable systems from the ground up.',
      'We work across AWS, GCP, and Azure, and design platform-agnostic where possible. Whether you\'re migrating a monolith, containerising services, or building a cloud-native platform from scratch, we bring the discipline your engineering team needs.',
      'Our DevOps work includes CI/CD pipeline design, secrets management, cost optimisation, disaster recovery, and the kind of runbooks that mean your on-call engineer isn\'t calling anyone at 3am.',
    ],
    facts: [
      { k: 'Cloud Platforms', v: 'AWS, GCP, Azure' },
      { k: 'Uptime SLA Target', v: '99.99%' },
      { k: 'IaC Tools', v: 'Terraform, Pulumi, CDK' },
      { k: 'Cost Reduction Avg', v: '30–60% vs unoptimised' },
    ],
    capabilities: [
      { icon: '☁️', title: 'Cloud Migration', desc: 'Lift-and-shift, re-platform, and re-architect migrations with zero downtime strategies.' },
      { icon: '📦', title: 'Containerisation & Kubernetes', desc: 'Docker, EKS, GKE, and AKS deployments with Helm charts and GitOps workflows.' },
      { icon: '🔁', title: 'CI/CD Pipeline Design', desc: 'GitHub Actions, GitLab CI, and ArgoCD pipelines that deploy with confidence.' },
      { icon: '🏗️', title: 'Infrastructure as Code', desc: 'Terraform and Pulumi modules that make your infrastructure version-controlled and reproducible.' },
      { icon: '📡', title: 'Observability Stack', desc: 'Prometheus, Grafana, Datadog, and structured logging for full system visibility.' },
      { icon: '💰', title: 'Cloud Cost Optimisation', desc: 'Right-sizing, reserved instance planning, and FinOps practices to control cloud spend.' },
    ],
    tech: ['AWS', 'GCP', 'Azure', 'Terraform', 'Pulumi', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'Datadog', 'New Relic', 'Ansible', 'Vault', 'Nginx', 'Istio'],
    process: [
      { title: 'Infrastructure Audit', desc: 'Assess current setup, identify risks, costs, and improvement opportunities.' },
      { title: 'Architecture Design', desc: 'Design target state with disaster recovery, scaling, and cost in mind.' },
      { title: 'Build & Migrate', desc: 'Incremental migration with blue-green deployments and rollback capability.' },
      { title: 'Handoff & Runbooks', desc: 'Full documentation, incident playbooks, and training for your ops team.' },
    ],
  },
};

// ── Page exports ──────────────────────────────────────────────
export function SoftwareEngineeringPage() { return <ServicePage service={SERVICES_DATA.software} />; }
export function DataEngineeringPage()      { return <ServicePage service={SERVICES_DATA.data} />; }
export function BusinessIntelligencePage() { return <ServicePage service={SERVICES_DATA.bi} />; }
export function AIMLPage()                 { return <ServicePage service={SERVICES_DATA.ai} />; }
export function APIIntegrationsPage()      { return <ServicePage service={SERVICES_DATA.api} />; }
export function CloudDevOpsPage()          { return <ServicePage service={SERVICES_DATA.cloud} />; }
