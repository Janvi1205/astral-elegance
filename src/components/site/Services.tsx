import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsAppIcon } from "../WhatsAppIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info, Clock, CheckCircle2, AlertCircle } from "lucide-react";

import svcLove from "@/assets/svc-love-harmony.webp";
import svcCareer from "@/assets/svc-career-breakthrough.webp";
import svcLife from "@/assets/svc-life-prediction.webp";
import svcLegal from "@/assets/svc-legal-guidance.webp";
import svcNumerology from "@/assets/svc-numerology.webp";
import svcVastu from "@/assets/svc-vastu.webp";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_BASE = "https://wa.me/919717721217?text=";

const consultationTiers = [
  {
    title: "General Consultation",
    online: "₹5,100",
    offline: "₹11,000",
    duration: "30 minutes",
    details: "In this consultation, you can ask 2-3 questions based on your priority per birth chart.",
    icon: <Info className="w-5 h-5 text-gold" />,
  },
  {
    title: "Urgent Consultation",
    online: "₹11,000",
    offline: "₹21,000",
    duration: "Priority",
    details: "Fast-track your consultation for immediate spiritual and astrological guidance.",
    icon: <Clock className="w-5 h-5 text-gold" />,
  },
  {
    title: "Detailed Consultation",
    price: "₹21,000",
    duration: "90 minutes",
    details: "In this consultation, you can ask anything related to your birth chart for a comprehensive life analysis.",
    icon: <CheckCircle2 className="w-5 h-5 text-gold" />,
  },
];

const counsellingTiers = [
  {
    title: "Marriage Counselling Package",
    price: "₹1,00,000",
    details: "In-depth support to resolve marital issues and strengthen your bond. Includes 5 personal or Zoom meetings.",
    icon: <CheckCircle2 className="w-5 h-5 text-gold" />,
    duration: "5 Sessions",
  },
];

const numerologyTiers = [
  {
    title: "Child Name Numerology",
    price: "₹31,000",
    details: "In this consultation, we will suggest you some good names for your child based on the unique birth chart of your child to align their destiny with success.",
    icon: <Info className="w-5 h-5 text-gold" />,
    duration: "Consultation",
  },
];

const legalTiers = [
  {
    title: "Legal Astrological Guidance",
    price: "₹51,000",
    details: "Specialized astrological support for complex legal disputes and court cases. Includes 4 personal or Zoom meetings for thorough guidance.",
    icon: <Info className="w-5 h-5 text-gold" />,
    duration: "4 Meetings",
  },
];

const vastuTiers = [
  {
    title: "Vedic Vaastu Consultation",
    price: "₹51,000",
    details: "Comprehensive Vaastu analysis for your home or workspace to align energies with prosperity and peace. Specialized service for Delhi-based clients.",
    icon: <Info className="w-5 h-5 text-gold" />,
    duration: "On-site/Virtual",
  },
];

const services = [
  {
    title: "Life prediction",
    desc: "Unveil your future path with accurate horoscope analysis, helping you prepare for opportunities and challenges ahead.",
    img: svcLife,
    hasDetails: true,
    tiers: consultationTiers,
  },
  {
    title: "Career and Business Breakthrough",
    desc: "Unlock professional success, overcome financial hurdles, and achieve massive breakthroughs in your business journey.",
    img: svcCareer,
    hasDetails: true,
    tiers: consultationTiers,
  },
  {
    title: "Marriage Counselling",
    desc: "Comprehensive support for marital harmony and resolving deep-rooted relationship conflicts.",
    img: svcLove,
    hasDetails: true,
    tiers: counsellingTiers,
  },
  {
    title: "Numerology Consultation",
    desc: "Suggesting powerful and auspicious names for your child based on the unique vibrations of their birth chart.",
    img: svcNumerology,
    hasDetails: true,
    tiers: numerologyTiers,
  },
  {
    title: "Vaastu Consultation",
    desc: "Vedic Vaastu analysis to attract prosperity and peace. Specialized services for Delhi-based clients.",
    img: svcVastu,
    hasDetails: true,
    tiers: vastuTiers,
  },
  {
    title: "Legal Consultation",
    desc: "Spiritual and astrological guidance for complex legal matters. Includes 4 personal or Zoom meetings.",
    img: svcLegal,
    hasDetails: true,
    tiers: legalTiers,
  },
];

