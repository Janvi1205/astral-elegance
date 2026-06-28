import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, MessageCircle, Star } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import astrologerImg from "@/assets/astrologer-hero.webp";
import astrologerCenteredImg from "@/assets/astrologer-hero-mobile.webp";

const WHATSAPP = "https://wa.me/919717721217?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.7 })
        .from(".hero-title-line", { y: 50, opacity: 0, duration: 0.9, stagger: 0.15 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-trust", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.4, ease: "power2.out" }, 0);

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
      className="relative overflow-hidden bg-navy-deep lg:min-h-screen"
    >
      {/* ===== Desktop / tablet (lg+) full-bleed background image ===== */}
      <div className="hidden lg:block absolute inset-0">
        <div className="hero-image absolute inset-0">
          <img
            src={astrologerImg}
            alt="Astrologer Pradeep Malhotra"
            className="w-full h-full object-cover object-right"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-navy-deep/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Stars + glow (shared) */}
      <div className="absolute inset-0 star-bg opacity-80 animate-twinkle pointer-events-none" />
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
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />

      {/* ===== Mobile / tablet stacked layout (below lg) ===== */}
      <div className="lg:hidden relative z-10 pt-20 pb-10">
        {/* Full-width image with blended edges */}
        <div className="hero-image relative mx-auto w-full aspect-[4/5] overflow-hidden">
          <img
            src={astrologerCenteredImg}
            alt="Astrologer Pradeep Malhotra"
            className="w-full h-full object-cover object-[center_15%]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={800}
            height={1000}
          />
          {/* Intense Edge Blending Gradients - All 4 sides */}
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-navy-deep via-navy-deep/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-navy-deep to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-navy-deep to-transparent pointer-events-none" />
          

        </div>

        <div className="container mt-4 text-center flex flex-col items-center">

          <h1 className="mt-6 font-serif leading-[1.05] text-ivory">
            <span className="hero-title-line block text-4xl sm:text-5xl font-medium">Align Your Life</span>
            <span className="hero-title-line block text-4xl sm:text-5xl text-gradient-gold mt-2 font-medium">
              With Cosmic Forces
            </span>
          </h1>

          <p className="hero-sub mt-5 text-base text-ivory/75 max-w-md mx-auto leading-relaxed">
            Personalized astrology consultations by Pradeep Malhotra, crafted to reveal your true path and unlock powerful opportunities in your life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="hero-cta hero-cta-mobile inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Book Now
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hero-cta hero-cta-mobile inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory hover:bg-gold/10 hover:border-gold transition-all backdrop-blur-md bg-navy-deep/30"
            >
              <WhatsAppIcon className="w-5 h-5 text-gold" />
              WhatsApp
            </a>
          </div>

          <div className="hero-trust mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-ivory/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm"><span className="text-gold font-semibold">5/5</span> Rated</span>
            </div>
            <div className="h-4 w-px bg-gold/30 hidden sm:block" />
            <div className="text-sm">
              <span className="text-gold font-semibold">1,000+</span> Lives Transformed
            </div>
          </div>
        </div>
      </div>

      {/* ===== Desktop content (lg+ only) ===== */}
      <div className="hidden lg:flex container relative z-20 pt-32 pb-20 min-h-screen items-center">
        <div className="max-w-2xl relative z-30">


          <h1 className="mt-7 font-serif leading-[1.05] text-ivory">
            <span className="hero-title-line block text-6xl lg:text-7xl font-medium">Align Your Life</span>
            <span className="hero-title-line block text-6xl lg:text-7xl text-gradient-gold mt-2 font-medium">
              With Cosmic Forces
            </span>
          </h1>

          <p className="hero-sub mt-7 text-lg text-ivory/75 max-w-xl leading-relaxed">
            Personalized astrology consultations by Pradeep Malhotra, crafted to reveal your true path and unlock powerful opportunities in your life.
          </p>

          <div className="hero-cta-container mt-10 flex flex-wrap gap-4 relative z-50">
            <a
              href="#contact"
              className="hero-cta hero-cta-desktop group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all relative z-50 opacity-100"
            >
              <Sparkles className="w-4 h-4" />
              Book My Consultation
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hero-cta hero-cta-desktop inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory hover:bg-gold/10 hover:border-gold transition-all backdrop-blur-md bg-navy-deep/30 relative z-50 opacity-100"
            >
              <WhatsAppIcon className="w-5 h-5 text-gold" />
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
              <span className="text-sm"><span className="text-gold font-semibold">5/5</span> Rated</span>
            </div>
            <div className="h-4 w-px bg-gold/30 hidden sm:block" />
            <div className="text-sm">
              <span className="text-gold font-semibold">1,000+</span> Lives Transformed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
