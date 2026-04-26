import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lock, Sparkles, BookOpen, CheckCircle2, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Target,
    title: "Accurate & Practical Predictions",
    desc: "I focus on realistic and timing-based predictions using authentic Vedic astrology principles.",
  },
  {
    icon: Lock,
    title: "Confidential & Safe Consultation",
    desc: "Your personal details and life matters are treated with complete privacy and respect.",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Personalised Remedies",
    desc: "No generic solutions. Every remedy is carefully tailored to your birth chart and life situation.",
  },
  {
    icon: BookOpen,
    title: "Years of Experience",
    desc: "With deep study and hands-on practice, I provide guidance based on knowledge and real consultation experience.",
  },
  {
    icon: CheckCircle2,
    title: "Practical Solutions",
    desc: "My remedies are simple, doable, and aligned with your lifestyle.",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    desc: "Guidance doesn't end after the session. I ensure clarity and answer follow-up doubts when needed.",
  },
];

const WhyUs = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-head > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        ".why-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-grid", start: "top 90%", toggleActions: "play none none none" },
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="why-us" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="why-head text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            Trusted by <span className="text-gradient-gold">Thousands</span>
          </h2>
        </div>

        <div className="why-grid mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {features.map((f) => (
            <div
              key={f.title}
              className={`why-item group text-center px-6 py-8 rounded-3xl transition-all duration-500 ${
                f.highlight
                  ? "bg-card shadow-card border border-gold/20"
                  : "hover:bg-card/60 hover:shadow-card border border-transparent"
              }`}
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center group-hover:bg-gold-gradient group-hover:shadow-gold transition-all duration-500">
                <f.icon className="w-7 h-7 text-gold group-hover:text-navy-deep transition-colors duration-500" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
