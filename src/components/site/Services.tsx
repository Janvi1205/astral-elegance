import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsAppIcon } from "../WhatsAppIcon";

import svcLove from "@/assets/svc-love-harmony.png";
import svcCareer from "@/assets/svc-career-breakthrough.png";
import svcLife from "@/assets/svc-life-prediction.png";
import svcLegal from "@/assets/svc-legal-guidance.png";
import svcNumerology from "@/assets/svc-numerology.png";
import svcVastu from "@/assets/svc-vastu.png";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = "https://wa.me/919717721217?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.";

const services = [
  {
    title: "Love and marriage harmony",
    desc: "Recover lost love, resolve marital conflicts, and bring lasting harmony to your relationships with Vedic remedies.",
    img: svcLove,
  },
  {
    title: "Career and Business Breakthrough",
    desc: "Unlock professional success, overcome financial hurdles, and achieve massive breakthroughs in your business journey.",
    img: svcCareer,
  },
  {
    title: "Life prediction",
    desc: "Unveil your future path with accurate horoscope analysis, helping you prepare for opportunities and challenges ahead.",
    img: svcLife,
  },
  {
    title: "Legal guidance",
    desc: "Get spiritual and astrological support to resolve complex legal disputes and court cases with divine insights.",
    img: svcLegal,
  },
  {
    title: "Numerology Consultation",
    desc: "Decode the power of numbers in your life to align your vibrations with success, health, and prosperity.",
    img: svcNumerology,
  },
  {
    title: "Vastu Consultation",
    desc: "Harmonize your living and working spaces to attract positive energy, abundance, and peace of mind.",
    img: svcVastu,
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
            My <span className="text-gradient-gold">Services</span>
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
                  decoding="async"
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-navy-deep text-sm font-semibold shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
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
