import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Layers, Scissors, Hammer, Sparkles, MapPin, Phone, Instagram, Menu, X } from "lucide-react";

import hospitalityMenu from "@/assets/hospitality-menu.jpg";
import logo from "@/assets/kiyata-logo.png";
import apron from "@/assets/apron.jpg";
import wallet from "@/assets/wallet.jpg";
import billFolder from "@/assets/bill-folder.jpg";
import menuFolder from "@/assets/menu-folder.jpg";
import duffel from "@/assets/duffel.jpg";

import walletBrand from "@/assets/wallet-brand.jpg";
import messengerBrown from "@/assets/messenger-brown.jpg";
import crocSatchel from "@/assets/croc-satchel.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const categories = [
  {
    key: "bags",
    label: "A",
    name: "Bags",
    body: "Full-grain totes, crossbodies and weekenders shaped for daily carry.",
    image: crocSatchel,
  },
  {
    key: "wallets",
    label: "B",
    name: "Wallets",
    body: "Bifolds, cardholders and long wallets softened by pocket wear.",
    image: walletBrand,
  },
  {
    key: "aprons",
    label: "C",
    name: "Aprons",
    body: "Workshop and front-of-house aprons built to survive the pass.",
    image: apron,
  },
  {
    key: "menu",
    label: "D",
    name: "Menu Folders",
    body: "Custom-debossed menu covers for restaurants and hotels.",
    image: menuFolder,
  },
  {
    key: "bill",
    label: "E",
    name: "Bill Folders",
    body: "Bill presenters that read as considered as the room they land in.",
    image: billFolder,
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <Nav onOpen={() => setMenuOpen(true)} />
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Marquee />
      <Collections />
      <Benchmark />
      <Trusted />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ onOpen }: { onOpen: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-3 text-cream text-xs tracking-[0.3em] uppercase hover:text-brass transition"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" strokeWidth={1.4} />
          <span className="hidden sm:inline">Menu</span>
        </button>

        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="KIYATA"
            className="h-11 md:h-14 w-auto"
          />
        </a>

        <div className="w-[220px] hidden md:block" />

      </div>
    </header>
  );
}

