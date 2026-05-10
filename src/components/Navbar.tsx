import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/happy-town-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/activities", label: "Activities" },
  { to: "/birthday-parties", label: "Birthdays" },
  { to: "/school-trips", label: "School Trips" },
  { to: "/pricing", label: "Pricing" },
  { to: "/locations", label: "Locations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-18 flex items-center justify-between py-3">
        <Link to="/" className="flex items-center group" onClick={() => setOpen(false)} aria-label="Happy Town home">
          <img
            src={logo}
            alt="Happy Town"
            className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "!text-brand-black bg-brand-yellow" }}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-colors ${
                scrolled
                  ? "text-brand-purple hover:bg-brand-yellow hover:text-brand-black"
                  : "text-brand-yellow hover:bg-brand-yellow hover:text-brand-black"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/96522288242"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-purple text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-pop hover:scale-105 transition-transform"
          >
            <MessageCircle className="size-4" /> Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-full bg-brand-yellow text-brand-black"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background border-t shadow-lg"
          >
            <div className="px-5 py-4 grid gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-brand-purple bg-brand-yellow/40" }}
                  className="px-4 py-3 rounded-xl font-semibold hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/96522288242"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-purple text-primary-foreground px-5 py-3 font-bold"
              >
                <MessageCircle className="size-4" /> Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
