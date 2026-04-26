import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import astrologerImg from "@/assets/astrologer-stage.jpg";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "25K+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction" },
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
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gold/30 aspect-[4/5]">
            <img src={astrologerImg} alt="Pandit Pradeep speaking" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-card rounded-2xl shadow-elegant border border-gold/30 px-6 py-5 flex items-center gap-4 max-w-[260px]">
            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold shrink-0">
              <Sparkles className="w-6 h-6 text-navy-deep" />
            </div>
            <div>
              <div className="font-serif text-xl text-navy">Certified Acharya</div>
              <div className="text-xs text-muted-foreground">Vedic Astrology Council</div>
            </div>
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
            With over two decades of profound study in Vedic Jyotish, Pandit Pradeep Ji blends
            scriptural authenticity with deep intuitive insight. From birth chart analysis to remedies
            rooted in tradition, every consultation is crafted to bring real change — not just answers.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Featured across national platforms and trusted by families, professionals, and entrepreneurs
            across the globe, his guidance has helped thousands navigate love, career, marriage, and
            spiritual growth with renewed confidence.
          </p>

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
