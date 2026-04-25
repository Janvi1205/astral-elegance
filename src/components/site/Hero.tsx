import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, MessageCircle, Star } from "lucide-react";
import astrologerImg from "@/assets/astrologer-portrait.jpg";

const WHATSAPP = "https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.7 })
        .from(".hero-title > span", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.4")
        .from(".hero-trust", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-image-wrap", { scale: 0.9, opacity: 0, duration: 1.1, ease: "power2.out" }, "-=1.2")
        .from(".hero-orbit", { rotation: -90, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=0.8");

      gsap.to(".hero-image-inner", {
        y: -14,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero-gradient pt-32 pb-20 lg:pt-36"
    >
      {/* Stars layer */}
      <div className="absolute inset-0 star-bg opacity-70 animate-twinkle" />
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px]" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold-soft font-medium">
              Trusted Vedic Astrologer
            </span>
          </div>

          <h1 className="hero-title mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ivory">
            <span className="block">Welcome to</span>
            <span className="block text-gradient-gold italic">Divya Jyotish</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-ivory/85 mt-2">
              Wisdom of the Stars
            </span>
          </h1>

          <p className="hero-sub mt-6 text-base sm:text-lg text-ivory/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover clarity, harmony, and direction through ancient Vedic astrology.
            Personalized guidance for love, marriage, career, business, and life's deepest questions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="hero-cta group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all"
            >
              Book Now
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hero-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory hover:bg-gold/10 hover:border-gold transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-gold" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-trust mt-10 flex items-center gap-6 justify-center lg:justify-start text-ivory/70">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-sm">
              <span className="text-gold font-semibold">25,000+</span> Lives Transformed
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="hero-image-wrap relative mx-auto w-full max-w-md lg:max-w-lg">
          {/* Orbit ring */}
          <div className="hero-orbit absolute inset-0 -m-8 rounded-full border border-gold/20 animate-spin-slow" />
          <div className="absolute inset-0 -m-16 rounded-full border border-gold/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl scale-90" />

          <div className="hero-image-inner relative aspect-square rounded-[2rem] overflow-hidden border-2 border-gold/40 shadow-gold-lg">
            <img
              src={astrologerImg}
              alt="Pandit Pradeep — Vedic Astrologer"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-navy-deep/70 backdrop-blur-md border border-gold/30">
              <div>
                <div className="font-serif text-ivory text-lg leading-tight">Pandit Pradeep Ji</div>
                <div className="text-[11px] tracking-widest uppercase text-gold-soft">Jyotish Acharya</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                <Sparkles className="w-5 h-5 text-navy-deep" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
