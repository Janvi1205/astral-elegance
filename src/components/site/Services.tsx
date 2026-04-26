import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import svcLove from "@/assets/svc-love.jpg";
import svcMarriage from "@/assets/svc-marriage.jpg";
import svcFamily from "@/assets/svc-family.jpg";
import svcCouple from "@/assets/svc-couple.jpg";
import svcCareer from "@/assets/svc-career.jpg";
import svcVashikaran from "@/assets/svc-vashikaran.jpg";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = "https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const services = [
  {
    title: "Love Problem Solution",
    desc: "Overcome heartbreak, misunderstandings, and relationship obstacles with powerful remedies.",
    img: svcLove,
  },
  {
    title: "Love Marriage Specialist",
    desc: "Get expert guidance and astrological support for inter-caste and love marriages.",
    img: svcMarriage,
  },
  {
    title: "Family Problem Solution",
    desc: "Resolve family disputes, bring peace, and restore harmony in your household.",
    img: svcFamily,
  },
  {
    title: "Husband Wife Problem",
    desc: "Resolve disputes, rebuild trust, and bring harmony back to your marriage.",
    img: svcCouple,
  },
  {
    title: "Career & Business",
    desc: "Unlock professional growth, financial stability, and success aligned with your stars.",
    img: svcCareer,
  },
  {
    title: "Vashikaran Specialist",
    desc: "Ancient Vedic vashikaran solutions for love, attraction, and relationship challenges.",
    img: svcVashikaran,
  },
];

const Services = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-head > *",
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
        ".svc-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 90%", toggleActions: "play none none none" },
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="relative py-24 lg:py-32 bg-muted/40">
      <div className="container">
        <div className="svc-head text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            What I Offer
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            My <span className="italic text-gradient-gold">Services</span>
          </h2>
        </div>

        <div className="svc-grid mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <article
              key={s.title}
              className="svc-card group flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-gold-lg hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-serif text-2xl text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-auto pt-6">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gold-gradient text-navy-deep text-sm font-semibold shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
