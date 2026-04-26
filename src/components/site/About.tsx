import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Sparkles } from "lucide-react";
import astrologerImg from "@/assets/astrologer-stage.webp";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1K+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
];

const About = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-image",
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(".about-text > *",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(".about-stat",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".about-stats", start: "top 90%", toggleActions: "play none none none" }
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="relative py-24 lg:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="about-image relative">
          <div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gold/30 aspect-[3/4]">
            <img
              src={astrologerImg}
              alt="Pradeep Malhotra Ji"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={600}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
          </div>
        </div>


        <div className="about-text">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-navy/70 font-medium">About</span>
          </div>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            Guiding Lives Through <span className="italic text-gradient-gold">Ancient Wisdom</span>
          </h2>

          <div className="gold-divider my-7 w-24" />

          <p className="text-muted-foreground text-lg leading-relaxed">
            With over a decade of dedicated practice in Vedic Jyotish, Pradeep Malhotra Ji combines
            traditional astrological wisdom with practical, real-life guidance. From birth chart analysis
            to personalized remedies, every consultation is focused on providing clarity, direction, and
            meaningful solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Trusted by individuals and families alike, his insights have helped many navigate important
            life decisions related to career, relationships, and personal growth with confidence.
          </p>

          <div className="mt-10 relative py-5 px-7 bg-gold/5 rounded-r-2xl border-l-4 border-gold group hover:bg-gold/10 transition-all duration-300">
            <Quote className="absolute -top-3 -left-3 w-7 h-7 text-gold/30 rotate-180" />
            <p className="text-navy font-serif italic font-semibold text-xl lg:text-2xl leading-[1.4] tracking-tight">
              "If I can give you light, then I am an <span className="text-gradient-gold">Astrologer</span>"
            </p>
            <p className="mt-3 text-gold font-medium tracking-[0.1em] uppercase text-xs flex items-center gap-3">
              <span className="w-8 h-px bg-gold/40" />
              Pradeep Malhotra Ji
            </p>
          </div>

          <div className="about-stats mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="about-stat text-center p-5 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-card transition-all"
              >
                <div className="font-serif text-3xl sm:text-4xl text-gradient-gold font-semibold">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
