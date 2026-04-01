import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart2,
  BookOpen,
  Check,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Menu,
  MessageCircle,
  PiggyBank,
  Shield,
  Star,
  Target,
  TrendingDown,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list
        // biome-ignore lint/suspicious/noArrayIndexKey: static list
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Your Goals", href: "#your-goals" },
    { label: "Customers", href: "#customers" },
    { label: "Blog", href: "#newsletter" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div className="font-poppins bg-brand-offwhite">
      {/* ─────────────────────────────────────────
          1. STICKY HEADER
      ───────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2"
              data-ocid="header.link"
            >
              <span className="text-2xl">🌿</span>
              <span
                className="text-xl font-bold"
                style={{ color: scrolled ? "oklch(0.44 0.09 185)" : "white" }}
              >
                Plentifor
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors relative group"
                  style={{
                    color: scrolled
                      ? "oklch(0.17 0.04 200)"
                      : "rgba(255,255,255,0.85)",
                  }}
                  data-ocid="header.link"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-all duration-200 hover:scale-105 shadow-md"
                data-ocid="header.primary_button"
              >
                Create my budget plan
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2"
              style={{
                color: scrolled ? "oklch(0.17 0.04 200)" : "white",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-ocid="header.toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-brand-mint/40 px-4 py-4 shadow-lg">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-brand-teal-dark hover:text-brand-teal py-2.5 border-b border-brand-mint-light"
                  onClick={() => setMobileMenuOpen(false)}
                  data-ocid="header.link"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-3 w-full px-5 py-3 rounded-full text-sm font-semibold text-white bg-brand-orange text-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "#contact";
                }}
                data-ocid="header.primary_button"
              >
                Create my budget plan
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────
          2. HERO SECTION
      ───────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.17 0.04 200) 0%, oklch(0.38 0.08 195) 100%)",
        }}
      >
        {/* Blob decorations */}
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] opacity-15 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M250,60 C380,50 460,160 460,250 C460,360 360,450 250,450 C130,450 40,350 40,250 C40,130 120,70 250,60 Z"
              fill="oklch(0.88 0.08 168)"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 right-[-60px] w-72 h-72 opacity-10 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200,40 C310,40 380,130 380,200 C380,300 290,370 200,370 C90,370 20,280 20,200 C20,90 90,40 200,40 Z"
              fill="oklch(0.76 0.16 65)"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: "oklch(0.88 0.08 168 / 18%)",
                color: "oklch(0.88 0.08 168)",
                border: "1px solid oklch(0.88 0.08 168 / 30%)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-mint inline-block" />
              Personal Finance Planning
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6">
              Take control of your money, build the future{" "}
              <span className="text-brand-orange">you want</span>
            </h1>

            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              We make managing your money simple so you can focus on goals like
              a home, a family, or paying off debt. Start with a free chat and
              personalised budget strategy.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                style={{ background: "oklch(0.76 0.16 65)" }}
                data-ocid="hero.primary_button"
              >
                Create my budget plan
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
                data-ocid="hero.secondary_button"
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 overflow-hidden"
                    style={{
                      borderColor: "rgba(255,255,255,0.3)",
                      background: `oklch(${0.6 + i * 0.05} 0.07 ${165 + i * 8})`,
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/55 text-sm">
                  Trusted by 10,000+ Australians
                </p>
              </div>
            </div>
          </div>

          {/* Right: lifestyle image in blob */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Blob glow bg */}
              <div className="absolute inset-[-24px] pointer-events-none">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 520 520"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-35"
                >
                  <path
                    d="M260,60 C390,55 475,165 475,260 C475,375 375,465 260,465 C135,465 45,360 45,260 C45,145 125,65 260,60 Z"
                    fill="oklch(0.88 0.08 168)"
                  />
                </svg>
              </div>
              <img
                src="/assets/generated/hero-couple.dim_900x600.jpg"
                alt="Happy couple managing finances at home"
                className="relative rounded-3xl w-full object-cover shadow-2xl"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="oklch(0.97 0.01 185)"
            />
          </svg>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. VALUE PROPOSITION
      ───────────────────────────────────────── */}
      <section id="about" className="bg-brand-offwhite py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4">
              Start making your money count
            </h2>
            <p className="text-brand-grey max-w-2xl mx-auto text-lg leading-relaxed">
              We believe everyone deserves a clear financial future. Our tools
              and guidance help you take confident steps forward — no jargon, no
              stress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                title: "Reduce financial stress",
                desc: "Get clarity on your finances and stop worrying about money once and for all.",
                accent: "oklch(0.44 0.09 185)",
                bg: "oklch(0.44 0.09 185 / 8%)",
              },
              {
                icon: Lightbulb,
                title: "Plan smarter",
                desc: "Data-driven budgets tailored specifically to your lifestyle and goals.",
                accent: "oklch(0.76 0.16 65)",
                bg: "oklch(0.76 0.16 65 / 10%)",
              },
              {
                icon: Target,
                title: "Achieve goals faster",
                desc: "Stay on track with milestones and progress tracking built right in.",
                accent: "oklch(0.44 0.09 185)",
                bg: "oklch(0.44 0.09 185 / 8%)",
              },
              {
                icon: PiggyBank,
                title: "Build lasting wealth",
                desc: "Develop healthy financial habits that compound and grow over time.",
                accent: "oklch(0.76 0.16 65)",
                bg: "oklch(0.76 0.16 65 / 10%)",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white border border-brand-mint/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                data-ocid={`value.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.bg }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: item.accent }}
                  />
                </div>
                <h3 className="font-semibold text-brand-teal-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-grey leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: offwhite → mint-light */}
      <div className="w-full overflow-hidden leading-none bg-brand-offwhite">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.95 0.05 165)"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          4. HOW IT WORKS
      ───────────────────────────────────────── */}
      <section id="your-goals" className="bg-brand-mint-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4">
              Here's how we can help you
            </h2>
            <p className="text-brand-grey max-w-xl mx-auto">
              Four simple steps to transform your financial future — starting
              today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: ClipboardList,
                title: "Tell us about your finances",
                desc: "Share your income, expenses, and goals in a free 30-minute chat.",
              },
              {
                step: 2,
                icon: BarChart2,
                title: "Get a custom plan",
                desc: "We build a personalised budget strategy designed around your life.",
              },
              {
                step: 3,
                icon: LineChart,
                title: "Track your progress",
                desc: "Monitor spending and savings against your targets every week.",
              },
              {
                step: 4,
                icon: Target,
                title: "Achieve your goals",
                desc: "Celebrate milestones as you reach each financial dream.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center"
                data-ocid={`howit.item.${item.step}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-5"
                  style={{ background: "oklch(0.76 0.16 65)" }}
                >
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm">
                  <item.icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-brand-teal-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-grey leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: mint-light → offwhite */}
      <div className="w-full overflow-hidden leading-none bg-brand-mint-light">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.97 0.01 185)"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          5. SERVICES
      ───────────────────────────────────────── */}
      <section
        id="services"
        className="bg-brand-offwhite py-24 md:py-32 relative overflow-hidden"
      >
        {/* Blob accent */}
        <div className="absolute right-[-180px] top-[-100px] w-[450px] h-[450px] opacity-25 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M250,50 C380,50 460,160 460,250 C460,360 360,450 250,450 C130,450 40,340 40,250 C40,130 120,50 250,50 Z"
              fill="oklch(0.88 0.08 168)"
            />
          </svg>
        </div>
        <div className="absolute left-[-120px] bottom-[-80px] w-80 h-80 opacity-15 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200,50 C310,50 370,150 370,200 C370,290 290,360 200,360 C100,360 30,270 30,200 C30,100 90,50 200,50 Z"
              fill="oklch(0.76 0.16 65)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4">
              Our Services
            </h2>
            <p className="text-brand-grey max-w-2xl mx-auto">
              Everything you need to take control of your financial life, all in
              one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ClipboardList,
                title: "Budget Planning",
                desc: "Comprehensive budgets tailored to your income, lifestyle, and goals. No guesswork.",
              },
              {
                icon: PiggyBank,
                title: "Saving Strategies",
                desc: "Smart saving plans that fit your life while helping you build a solid financial buffer.",
              },
              {
                icon: TrendingDown,
                title: "Debt Management",
                desc: "Clear, actionable debt repayment strategies that reduce stress and save money.",
              },
              {
                icon: MessageCircle,
                title: "Financial Coaching",
                desc: "Expert 1-on-1 coaching sessions to keep you motivated and on track.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 border border-gray-100"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-mint-light flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-brand-teal-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-grey mb-5 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-brand-teal flex items-center gap-1 hover:gap-2.5 transition-all duration-200"
                  data-ocid="services.link"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: offwhite → mint-light */}
      <div className="w-full overflow-hidden leading-none bg-brand-offwhite">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,60 C360,20 1080,80 1440,30 L1440,80 L0,80 Z"
            fill="oklch(0.95 0.05 165)"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          6. WHY CHOOSE US
      ───────────────────────────────────────── */}
      <section id="customers" className="bg-brand-mint-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-brand-teal mb-4">
              Why Plentifor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-6">
              Why we do what we do
            </h2>
            <p className="text-brand-grey mb-8 leading-relaxed text-lg">
              We started Plentifor because too many Australians are stressed
              about money — not because they're bad with it, but because they've
              never had the right tools or guidance.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Feel in control again",
                "Achieve what matters to you",
                "Plan for the future you're building",
                "Support every step of the way",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-brand-teal" />
                  <span className="text-brand-teal-dark font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 shadow-lg"
              style={{ background: "oklch(0.76 0.16 65)" }}
              data-ocid="why.primary_button"
            >
              Start my free budget chat
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Blob background */}
              <div className="absolute inset-[-28px] pointer-events-none">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-35"
                >
                  <path
                    d="M250,60 C390,50 470,170 470,260 C470,375 365,460 250,460 C120,460 35,355 35,260 C35,140 110,70 250,60 Z"
                    fill="oklch(0.44 0.09 185)"
                  />
                </svg>
              </div>
              <img
                src="/assets/generated/lifestyle-man-laptop.dim_800x500.jpg"
                alt="Man confidently managing finances"
                className="relative rounded-3xl w-full object-cover shadow-2xl"
                style={{ aspectRatio: "8/5" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave: mint-light → white */}
      <div className="w-full overflow-hidden leading-none bg-brand-mint-light">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,30 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          7. FEATURES HIGHLIGHT
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4">
              Features built for real life
            </h2>
            <p className="text-brand-grey max-w-xl mx-auto">
              Powerful tools that actually make sense — no complexity, no
              overwhelm.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1: Smart Tracking */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-mint-light text-brand-teal mb-4">
                  Smart Tracking
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-teal-dark mb-4">
                  Know exactly where your money goes
                </h3>
                <p className="text-brand-grey leading-relaxed mb-6">
                  No more wondering at the end of the month. Our smart tracking
                  gives you a crystal-clear picture of every dollar so you can
                  make confident decisions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automatic spending categorisation",
                    "Weekly spending summaries",
                    "Custom budget alerts & reminders",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-brand-grey"
                    >
                      <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/lifestyle-hammock.dim_800x500.jpg"
                  alt="Relaxed person enjoying financial freedom"
                  className="w-full object-cover"
                  style={{ aspectRatio: "8/5" }}
                />
              </div>
            </div>

            {/* Feature 2: Goal-based Planning (mock UI) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mock dashboard card */}
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-3xl p-6 shadow-xl border border-brand-mint/30"
                  style={{ background: "oklch(0.97 0.01 185)" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-brand-teal-dark text-sm">
                      My Financial Goals
                    </h4>
                    <span className="text-xs px-3 py-1 rounded-full bg-brand-mint-light text-brand-teal font-medium">
                      2026
                    </span>
                  </div>
                  {[
                    {
                      label: "House Deposit",
                      target: "$80,000",
                      progress: 68,
                      color: "oklch(0.44 0.09 185)",
                    },
                    {
                      label: "Emergency Fund",
                      target: "$10,000",
                      progress: 90,
                      color: "oklch(0.76 0.16 65)",
                    },
                    {
                      label: "Holiday Fund",
                      target: "$5,000",
                      progress: 42,
                      color: "oklch(0.55 0.10 185)",
                    },
                  ].map((goal) => (
                    <div key={goal.label} className="mb-5">
                      <div className="flex justify-between text-xs text-brand-grey mb-2">
                        <span className="font-medium text-brand-teal-dark">
                          {goal.label}
                        </span>
                        <span>{goal.target}</span>
                      </div>
                      <div className="h-2.5 bg-white rounded-full overflow-hidden shadow-inner">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${goal.progress}%`,
                            background: goal.color,
                          }}
                        />
                      </div>
                      <div
                        className="text-right text-xs mt-1 font-medium"
                        style={{ color: goal.color }}
                      >
                        {goal.progress}% complete
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-brand-mint/30 grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                      <div className="text-lg font-bold text-brand-teal">
                        $2,840
                      </div>
                      <div className="text-xs text-brand-grey">
                        Saved this month
                      </div>
                    </div>
                    <div className="bg-brand-mint-light rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-brand-teal-dark">
                        On track
                      </div>
                      <div className="text-xs text-brand-grey">All 3 goals</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-mint-light text-brand-teal mb-4">
                  Goal Planning
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-teal-dark mb-4">
                  Set goals, build a path to get there
                </h3>
                <p className="text-brand-grey leading-relaxed mb-6">
                  Whether it's a house, a holiday, or freedom from debt — we
                  help you turn big dreams into clear, achievable steps with a
                  plan that actually works.
                </p>
                <ul className="space-y-3">
                  {[
                    "Visual goal progress tracking",
                    "Personalised savings targets",
                    "Milestone celebrations along the way",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-brand-grey"
                    >
                      <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Real-time insights (mock UI) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-mint-light text-brand-teal mb-4">
                  Real-time Insights
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-teal-dark mb-4">
                  See your finances clearly at a glance
                </h3>
                <p className="text-brand-grey leading-relaxed mb-6">
                  Your personalised dashboard gives you instant clarity on
                  spending, saving, and progress — all updated in real time, all
                  in one place.
                </p>
                <ul className="space-y-3">
                  {[
                    "Live spending overview",
                    "Income vs expenses visualisations",
                    "Smart financial health score",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-brand-grey"
                    >
                      <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Mock monthly overview */}
              <div
                className="rounded-3xl p-6 shadow-xl border border-brand-mint/30"
                style={{ background: "oklch(0.97 0.01 185)" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <h4 className="font-semibold text-brand-teal-dark text-sm">
                    Monthly Overview
                  </h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-mint-light text-brand-teal font-medium">
                    March 2026
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    {
                      label: "Income",
                      val: "$6,200",
                      col: "oklch(0.44 0.09 185)",
                    },
                    {
                      label: "Spent",
                      val: "$3,360",
                      col: "oklch(0.48 0.02 210)",
                    },
                    {
                      label: "Saved",
                      val: "$2,840",
                      col: "oklch(0.76 0.16 65)",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl p-3 text-center shadow-sm"
                    >
                      <div
                        className="text-base font-bold"
                        style={{ color: stat.col }}
                      >
                        {stat.val}
                      </div>
                      <div className="text-xs text-brand-grey mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { cat: "Housing", pct: 72, amt: "$1,540" },
                    { cat: "Food & dining", pct: 45, amt: "$960" },
                    { cat: "Transport", pct: 28, amt: "$600" },
                    { cat: "Entertainment", pct: 18, amt: "$260" },
                  ].map((row) => (
                    <div key={row.cat} className="flex items-center gap-3">
                      <span className="text-xs text-brand-grey w-28 shrink-0">
                        {row.cat}
                      </span>
                      <div className="flex-1 h-2 bg-white rounded-full overflow-hidden shadow-inner">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${row.pct}%`,
                            background: "oklch(0.44 0.09 185)",
                          }}
                        />
                      </div>
                      <span className="text-xs text-brand-grey w-14 text-right font-medium">
                        {row.amt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          8. TESTIMONIALS
      ───────────────────────────────────────── */}
      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4">
              Real stories. Real people.
            </h2>
            <p className="text-brand-grey max-w-xl mx-auto">
              Hear from Australians who took control of their finances with
              Plentifor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                role: "Teacher, Melbourne",
                avatar: "/assets/generated/avatar-sarah.dim_100x100.jpg",
                quote:
                  "Plentifor helped me pay off $18k in debt and finally feel confident about money. I wish I'd found it sooner.",
              },
              {
                name: "James T.",
                role: "Tradie, Brisbane",
                avatar: "/assets/generated/avatar-james.dim_100x100.jpg",
                quote:
                  "I used to avoid looking at my bank account. Now I actually look forward to it. The weekly check-ins keep me on track.",
              },
              {
                name: "Emily R.",
                role: "Marketing Manager, Sydney",
                avatar: "/assets/generated/avatar-emily.dim_100x100.jpg",
                quote:
                  "Having a clear budget changed everything. I saved for my first home in 2 years. Couldn't have done it without Plentifor.",
              },
            ].map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <StarRating />
                <p className="text-brand-grey text-sm leading-relaxed mt-4 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-mint"
                  />
                  <div>
                    <p className="font-semibold text-brand-teal-dark text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand-grey">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          9. LIFESTYLE / EMOTIONAL SECTION
      ───────────────────────────────────────── */}
      <section className="relative h-96 md:h-[520px] overflow-hidden">
        <img
          src="/assets/generated/lifestyle-family-beach.dim_1400x700.jpg"
          alt="Happy family enjoying financial freedom at the beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.38 0.08 195 / 62%)" }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight">
            Real Stories, Real People.
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl">
            Join thousands of Australians who have transformed their
            relationship with money
          </p>
          <a
            href="#customers"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 shadow-xl inline-block"
            style={{ background: "oklch(0.76 0.16 65)" }}
            data-ocid="lifestyle.primary_button"
          >
            View our client stories
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          10. BUDGET PLANNER CTA
      ───────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 md:py-32"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.95 0.05 165) 0%, oklch(0.97 0.01 185) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-6">
              Start with a free personalised budget planner
            </h2>
            <p className="text-brand-grey mb-8 leading-relaxed text-lg">
              Fill in your details and we'll create a custom budget strategy
              designed around your life, goals, and income. 100% free, no
              strings attached.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold text-brand-teal-dark">
                    Secure &amp; Private
                  </p>
                  <p className="text-sm text-brand-grey">
                    Bank-level encryption protects your data
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold text-brand-teal-dark">
                    No Commitment
                  </p>
                  <p className="text-sm text-brand-grey">
                    Free consultation with no obligation to continue
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <HeartHandshake className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold text-brand-teal-dark">
                    Expert Guidance
                  </p>
                  <p className="text-sm text-brand-grey">
                    Real people helping you build a real plan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-mint/30">
            {formSubmitted ? (
              <div
                className="text-center py-8"
                data-ocid="planner.success_state"
              >
                <div className="w-16 h-16 rounded-full bg-brand-mint-light flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-brand-teal-dark mb-2">
                  You're all set!
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  We'll be in touch within 24 hours with your personalised
                  budget plan.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4"
                data-ocid="planner.modal"
              >
                <div>
                  <h3 className="text-xl font-bold text-brand-teal-dark mb-1">
                    Create my custom planner
                  </h3>
                  <p className="text-sm text-brand-grey mb-5">
                    Takes less than 2 minutes to get started.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="planner-name"
                    className="block text-sm font-medium text-brand-teal-dark mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="planner-name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-mint bg-brand-offwhite text-brand-teal-dark placeholder:text-brand-grey/50 focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm transition-shadow"
                    data-ocid="planner.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="planner-email"
                    className="block text-sm font-medium text-brand-teal-dark mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="planner-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-mint bg-brand-offwhite text-brand-teal-dark placeholder:text-brand-grey/50 focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm transition-shadow"
                    data-ocid="planner.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="planner-phone"
                    className="block text-sm font-medium text-brand-teal-dark mb-1.5"
                  >
                    Phone{" "}
                    <span className="text-brand-grey font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+61 4xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-brand-mint bg-brand-offwhite text-brand-teal-dark placeholder:text-brand-grey/50 focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm transition-shadow"
                    id="planner-phone"
                    data-ocid="planner.input"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.02] shadow-md"
                  style={{ background: "oklch(0.76 0.16 65)" }}
                  data-ocid="planner.submit_button"
                >
                  Create my custom planner →
                </button>
                <p className="text-xs text-center text-brand-grey">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Wave: to mint-light */}
      <div
        className="w-full overflow-hidden leading-none"
        style={{ background: "oklch(0.97 0.01 185)" }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.95 0.05 165)"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          11. FAQ
      ───────────────────────────────────────── */}
      <section id="faqs" className="bg-brand-mint-light py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-grey">
              Everything you need to know before getting started
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="faq.panel"
          >
            {[
              {
                q: "Is this service free?",
                a: "Yes, the initial budget planning consultation is completely free. We believe everyone deserves access to quality financial guidance, regardless of their starting point.",
              },
              {
                q: "How does Plentifor work?",
                a: "We start with a free chat to understand your finances, goals, and lifestyle. Then we create a personalised budget plan designed specifically for you, with ongoing support to keep you on track.",
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. We use bank-level encryption and never share your data with third parties. Your financial information is completely private and secure at all times.",
              },
              {
                q: "How long does it take to see results?",
                a: "Most clients notice positive changes in their financial confidence within the first 30 days. Tangible savings and debt reduction typically appear within 60–90 days.",
              },
              {
                q: "Do I need to be good with money?",
                a: "Not at all! We're here to help regardless of where you're starting from. Many of our best success stories come from people who thought they were 'hopeless' with money.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, there are absolutely no lock-in contracts. You're always in full control of your relationship with Plentifor.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="bg-white rounded-xl border-0 px-5 shadow-sm"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left font-semibold text-brand-teal-dark py-4 hover:no-underline text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-brand-grey text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Wave: mint-light → mint */}
      <div className="w-full overflow-hidden leading-none bg-brand-mint-light">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,30 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
            fill="oklch(0.88 0.08 168)"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          12. NEWSLETTER
      ───────────────────────────────────────── */}
      <section id="newsletter" className="bg-brand-mint py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-brand-teal text-sm font-semibold mb-3">
            <BookOpen className="w-4 h-4" /> Weekly tips
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-teal-dark mb-3">
            Get financial tips &amp; updates
          </h2>
          <p className="text-brand-grey mb-8">
            Join thousands of Australians taking control of their money.
          </p>

          {newsletterSubmitted ? (
            <div
              className="flex items-center justify-center gap-2 text-brand-teal font-semibold"
              data-ocid="newsletter.success_state"
            >
              <CheckCircle className="w-5 h-5" />
              <span>
                You're subscribed! Welcome to the Plentifor community.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              data-ocid="newsletter.modal"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-full border border-brand-mint/50 bg-white text-brand-teal-dark placeholder:text-brand-grey/60 focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm"
                data-ocid="newsletter.input"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-md"
                style={{ background: "oklch(0.44 0.09 185)" }}
                data-ocid="newsletter.submit_button"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          13. FOOTER
      ───────────────────────────────────────── */}
      <footer className="py-16" style={{ background: "oklch(0.17 0.04 200)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌿</span>
                <span className="text-xl font-bold text-white">Plentifor</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Making finance simple, accessible, and human for all
                Australians.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  {
                    label: "Facebook",
                    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  },
                  {
                    label: "Instagram",
                    path: null,
                  },
                  {
                    label: "Twitter",
                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={s.label}
                    data-ocid="footer.link"
                  >
                    {s.label === "Instagram" ? (
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={s.path ?? ""} />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2.5">
                {["About", "Blog", "Contact", "Help"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/55 hover:text-white text-sm transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Your Goals */}
            <div>
              <h4 className="font-semibold text-white mb-4">Your Goals</h4>
              <ul className="space-y-2.5">
                {[
                  "Saving for a home",
                  "Holiday savings",
                  "Paying off debt",
                  "Saving for a car",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#your-goals"
                      className="text-white/55 hover:text-white text-sm transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {["Privacy Policy", "Terms of Service"].map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-white/55 hover:text-white text-sm transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-4">Get Started</h4>
                <ul className="space-y-2.5">
                  {["Contact us", "Free consultation", "How it works"].map(
                    (link) => (
                      <li key={link}>
                        <a
                          href="#contact"
                          className="text-white/55 hover:text-white text-sm transition-colors"
                          data-ocid="footer.link"
                        >
                          {link}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: "oklch(1 0 0 / 10%)" }}
          >
            <p className="text-white/45 text-sm">
              &copy; {new Date().getFullYear()} Plentifor. Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                className="hover:text-white transition-colors underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-white/35 text-xs text-center">
              Plentifor is not a licensed financial advisor. All guidance is
              general in nature.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