function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-espresso-deep/70 backdrop-blur-sm" onClick={onClose} />
      <aside
        className={`absolute left-0 top-0 h-full w-full sm:w-[440px] bg-espresso-deep text-cream border-r border-cream/10 flex flex-col transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-cream/10">
          <img src={logo} alt="KIYATA" className="h-10 w-auto" />
          <button onClick={onClose} aria-label="Close menu" className="text-cream/80 hover:text-cream">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-8 py-10 flex-1 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-brass mb-6">Navigate</p>
          <ul className="space-y-5 font-display text-3xl">
            {[
              { href: "#collections", label: "Products" },
              { href: "#gallery", label: "Gallery" },
              { href: "#contact", label: "Contact" },
            ].map((i) => (
              <li key={i.label}>
                <a href={i.href} onClick={onClose} className="group inline-flex items-center gap-4 hover:text-brass transition">
                  {i.label}
                  <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[10px] tracking-[0.35em] uppercase text-brass mt-12 mb-5">Studio</p>
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brass shrink-0" strokeWidth={1.4} />
              <span>Lideta Flintstone Homes<br />6th Floor · Room 628 · Addis Ababa</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brass shrink-0" strokeWidth={1.4} />
              <a href="tel:+251979949856" className="hover:text-cream">+251 979 949 856</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-brass shrink-0" strokeWidth={1.4} />
              <a href="https://www.instagram.com/kiyata_16?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-cream">@kiyata_16</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brass text-[10px] tracking-[0.2em] shrink-0 w-4 text-center font-semibold">TT</span>
              <a href="https://www.tiktok.com/@kiyata_16?_r=1&_t=ZS-988U6bBqhd6" target="_blank" rel="noopener noreferrer" className="hover:text-cream">@kiyata_16 · TikTok</a>
            </li>
          </ul>
        </nav>

        <div className="px-8 py-6 border-t border-cream/10 text-[10px] tracking-[0.3em] uppercase text-cream/50">
          Founded by Fenet Abera
        </div>
      </aside>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-espresso-deep">
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={messengerBrown}
            alt="KIYATA brown leather messenger bag"
            className="h-full w-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-deep/70 via-espresso-deep/30 to-espresso-deep/70" />
        </div>
        <div className="relative overflow-hidden hidden md:block">
          <img
            src={hospitalityMenu}
            alt="Custom menu folder in restaurant"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-espresso-deep/70 via-espresso-deep/30 to-espresso-deep/80" />
        </div>
      </div>




      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-40 md:pt-52 pb-24 min-h-screen flex flex-col justify-between">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-cream/70 text-xs tracking-[0.3em] uppercase mb-8">
            <span className="h-px w-10 bg-cream/40" />
            <span>Handcrafted in Addis Ababa</span>
          </div>
          <h1 className="font-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[112px] leading-[0.95] text-balance">
            Premium leather goods,
            <br />
            <em className="text-brass not-italic italic">hand-crafted</em>
            <br />
            with care &amp; precision.
          </h1>
          <p className="mt-8 max-w-md text-cream/70 text-base md:text-lg leading-relaxed">
            Right here in Addis Ababa. Bags, wallets, aprons and hospitality objects
            — made with exceptional quality and designed to last.
          </p>
        </div>

        <div className="mt-14" />

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 text-[10px] tracking-[0.4em] uppercase">
        Scroll
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const words = [
    "Hand-Crafted Leather Aprons\u00a0",
    "Made With Exceptional Quality\u00a0\u00a0",
    "Designed To Last\u00a0",
    "Premium Leather Goods\u00a0",
    "Care & Precision\u00a0",
    "Addis Ababa",
  ];
  const line = [...words, ...words];
  return (
    <div className="bg-espresso-deep border-t border-cream/10 overflow-hidden py-6">
      <div className="ticker flex gap-16 whitespace-nowrap text-cream/70">
        {line.map((w, i) => (
          <span key={i} className="font-display italic text-3xl md:text-5xl">
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- COLLECTIONS ---------- */
function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">§ 01 — The Collections</p>
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl text-balance">
              Five families. One workshop.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            Every KIYATA object begins at the same bench — whether it will live in a coat pocket
            or on a candlelit table.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.key} label={c.label} name={c.name} body={c.body} image={c.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TIKTOK_URL = "https://www.tiktok.com/@kiyata_16?_r=1&_t=ZS-988U6bBqhd6";
const INSTAGRAM_URL = "https://www.instagram.com/kiyata_16?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

function CategoryCard({ label, name, body, image }: { label: string; name: string; body: string; image: string }) {
  return (
    <a
      href={TIKTOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-sm bg-card text-foreground"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="relative h-[360px] overflow-hidden bg-bone">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8 md:p-10">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-cognac">{label} · Collection</p>
        <h3 className="font-display text-3xl md:text-4xl mb-4">{name}</h3>
        <p className="text-sm leading-relaxed max-w-md text-muted-foreground">{body}</p>
        <div className="mt-8 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase">
            Explore {name}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
          <span className="h-12 w-12 rounded-full overflow-hidden border border-border shrink-0">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </span>
        </div>
      </div>
    </a>
  );
}

/* ---------- BENCHMARK ---------- */
function Benchmark() {
  const items = [
    { icon: Layers, title: "100% Full-Grain", body: "Only the top layer of the hide — the strongest, most character-rich cut." },
    { icon: Hammer, title: "Heavy-Duty Hardware", body: "Solid brass and stainless fittings, riveted and stress-tested for daily loads." },
    { icon: Scissors, title: "Precision Edges", body: "Every edge is beveled, dyed, sealed and burnished by hand — four passes." },
    { icon: Sparkles, title: "Made to be Kept", body: "Repaired for life at our workshop. Nothing about a KIYATA is disposable." },
  ];
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-secondary/50 border-y border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">§ 02 — The Benchmark</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance">The four things we refuse to compromise.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border overflow-hidden rounded-sm">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-8 md:p-10">
              <it.icon className="h-8 w-8 text-cognac mb-8" strokeWidth={1.2} />
              <h3 className="font-display text-2xl mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUSTED / FOUNDER ---------- */
function Trusted() {
  return (
    <section className="relative bg-espresso-deep text-cream overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[700px]">
          <img
            src={duffel}
            alt="KIYATA leather duffel bag"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center">
          <p className="text-xs tracking-[0.3em] uppercase text-brass mb-6">§ 03 — From the founder</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance mb-10 italic">
            "Hand-crafted leather — made with exceptional quality and designed to last. Premium leather goods,&nbsp; right here in Addis Ababa."
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-brass/20 grid place-items-center font-display text-lg text-brass">F</div>
            <div>
              <p className="text-sm">Fenet Abera</p>
              <p className="text-xs text-cream/60 tracking-widest uppercase">Founder · KIYATA Leather Works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer id="contact" className="bg-espresso-deep text-cream border-t border-cream/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          <div>
            <img
              src={logo}
              alt="KIYATA"
              className="h-14 w-auto mb-5"
            />
            <p className="text-cream/60 text-xs leading-relaxed max-w-[220px]">
              Leather workshop. Founded by Fenet Abera.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brass mb-5">Visit</p>
            <div className="flex items-start gap-3 text-sm text-cream/80 leading-relaxed">
              <MapPin className="h-4 w-4 mt-0.5 text-brass shrink-0" strokeWidth={1.4} />
              <span>
                Lideta Flintstone Homes<br />
                6th Floor · Room 628<br />
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brass mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brass shrink-0" strokeWidth={1.4} />
                <a href="tel:+251979949856" className="hover:text-cream">+251 979 949 856</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-brass shrink-0" strokeWidth={1.4} />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cream">@kiyata_16&nbsp;</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brass text-[10px] tracking-[0.2em] shrink-0 w-4 text-center font-semibold">TT</span>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cream">@kiyata_16&nbsp;</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 flex flex-wrap justify-between gap-3 text-[10px] tracking-widest uppercase text-cream/50">
          <span>© 2026 KIYATA Leather Works</span>
          <span>Handmade · Addis Ababa</span>
        </div>
      </div>
    </footer>
  );
}
