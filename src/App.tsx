import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

// ── Landing page sections ──────────────────────────────────────────────
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import Services from './components/Services';
import Process from './components/Process';
import Industries from './components/Industries';
import WhyQS from './components/WhyQS';
import About from './components/About';
import CTA from './components/CTA';

// ── Shared layout ──────────────────────────────────────────────────────
import { Navbar, Footer } from './components/shared';

// ── Inner pages ───────────────────────────────────────────────────────
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import {
  SoftwareEngineeringPage,
  DataEngineeringPage,
  BusinessIntelligencePage,
  AIMLPage,
  APIIntegrationsPage,
  CloudDevOpsPage,
} from './pages/ServicePages';
import {
  ProcessPage,
  CaseStudiesPage,
  CareersPage,
  BlogPage,
} from './pages/CompanyPages';


// ── Scroll to top on route change ─────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── Home (landing) ─────────────────────────────────────────────────────
function HomePage() {
  return (
        <div className="bg-background text-foreground min-h-screen font-outfit">

    {/* <div className="bg-black text-white min-h-screen font-outfit"> */}
      <Navbar currentPath="/" />
      <Hero />
      <StatsTicker />
      <Services />
      <Process />
      <Industries />
      <WhyQS />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

// ── 404 ────────────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
     <div className="bg-background text-foreground min-h-screen font-outfit flex flex-col">
      <Navbar currentPath="" />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="font-mono text-[120px] font-black leading-none text-muted-darker select-none mb-4">404</div>
        <h1 className="font-outfit text-4xl font-black tracking-tight mb-3">
          Page <span className="text-[#89C441]">Not Found</span>
        </h1>
        <p className="font-outfit text-muted text-lg mb-8 max-w-md">
          The page you're looking for doesn't exist or has moved.
        </p>
        <a href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#89C441] text-black font-outfit font-bold text-sm rounded-xl no-underline hover:bg-[#9fd44d] transition-all">
          Back to Home
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <Footer />
    </div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Cursor />
        <ScrollToTop />
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Services */}
          <Route path="/services/software" element={<SoftwareEngineeringPage />} />
          <Route path="/services/data" element={<DataEngineeringPage />} />
          <Route path="/services/bi" element={<BusinessIntelligencePage />} />
          <Route path="/services/ai" element={<AIMLPage />} />
          <Route path="/services/api" element={<APIIntegrationsPage />} />
          <Route path="/services/cloud" element={<CloudDevOpsPage />} />

          {/* Company */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