const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

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

  const getWhatsAppLink = (service: string, tier?: string) => {
    const text = tier 
      ? `Hello Pradeep Malhotra, I would like to book a ${tier} for ${service}.`
      : `Hello Pradeep Malhotra, I would like to book a consultation for ${service}.`;
    return `${WHATSAPP_BASE}${encodeURIComponent(text)}`;
  };

  return (
    <section ref={ref} id="services" className="relative py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 sm:px-6">
        <div className="svc-head text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            What I Offer
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            My <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Detailed astrological guidance tailored to your life's most important aspects.
          </p>
        </div>

        <div className="svc-grid mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="svc-card group flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-gold-lg hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-navy">{s.title}</h3>
                  {s.price && (
                    <span className="shrink-0 text-[10px] font-bold bg-gold/10 text-gold px-2 py-1 rounded-md uppercase tracking-wider">
                      {s.price}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                
                <div className="mt-6">
                  {s.hasDetails ? (
                    <Dialog open={open && selectedService?.title === s.title} onOpenChange={(val) => {
                      if (!val) setOpen(false);
                    }}>
                      <DialogTrigger asChild>
                        <Button
                          onClick={() => {
                            setSelectedService(s);
                            setOpen(true);
                          }}
                          className="w-full rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg transition-all"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-gold/20 p-6 sm:p-8">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-2xl sm:text-3xl text-navy text-left flex items-center gap-3">
                            <span className="text-gold">✦</span>
                            Consultation Options: {s.title}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="mt-8 space-y-6">
                          {s.tiers?.map((tier: any) => (
                            <div key={tier.title} className="p-5 rounded-xl border border-border/50 bg-muted/30 hover:border-gold/30 transition-colors group">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    {tier.icon}
                                    <h4 className="font-bold text-navy text-lg">{tier.title}</h4>
                                  </div>
                                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {tier.details}
                                  </p>
                                  <div className="mt-4 flex flex-wrap gap-4 items-center">
                                    {tier.online && (
                                      <span className="text-xs font-semibold bg-gold/10 text-gold px-3 py-1 rounded-full">
                                        Online: {tier.online}
                                      </span>
                                    )}
                                    {tier.offline && (
                                      <span className="text-xs font-semibold bg-navy/10 text-navy px-3 py-1 rounded-full">
                                        Offline: {tier.offline}
                                      </span>
                                    )}
                                    {tier.price && (
                                      <span className="text-xs font-semibold bg-gold/10 text-gold px-3 py-1 rounded-full">
                                        Fees: {tier.price}
                                      </span>
                                    )}
                                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                      <Clock className="w-3 h-3" /> {tier.duration}
                                    </span>
                                  </div>
                                </div>
                                <Button
                                  asChild
                                  className="sm:self-center bg-gold-gradient text-navy-deep px-6 py-2 rounded-full font-semibold shadow-gold hover:shadow-gold-lg transition-all"
                                >
                                  <a
                                    href={getWhatsAppLink(s.title, tier.title)}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Book Now
                                  </a>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
                          <div className="flex items-center gap-2 text-sm text-navy font-medium">
                            <Clock className="w-4 h-4 text-gold" />
                            Waiting Period: Generally 2-3 weeks
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                            <AlertCircle className="w-4 h-4" />
                            Disclaimer: Fees can be changed without prior notice
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      asChild
                      className="w-full rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg transition-all"
                    >
                      <a
                        href={getWhatsAppLink(s.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Book Now
                      </a>
                    </Button>
                  )}
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
