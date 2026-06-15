import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  ShoppingBag,
  Share2,
  TrendingUp,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Check,
  Star,
  Menu,
  X,
} from "lucide-react";
import { SiteBackground } from "@/components/SiteBackground";
import { useReveal } from "@/hooks/use-reveal";
import logoAsset from "@/assets/thehomepageco-logo.png.asset.json";
import heroOrb from "@/assets/hero-orb.jpg";
import caseEcom from "@/assets/case-ecom.jpg";
import caseSaas from "@/assets/case-saas.jpg";
import caseBrand from "@/assets/case-brand.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import workNorthfieldAsset from "@/assets/work-northfield.jpg.asset.json";
import workBluepeakAsset from "@/assets/work-bluepeak.jpg.asset.json";
import workMaisonAsset from "@/assets/work-maison.jpg.asset.json";
import workHeritageAsset from "@/assets/work-heritage.jpg.asset.json";
import workMarlowAsset from "@/assets/work-marlow.jpg.asset.json";
const workNorthfield = workNorthfieldAsset.url;
const workBluepeak = workBluepeakAsset.url;
const workMaison = workMaisonAsset.url;
const workHeritage = workHeritageAsset.url;
const workMarlow = workMarlowAsset.url;

const SITE_URL = "https://cosmic-fusion-agency.lovable.app";
const BRAND = "thehomepageco";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "thehomepageco — Websites, Software & Marketing that Drive Growth" },
      {
        name: "description",
        content:
          "thehomepageco is a digital agency building websites, ecommerce stores, custom software, branding and performance marketing for growing businesses worldwide.",
      },
      { name: "keywords", content: "digital agency, web development, ecommerce, branding, social media marketing, performance marketing, software development" },
      { property: "og:title", content: "thehomepageco — Digital Agency" },
      { property: "og:description", content: "We help brands grow with websites, software, ecommerce, branding and marketing that actually convert." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SITE_URL + logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "thehomepageco — Digital Agency" },
      { name: "twitter:description", content: "Websites, software and marketing that drive measurable growth." },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: BRAND,
          url: SITE_URL,
          logo: SITE_URL + logoAsset.url,
          description:
            "Digital agency offering web development, ecommerce, software, branding, social media management and performance marketing.",
          areaServed: "Worldwide",
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            email: "hello@thehomepageco.com",
            contactType: "customer support",
          },
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <SiteBackground />
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ============== LOGO ============== */
function BrandLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="thehomepageco logo"
      width={64}
      height={64}
      className={className}
      style={{ filter: "drop-shadow(0 0 12px rgba(55,51,255,0.55))" }}
    />
  );
}

/* ============== HEADER ============== */
function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div
          className={`flex items-center justify-between gap-3 rounded-full border px-3 py-2 sm:px-5 sm:py-3 transition-all duration-500 ${
            scrolled
              ? "border-white/15 bg-black/70 backdrop-blur-2xl shadow-[0_8px_40px_rgba(55,51,255,0.15)]"
              : "border-white/10 bg-white/[0.03] backdrop-blur-xl"
          }`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-2 font-display font-semibold">
            <BrandLogo className="h-8 w-8 shrink-0" />
            <span className="truncate text-base sm:text-lg">thehomepageco</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden! md:inline-flex! py-2! px-4! text-sm whitespace-nowrap">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl p-2 animate-fade-in">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-2xl bg-gradient-to-r from-[#3733ff] to-[#5a55ff] px-4 py-3 text-center text-sm font-semibold"
            >
              Get a Free Quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3733ff] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5a55ff]"></span>
            </span>
            Now booking projects for 2026
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your website is your{" "}
            <span className="text-gradient">homepage to the world.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            We're <span className="text-white">thehomepageco</span> — a small,
            senior team building websites, ecommerce stores, custom software and
            marketing campaigns that actually move the numbers. No agency fluff,
            no juniors learning on your dime.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#contact" className="btn-primary justify-center sm:justify-start">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-ghost justify-center sm:justify-start">
              See Our Work <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <div className="flex -space-x-2">
              <img src={client1} alt="" loading="lazy" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-black object-cover" />
              <img src={client2} alt="" loading="lazy" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-black object-cover" />
              <img src={client3} alt="" loading="lazy" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-black object-cover" />
              <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-black bg-gradient-to-br from-[#3733ff] to-[#5a55ff] text-[10px] font-bold">
                50+
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9 average from 50+ founders</span>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md reveal lg:max-w-none">
      <div className="absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-[#3733ff]/30 blur-3xl animate-pulse-glow" />
      <img
        src={heroOrb}
        alt="Abstract glowing orb representing digital growth"
        width={1280}
        height={1280}
        className="relative h-full w-full rounded-3xl object-cover shadow-[0_30px_120px_-20px_rgba(55,51,255,0.55)]"
      />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

      {/* Logo overlay */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
        <BrandLogo className="h-24 w-24 sm:h-32 sm:w-32 opacity-90" />
      </div>

      {/* Floating cards */}
      <FloatingCard
        className="-left-3 top-6 sm:left-0 animate-float-slow"
        title="3.4×"
        sub="Avg. conversion lift"
        icon={<TrendingUp className="h-4 w-4" />}
      />
      <FloatingCard
        className="-right-3 bottom-10 sm:right-0 animate-float-slow [animation-delay:1.5s]"
        title="120+"
        sub="Projects shipped"
        icon={<Check className="h-4 w-4" />}
      />
    </div>
  );
}

