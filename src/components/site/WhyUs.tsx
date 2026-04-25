import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lock, Award, HeartHandshake, Clock, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Target, title: "Accurate Predictions", desc: "Rooted in classical Vedic texts and decades of practice." },
  { icon: HeartHandshake, title: "Personalized Solutions", desc: "Every remedy crafted for your unique birth chart." },
  { icon: Lock, title: "100% Confidential", desc: "Your story stays sacred and protected, always." },
  { icon: Award, title: "Award Winning", desc: "Recognized by leading astrology councils nationwide." },
  { icon: Clock, title: "Available 24/7", desc: "Guidance whenever you need it most." },
  { icon: ShieldCheck, title: "Trusted by Thousands", desc: "25,000+ verified consultations and counting." },
];

const WhyUs = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-head > *", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      });
      gsap.from(".why-item", {
        scrollTrigger: { trigger: ".why-grid", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="why-us" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="container relative">
        <div className="why-head text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-navy/70 font-medium">Why Choose Us</span>
          </div>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            A Legacy of <span className="italic text-gradient-gold">Trust & Excellence</span>
          </h2>
          <div className="gold-divider mx-auto my-7 w-24" />
        </div>

        <div className="why-grid mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="why-item group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-card transition-all"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold-gradient group-hover:shadow-gold transition-all">
                <f.icon className="w-6 h-6 text-gold group-hover:text-navy-deep transition-colors" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
