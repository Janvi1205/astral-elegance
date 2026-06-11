import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Coffee, Utensils, Sparkles, Flame, Star, Percent } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "919717721217";

const agendaPoints = [
  {
    title: "Why some days feel effortless",
    description: "Discover why certain days flow beautifully while others fight you at every step."
  },
  {
    title: "Why certain people drain you",
    description: "Understand the subtle cosmic exchanges that make some people draining and others supportive."
  },
  {
    title: "Why timing is everything",
    description: "Learn how the alignment of planets controls your timing and how to finally get yours right."
  },
  {
    title: "Why your body follows a pattern",
    description: "Explore the internal biological rhythms and patterns that connect directly to astrometeorology."
  }
];

const inclusions = [
  { icon: Utensils, text: "5-Star Buffet Lunch" },
  { icon: Coffee, text: "2 Rounds of Coffee & Tea" },
  { icon: Star, text: "Premium 5-Star Venue Experience" }
];

export const Seminar = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sem-head > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(
        ".sem-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sem-grid", start: "top 90%", toggleActions: "play none none none" }
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    'Hello Pradeep Ji, I would like to book an Early Bird Seat (Rs 5100) for the Yeh Din Anjaan Nahi Seminar on 20th June 2026. Please share the booking details.'
  )}`;

  return (
    <section
      ref={ref}
      id="seminar"
      className="relative py-24 lg:py-32 bg-navy-deep overflow-hidden text-ivory"
    >
      {/* Decorative stars and glows */}
      <div className="absolute inset-0 star-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container relative px-4 sm:px-6 z-10">
        
        {/* Section Header */}
        <div className="sem-head text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">
              An Exclusive Live Seminar
            </span>
          </div>
          
          <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-soft font-semibold">
            Pradeep Malhotra Presents
          </p>
          
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] font-medium">
            Yeh Din <span className="text-gradient-gold">Anjaan Nahi</span>
          </h2>
          
          <p className="mt-4 text-gradient-gold tracking-widest uppercase text-xs sm:text-sm font-semibold max-w-xl mx-auto">
            The Side of Astrology That Lives In Your Everyday
          </p>
          
          <div className="gold-divider mx-auto my-8 w-28" />
        </div>

        {/* Main Grid */}
        <div className="sem-grid mt-16 grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Agenda & Content (7 Cols) */}
          <div className="sem-card lg:col-span-7 bg-navy-soft/30 border border-gold/20 rounded-3xl p-8 lg:p-10 shadow-elegant flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl text-gradient-gold mb-8 font-semibold flex items-center gap-2">
                <span>✦</span> Why This Seminar is Your Answer
              </h3>
              
              <div className="space-y-8">
                {agendaPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-gold-gradient group-hover:text-navy-deep transition-all duration-300">
                      <span className="text-xs font-semibold text-gold group-hover:text-navy-deep">0{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-ivory group-hover:text-gold transition-colors duration-300">
                        {point.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-ivory/70 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gold/10 text-center">
              <span className="inline-block text-gold font-serif italic text-lg tracking-wider">
                "This seminar is designed to change how you look at your days, forever."
              </span>
            </div>
          </div>

          {/* Right: Unified Details & Booking (5 Cols) */}
          <div className="sem-card lg:col-span-5 bg-navy-soft/50 border-2 border-gold/40 rounded-3xl p-8 shadow-gold/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="relative space-y-6">
              
              {/* Seats Left Notification */}
              <div className="flex items-center gap-2.5 bg-red-600/10 border border-red-500/30 rounded-2xl px-4 py-3 text-red-200">
                <Flame className="w-5 h-5 text-red-400 shrink-0 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  ONLY 10 SEATS AVAILABLE IN TOTAL
                </span>
              </div>

              {/* Pricing Callout */}
              <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20 space-y-3 relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-red-500 text-ivory text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full animate-bounce">
                  Save 53%
                </div>
                
                <div className="text-xs uppercase tracking-widest text-gold-soft font-semibold">Special Booking Offer</div>
                
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-serif text-gold font-bold">₹5,100</span>
                  <span className="text-base text-ivory/50 line-through">₹11,000</span>
                </div>
                
                <p className="text-xs text-ivory/70 leading-tight">
                  <span className="text-gold font-semibold">First 10 Seats Only.</span> Normal seat pricing of ₹11,000 applies once early slots are filled.
                </p>
              </div>

              {/* Event Logistics */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold-soft font-semibold">Date & Time</div>
                    <div className="text-sm font-semibold text-ivory">20th June 2026, Starting 10:00 AM</div>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold-soft font-semibold">Venue</div>
                    <div className="text-sm font-semibold text-ivory">Vivanta New Delhi, Dwarka (5-Star)</div>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="border-t border-gold/10 pt-5 space-y-3">
                <div className="text-[10px] uppercase tracking-widest text-gold-soft font-semibold">What's Included:</div>
                <ul className="space-y-2.5">
                  {inclusions.map((inc, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-ivory/80">
                      <inc.icon className="w-4 h-4 text-gold shrink-0" />
                      <span>{inc.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Booking Action */}
            <div className="mt-8 pt-5 border-t border-gold/10 relative z-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-gold-gradient text-navy-deep font-bold shadow-gold hover:shadow-gold-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Book Your Seat Now
              </a>
              <p className="text-[10px] text-center text-ivory/50 mt-3 leading-tight">
                Secure your seat instantly. You'll be redirected to WhatsApp to confirm details.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
