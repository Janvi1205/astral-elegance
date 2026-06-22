import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame, Calendar, MapPin, Utensils } from "lucide-react";
import pradeepImage from "../../assets/pradeep-astrologer.png";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "919717721217";

const highlights = [
  "How to Study & Interpret a Birth Chart",
  "Does Shani Sade Sati Really Work?",
  "The Truth About Manglik, Pitra & Kaal Sarp Dosh",
  "How to Assess Wealth Potential Through Astrology"
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
    'Hello Pradeep Ji, I would like to register for the Astrology Seminar on 29th June 2026. Please share the booking details.'
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
            An Exclusive Evening
          </p>
          
          <h2 className="font-serif text-6xl sm:text-7xl lg:text-[110px] leading-[0.95] font-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F2DE89] to-[#8C6D23] mb-10 pb-4">
            ASTROLOGY<br/>SEMINAR
          </h2>
          
          <p className="text-[#D4AF37]/90 text-xl sm:text-2xl font-light tracking-wide max-w-3xl mx-auto font-serif italic">
            "Decode the secrets of your destiny with timeless wisdom."
          </p>
        </div>

        {/* Logistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
          {/* Date & Time */}
          <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#111F3A]/10 backdrop-blur-sm p-6 flex items-start gap-4 hover:border-[#D4AF37]/35 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-xl pointer-events-none" />
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/20 bg-[#070B14] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors duration-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium">Date & Time</span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-light mt-1">29 June 2026</h3>
              <p className="text-white/50 text-xs mt-1 font-light tracking-wide">7:00 PM - 9:00 PM</p>
            </div>
          </div>

          {/* Venue */}
          <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#111F3A]/10 backdrop-blur-sm p-6 flex items-start gap-4 hover:border-[#D4AF37]/35 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-xl pointer-events-none" />
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/20 bg-[#070B14] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium">Venue</span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-light mt-1">Vivanta New Delhi</h3>
              <p className="text-white/50 text-xs mt-1 font-light tracking-wide">Dwarka</p>
            </div>
          </div>

          {/* Dinner */}
          <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#111F3A]/10 backdrop-blur-sm p-6 flex items-start gap-4 hover:border-[#D4AF37]/35 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-xl pointer-events-none" />
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/20 bg-[#070B14] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors duration-300">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium">Dinner</span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-light mt-1">Dinner Provided</h3>
              <p className="text-white/50 text-xs mt-1 font-light tracking-wide">Complimentary buffet served</p>
            </div>
          </div>
        </div>

        {/* Main Grid: Cardless & Elegant */}
        <div className="sem-grid flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24 mt-12 relative z-10">
          
          {/* Left: Content Flow */}
          <div className="flex-1 w-full sem-item">
            
            <div className="mb-8 flex items-center gap-6">
               <h3 className="text-xs text-[#D4AF37] font-medium tracking-[0.3em] uppercase">
                  Seminar Highlights
               </h3>
               <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-center p-5 rounded-2xl border border-[#D4AF37]/10 bg-[#111F3A]/5 hover:border-[#D4AF37]/25 hover:bg-[#111F3A]/10 hover:shadow-[0_4px_20px_rgba(212,175,55,0.02)] transition-all duration-300 group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/20 bg-[#070B14] flex items-center justify-center text-[#D4AF37]/60 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-all duration-300 text-xs font-mono font-bold">
                    0{index + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-light text-white/80 tracking-wide group-hover:text-white transition-colors duration-300 leading-snug">
                    {highlight}
                  </h4>
                </div>
              ))}
            </div>

            {/* Distinguished Guests Card */}
            <div className="mt-14 rounded-2xl border border-[#D4AF37]/15 bg-[#111F3A]/10 backdrop-blur-sm p-8 relative overflow-hidden">
              {/* Subtle inner gold glow */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-2xl pointer-events-none" />
              
              <div className="mb-8 flex items-center gap-6">
                 <h3 className="text-xs text-[#D4AF37] font-medium tracking-[0.3em] uppercase">
                    Distinguished Guests
                 </h3>
                 <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 relative z-10">
                 {/* Chief Guests */}
                 <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-[#D4AF37]/10 pb-2">
                      <span className="text-[#D4AF37] text-[10px]">✦</span>
                      <h4 className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-semibold">Chief Guests</h4>
                    </div>
                    <div className="space-y-5">
                       <div className="hover:translate-x-1 transition-transform duration-300">
                          <div className="font-serif text-lg text-white font-medium leading-snug">Dr. Arun Bansal</div>
                          <div className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">President, AIFAS; Chairman, Future Point</div>
                       </div>
                       <div className="hover:translate-x-1 transition-transform duration-300">
                          <div className="font-serif text-lg text-white font-medium leading-snug">Mrs. Abha Bansal</div>
                          <div className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">Director, Future Point</div>
                       </div>
                    </div>
                 </div>

                 {/* Guest of Honour */}
                 <div className="space-y-6 sm:pl-8 sm:border-l sm:border-[#D4AF37]/15">
                    <div className="flex items-center gap-3 border-b border-[#D4AF37]/10 pb-2">
                      <span className="text-[#D4AF37] text-[10px]">✦</span>
                      <h4 className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-semibold">Guest of Honour</h4>
                    </div>
                    <div className="space-y-5">
                       <div className="hover:translate-x-1 transition-transform duration-300">
                          <div className="font-serif text-lg text-white font-medium leading-snug">Mr. Daya Krishna Gupta</div>
                          <div className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">Master of Cuspal Theory</div>
                       </div>
                       <div className="hover:translate-x-1 transition-transform duration-300">
                          <div className="font-serif text-lg text-white font-medium leading-snug">Mrs. Aakriti Gupta</div>
                          <div className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">Vedic Astrologer, Tarot Card Reader & Vaastu Consultant</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          {/* Right: Astrologer Profile Floating (Sticky) */}
          <div className="w-full lg:w-[450px] shrink-0 sem-item relative flex flex-col items-center lg:sticky lg:top-28 self-start">
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
