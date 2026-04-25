import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, MessageCircle, Star, Phone } from "lucide-react";
import astrologerImg from "@/assets/astrologer-hero.jpg";

const WHATSAPP = "https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.7 })
        .from(".hero-title-line", { y: 50, opacity: 0, duration: 0.9, stagger: 0.15 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.4")
        .from(".hero-trust", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.4, ease: "power2.out" }, 0)
        .from(".hero-floating-card", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, "-=0.6");

      gsap.to(".hero-particle", {
        y: -20,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.4, from: "random" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero-gradient"
    >
      {/* Background image - astrologer right side full bleed */}
      <div className="absolute inset-0">
        <div className="hero-image absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img
            src={astrologerImg}
            alt="Astrologer Pandit Pradeep Ji"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Left fade into navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 lg:via-navy-deep/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />
          {/* Mobile darken */}
          <div className="absolute inset-0 bg-navy-deep/60 lg:hidden" />
        </div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0 star-bg opacity-80 animate-twinkle pointer-events-none" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hero-particle absolute rounded-full bg-gold/60 blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px hsl(var(--gold))",
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 pt-36 pb-24 lg:pt-44 lg:pb-32 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">
              Trusted Vedic Astrologer
            </span>
          </div>

          <h1 className="mt-7 font-serif leading-[1.05] text-ivory">
            <span className="hero-title-line block text-5xl sm:text-6xl lg:text-7xl font-medium">Discover Your</span>
            <span className="hero-title-line block text-6xl sm:text-7xl lg:text-8xl italic text-gradient-gold mt-2 font-medium">
              Cosmic Path
            </span>
          </h1>

          <p className="hero-sub mt-7 text-base sm:text-lg text-ivory/75 max-w-xl leading-relaxed">
            Unlock the secrets of your birth chart with personalized Vedic astrology
            consultations. Guidance for love, career, health & spiritual growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="hero-cta group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Book My Consultation
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hero-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory hover:bg-gold/10 hover:border-gold transition-all backdrop-blur-md bg-navy-deep/30"
            >
              <MessageCircle className="w-5 h-5 text-gold" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-trust mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-ivory/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm"><span className="text-gold font-semibold">4.9/5</span> Rated</span>
            </div>
            <div className="h-4 w-px bg-gold/30 hidden sm:block" />
            <div className="text-sm">
              <span className="text-gold font-semibold">25,000+</span> Lives Transformed
            </div>
          </div>
        </div>

        {/* Floating decorative cards on right */}
        <div className="hidden xl:block absolute right-10 top-1/3 space-y-4">
          <div className="hero-floating-card px-5 py-3 rounded-2xl bg-navy-deep/60 backdrop-blur-md border border-gold/30 flex items-center gap-3 shadow-gold-lg">
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
              <Phone className="w-4 h-4 text-navy-deep" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold-soft">Available Now</div>
              <div className="text-sm text-ivory">+91 99999 99999</div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block absolute right-10 bottom-32">
          <div className="hero-floating-card px-5 py-4 rounded-2xl bg-navy-deep/60 backdrop-blur-md border border-gold/30 max-w-[220px] shadow-gold-lg">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xs text-ivory/85 italic leading-snug">
              "His guidance changed my life completely."
            </p>
            <div className="text-[10px] text-gold-soft mt-2 uppercase tracking-widest">— Verified Client</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
