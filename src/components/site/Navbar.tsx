import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-xl border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-navy-deep" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold text-gradient-gold">
              Pradeep Malhotra
            </div>
            <div className="text-[10px] tracking-[0.25em] text-gold-soft uppercase">
              Vedic Astrologer
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ivory/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-navy-deep font-medium text-sm shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all"
        >
          Book Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ivory p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-gold/20 mt-3 animate-fade-in">
          <ul className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="text-ivory/80 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-navy-deep font-medium text-sm shadow-gold"
            >
              Book Now
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
