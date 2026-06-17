import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame } from "lucide-react";
import pradeepImage from "../../assets/pradeep-astrologer.png";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "919717721217";

const highlights = [
  "How to Study & Interpret a Birth Chart",
  "Does Shani Sade Sati Really Work?",
  "The Truth About Manglik, Pitra & Kaal Sarp Dosh",
  "How to Assess Wealth Potential Through Astrology",
  "Exclusive 2-Hour Live Q&A Session"
];

export const Seminar = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sem-head > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(
        ".sem-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sem-grid", start: "top 85%", toggleActions: "play none none none" }
        }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    'Hello Pradeep Ji, I would like to register for the Astrology Seminar on 20th June 2026. Please share the booking details.'
  )}`;

  return (
    <section
      ref={ref}
      id="seminar"
      className="relative py-20 lg:py-28 bg-[#070B14] overflow-hidden text-[#EAE6D7]"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 star-bg opacity-20 pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#D4AF37]/10 to-transparent blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#111F3A]/50 to-transparent blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="container relative px-6 z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="sem-head text-center max-w-5xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
            <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-light">
              Astrology Masterclass 2026
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
          </div>
          
          <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-white/50 font-light mb-6">
            An Exclusive Full-Day
          </p>
          
          <h2 className="font-serif text-6xl sm:text-7xl lg:text-[110px] leading-[0.95] font-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F2DE89] to-[#8C6D23] mb-10 pb-4">
            ASTROLOGY<br/>SEMINAR
          </h2>
          
          <p className="text-[#D4AF37]/90 text-xl sm:text-2xl font-light tracking-wide max-w-3xl mx-auto font-serif italic">
            "Decode the secrets of your destiny with timeless wisdom."
          </p>
        </div>

        {/* Main Grid: Cardless & Elegant */}
        <div className="sem-grid flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 mt-12 relative z-10">
          
          {/* Left: Content Flow */}
          <div className="flex-1 w-full sem-item">
            
            {/* Event Logistics Flow */}
            <div className="flex flex-col gap-10 mb-12 relative">
              {/* Elegant Vertical Line */}
              <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/30 to-transparent"></div>
              
              <div className="pl-10">
                <div className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-3">Date</div>
                <div className="font-serif text-4xl sm:text-5xl text-white font-light tracking-wide">20 June 2026</div>
                <div className="text-white/50 mt-2 font-light tracking-[0.1em] uppercase text-xs">Starting 10:00 AM</div>
              </div>

              <div className="pl-10">
                <div className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-3">Venue</div>
                <div className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">Vivanta New Delhi</div>
                <div className="text-white/50 mt-2 font-light tracking-[0.2em] uppercase text-xs">Dwarka</div>
              </div>
            </div>

            <div className="mb-10 flex items-center gap-6">
               <h3 className="text-xs text-[#D4AF37] font-medium tracking-[0.3em] uppercase">
                  Seminar Highlights
               </h3>
               <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-6 items-center group">
                  <span className="text-[#D4AF37]/40 text-[10px] group-hover:text-[#D4AF37] transition-colors duration-500">✦</span>
                  <h4 className="text-lg sm:text-xl font-light text-white/80 tracking-wide group-hover:text-white transition-colors duration-500">
                    {highlight}
                  </h4>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Astrologer Profile Floating */}
          <div className="w-full lg:w-[480px] shrink-0 sem-item relative flex flex-col items-center">
            {/* Deep Back glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            
            {/* Elegant Image Frame */}
            <div className="relative w-full rounded-t-[1000px] rounded-b-[40px] border border-[#D4AF37]/20 p-2.5 bg-[#111F3A]/20 backdrop-blur-md shadow-[0_0_60px_rgba(212,175,55,0.05)]">
              <div className="relative rounded-t-[1000px] rounded-b-[32px] overflow-hidden aspect-[4/5] bg-[#0A1121]">
                <img 
                  src={pradeepImage} 
                  alt="Astrologer Pradeep Malhotra" 
                  className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-1000"
                />
                
                {/* Overlay gradient at bottom to blend image softly */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#050914] via-[#050914]/80 to-transparent"></div>
                
                {/* Floating details inside image bottom */}
                <div className="absolute bottom-10 inset-x-0 text-center px-6">
                  <div className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37]/80 mb-3">With Astrologer</div>
                  <h3 className="font-serif text-4xl text-white uppercase tracking-widest drop-shadow-2xl">
                    Pradeep<br/>Malhotra
                  </h3>
                </div>
              </div>
            </div>

            {/* Action Area Below Image */}
            <div className="mt-12 w-full flex flex-col items-center gap-8">
              <div className="flex items-center gap-4 text-[#D4AF37]/80">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Limited Seats Available</span>
                <Flame className="w-3.5 h-3.5 animate-pulse" />
              </div>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full relative group overflow-hidden inline-flex items-center justify-center py-5 rounded-full bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] hover:border-[#D4AF37] font-medium transition-all duration-500 uppercase tracking-[0.25em] text-sm shadow-[0_0_30px_rgba(212,175,55,0)] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B48A28] via-[#D4AF37] to-[#B48A28] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-[#050914] transition-colors duration-500 font-semibold">Register Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