function FloatingCard({
  className,
  title,
  sub,
  icon,
}: {
  className?: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={`glass-strong absolute rounded-2xl px-4 py-3 shadow-2xl ${className ?? ""}`}>
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#3733ff] to-[#5a55ff] shadow-[0_0_15px_rgba(55,51,255,0.6)]">
          {icon}
        </div>
        <div>
          <div className="font-display text-xl font-bold leading-tight sm:text-2xl">{title}</div>
          <div className="text-[11px] text-white/60 sm:text-xs">{sub}</div>
        </div>
      </div>
    </div>
  );
}

/* ============== MARQUEE ============== */
function LogoMarquee() {
  const brands = [
    "SHOPSAHOOR",
    "WEARMISH",
    "PADEL DECK",
    "QUBE CERAMICS",
    "INNOVATIVE PACKAGING",
    "SANOBER SHAKEEL",
    "RAMAY CONSTRUCTIONS",
    "SWEET SLICE",
    "PADEL PIT",
    "MANAAL BHESANIA",
    "COCOHONEY CANDLES CO.",
    "HOUSE OF LUMINA",
    "FREYABYMH",
    "MIFIS",
    "PAISLEY & PEACOCK",
  ];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-white/50">
          Trusted by 50+ growing brands
        </p>
      </div>
      <div className="group mt-10 space-y-6 overflow-hidden">
        <Row items={[...brands, ...brands]} reverse={false} />
        <Row items={[...brands.slice().reverse(), ...brands.slice().reverse()]} reverse={true} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32" style={{ background: "linear-gradient(90deg, #000, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32" style={{ background: "linear-gradient(-90deg, #000, transparent)" }} />
    </section>
  );
}

