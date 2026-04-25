import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Briefcase, Users, Sparkles, Moon, Gem } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Heart, title: "Love Problem Solution", desc: "Reunite with your loved ones and overcome misunderstandings with proven Vedic remedies." },
  { icon: Users, title: "Marriage Astrology", desc: "Kundli matching, timing of marriage, and harmony solutions for a blessed union." },
  { icon: Briefcase, title: "Career & Business", desc: "Discover your true calling, ideal profession, and the right time for major decisions." },
  { icon: Gem, title: "Gemstone Guidance", desc: "Authentic gemstone recommendations tailored to your planetary configuration." },
  { icon: Moon, title: "Kundli & Horoscope", desc: "Detailed birth chart analysis revealing strengths, challenges, and destiny." },
  { icon: Sparkles, title: "Vastu & Remedies", desc: "Energetic alignment of home and workspace with personalized spiritual remedies." },
];

const Services = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-head > *", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      });
      gsap.from(".svc-card", {
        scrollTrigger: { trigger: ".svc-grid", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="relative py-24 lg:py-32 bg-muted/40">
      <div className="container">
        <div className="svc-head text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-navy/70 font-medium">Our Services</span>
          </div>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            Astrology Solutions for <span className="italic text-gradient-gold">Every Path</span>
          </h2>
          <div className="gold-divider mx-auto my-7 w-24" />
          <p className="text-muted-foreground text-lg">
            Time-honored Vedic wisdom applied to your unique chart — for clarity at every crossroad.
          </p>
        </div>

        <div className="svc-grid mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card group relative p-8 rounded-3xl bg-card border border-border hover:border-gold/40 shadow-card hover:shadow-gold-lg hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <s.icon className="w-7 h-7 text-navy-deep" />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