function Row({ items, reverse }: { items: string[]; reverse: boolean }) {
  return (
    <div className="flex">
      <div className={`flex shrink-0 gap-6 pr-6 sm:gap-10 sm:pr-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((name, i) => (
          <div
            key={i}
            className="flex h-14 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 font-display text-base font-semibold uppercase tracking-wide text-white/55 backdrop-blur-sm transition-colors hover:text-white sm:h-16 sm:px-7 sm:text-lg"
          >
            <span className="h-2 w-2 rounded-full bg-[#5a55ff]/70" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============== ABOUT ============== */
function About() {
  const stats = [
    { n: "120+", l: "Projects shipped" },
    { n: "50+", l: "Happy clients" },
    { n: "3+ yrs", l: "In business" },
    { n: "95%", l: "Client retention" },
  ];
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="reveal">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5a55ff]">Who we are</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            A small studio. <span className="text-gradient">Serious about your numbers.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            thehomepageco started in 2023 as a two-person side project building
            websites for friends. Seven years later we're a team of nine
            designers, developers and marketers — still small enough to care,
            big enough to handle a full rebrand, ecommerce migration or
            six-figure ad budget without breaking a sweat.
          </p>
          <div className="mt-8 space-y-3 text-white/80">
            {[
              "Senior team only — your project never gets handed to an intern",
              "Fixed scopes, fixed timelines, weekly Loom updates",
              "Most clients stay with us 2+ years",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#3733ff]/20">
                  <Check className="h-3 w-3 text-[#5a55ff]" />
                </div>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="glass-strong group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 sm:p-7"
              style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#3733ff]/30 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                {s.n === "3+ yrs" ? "3 yrs" : s.n}
              </div>
              <div className="mt-2 text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== SERVICES ============== */
function Services() {
  const services = [
    { icon: Code2, title: "Website Development", desc: "Marketing sites and landing pages built in Next.js or Webflow — fast, accessible, easy to update.", size: "lg" },
    { icon: ShoppingBag, title: "Ecommerce", desc: "Shopify and headless stores with custom themes, subscriptions and conversion-tuned checkouts.", size: "md" },
    { icon: Cpu, title: "Software Development", desc: "Dashboards, internal tools and full SaaS products. We use React, Node, Postgres.", size: "md" },
    { icon: Sparkles, title: "Branding", desc: "Naming, visual identity, guidelines and rollout assets that hold up across every channel.", size: "md" },
    { icon: Share2, title: "Social Media", desc: "Strategy, content calendars and community management across Instagram, TikTok and LinkedIn.", size: "md" },
    { icon: TrendingUp, title: "Performance Marketing", desc: "Paid acquisition on Meta, Google and TikTok with proper tracking and weekly reporting.", size: "lg" },
  ];

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5a55ff]">What we do</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Six things, <span className="text-gradient">done properly.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6">
          {services.map((s, i) => {
            const span = s.size === "lg" ? "md:col-span-3" : "md:col-span-2";
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                onMouseMove={onMove}
                className={`service-card glass group relative rounded-3xl p-6 sm:p-8 ${span} reveal`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent transition-all group-hover:border-[#3733ff]/50 group-hover:shadow-[0_0_30px_rgba(55,51,255,0.4)] sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 text-[#a8a5ff] sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============== PORTFOLIO ============== */
function Portfolio() {
  const projects = [
    { title: "Padel Pit.", cat: "Booking System", desc: "Seamless booking experience designed for efficiency, convenience, and business growth", img: workNorthfield, span: true },
    { title: "Plan5ive", cat: "Website", desc: "Modern architectural presence crafted to showcase expertise and inspire confidence.", img: workBluepeak, span: false },
    { title: "Paisley & Peacock", cat: "Brand identity", desc: "Strategic brand identity designed for recognition, consistency, and impact.\n", img: workMaison, span: false },
    { title: "Ramay Constructions", cat: "Website + SEO", desc: "High-performing website and SEO strategy built to drive visibility and leads.\n", img: workHeritage, span: false },
    { title: "Little Dreams Pakistan", cat: "Performance marketing", desc: "Results-focused marketing campaigns optimized for growth and conversions.", img: caseSaas, span: false },
    { title: "The Innovative Packaging", cat: "Brand + Website", desc: "Unified branding and website experience crafted to elevate industry presence.", img: workMarlow, span: true },
  ];
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5a55ff]">Selected work</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              A few <span className="text-gradient">recent projects.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost">
            Start your project <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title + i}
              className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-[#3733ff]/40 hover:-translate-y-1 ${
                p.span ? "md:col-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs backdrop-blur-md">
                  {p.cat}
                </div>
              </div>
              <div className="flex items-end justify-between gap-6 p-6 sm:p-7">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                </div>
                <a
                  href="#contact"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 transition-all hover:bg-[#3733ff] hover:border-[#3733ff] hover:shadow-[0_0_25px_rgba(55,51,255,0.6)] sm:h-12 sm:w-12"
                  aria-label={`Enquire about ${p.title}`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PROCESS ============== */
function Process() {
  const steps = [
    { n: "01", t: "Intro call", d: "30 minutes. We listen, you talk. No deck, no slides." },
    { n: "02", t: "Proposal", d: "A clear written scope, fixed price and timeline within 3 days." },
    { n: "03", t: "Design", d: "Two rounds of design , walked through over Loom." },
    { n: "04", t: "Build", d: "We ship in three-week sprints with a staging link from day one." },
    { n: "05", t: "Launch & grow", d: "We launch, measure, and keep improving month after month." },
  ];
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5a55ff]">How we work</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            From kickoff to launch <span className="text-gradient">in 3–4 weeks.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#3733ff]/60 to-transparent md:block" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black backdrop-blur-xl">
                  <div className="absolute inset-0 rounded-full bg-[#3733ff]/40 blur-xl" />
                  <span className="relative font-display text-sm font-bold text-[#a8a5ff]">{s.n}</span>
                </div>
                <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== TESTIMONIALS ============== */
function Testimonials() {
  const items = [
    {
      quote:
        "We rebuilt our entire store with thehomepageco. Conversion went from 1.2% to 3.8% and the team actually answers their phone — wild concept in 2026.",
      name: "Yasmin Ali",
      role: "Founder, Paisley & Peacock",
      img: client1,
    },
    {
      quote:
        "I've worked with three agencies before. These are the first who actually understood the business side, not just the design. Worth every pound.",
      name: "Raahim Farooq",
      role: "CEO, Padel Pit",
      img: client2,
    },
    {
      quote:
        "Six weeks from first call to a live site I'm proud to send investors. They run our paid ads now too — best ROI line item in our P&L.",
      name: "Adeel Ramay",
      role: "Co-founder, Ramay Constructions",
      img: client3,
    },
  ];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5a55ff]">Kind words</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            What our clients <span className="text-gradient">actually say.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass relative flex flex-col rounded-3xl p-6 sm:p-7"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-white/80 sm:text-base">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <img src={t.img} alt={t.name} loading="lazy" width={48} height={48} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CONTACT ============== */
function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name) next.name = "Please share your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email";
    if (message.length < 10) next.message = "Tell us a bit more (10+ chars)";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5a55ff]">Contact</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Tell us about <span className="text-gradient">your project.</span>
          </h2>
        </div>

        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-12">
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#3733ff]/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#5a55ff]/30 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
              <p className="mt-3 max-w-sm text-white/60">
                We reply within one business day. No sales script — usually
                straight from one of the founders.
              </p>
              <div className="mt-8 space-y-5">
                <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@thehomepageco.com" />
                <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+92 339 393 8227" />
                <InfoRow icon={<MapPin className="h-4 w-4" />} label="LOCATION" value="Lahore, Pakistan" />
              </div>
            </div>

            <form onSubmit={submit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field name="name" label="Name" placeholder="Jane Doe" error={errors.name} />
                <Field name="email" label="Email" placeholder="jane@company.com" error={errors.email} type="email" />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field name="company" label="Company" placeholder="Acme Inc." />
                <Field name="service" label="What do you need?" placeholder="Website, branding, ads..." />
              </div>
              <Field name="message" label="Tell us a bit more" placeholder="Goals, timing, budget range..." textarea error={errors.message} />
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button type="submit" className="btn-primary">
                  Send Enquiry <ArrowRight className="h-4 w-4" />
                </button>
                {sent && (
                  <div className="flex items-center gap-2 text-sm text-emerald-400">
                    <Check className="h-4 w-4" /> Thanks — we'll be in touch shortly.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5 text-[#a8a5ff]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-white/40">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  textarea,
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white placeholder:text-white/30 backdrop-blur-xl outline-none transition-all focus:border-[#3733ff] focus:bg-black/50 focus:shadow-[0_0_0_4px_rgba(55,51,255,0.15)]";
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-wider text-white/50">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={cls} maxLength={1000} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} maxLength={255} />
      )}
      {error && <span className="mt-1 block text-xs text-rose-400">{error}</span>}
    </label>
  );
}

/* ============== FOOTER ============== */
function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-10 sm:gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <BrandLogo className="h-8 w-8" />
              thehomepageco
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              A Pakistan-based digital studio building websites, software
              and marketing for brands that want to grow.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                {
                  Icon: function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
                    return (
                      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    );
                  },
                  label: "WhatsApp",
                },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#3733ff]/50 hover:text-[#a8a5ff] hover:shadow-[0_0_20px_rgba(55,51,255,0.4)]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol
            title="COMPANY"
            items={[
              ["About", "#about"],
              ["Work", "#portfolio"],
              ["Process", "#process"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              ["Website Development", "#services"],
              ["Ecommerce", "#services"],
              ["Software", "#services"],
              ["Branding", "#services"],
              ["Performance Marketing", "#services"],
            ]}
          />
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <div>© 2026 thehomepageco. Made in Pakistan.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="mb-4 text-xs uppercase tracking-wider text-white/50">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {items.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-white/70 transition-colors hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
