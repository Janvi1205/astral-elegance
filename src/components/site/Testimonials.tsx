import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Meenu",
    role: "Happy Client",
    text: "Highly recommended. Most accurate predictions and resolved all my queries with effective remedies.",
    rating: 5,
  },
  {
    name: "Gaurav Singhal",
    role: "Honest Review",
    text: "Thank you for detailed and calm study & discussion. Really appreciate the advise given.",
    rating: 5,
  },
  {
    name: "Deepak Kumar",
    role: "Best Astrology Solution",
    text: "Best Astrology Solution with best and easy remedies.",
    rating: 5,
  },
  {
    name: "Anil Garg",
    role: "Verified Client",
    text: "It was truly worth talking to him and very true results are given",
    rating: 5,
  },
  {
    name: "Deepika bhargava",
    role: "Detailed Analysis",
    text: "Very detailed and to the point... takes you through your inner self and gives a hope and guidance and helps to know small small details and what is best for you and how things can be improved and be effective",
    rating: 5,
  },
  {
    name: "Keshav Adlakha",
    role: "Professional Service",
    text: "I had the pleasure of availing Jyotish services from Pradeep Ji, and I must say, his expertise is truly remarkable. He takes the time to thoroughly explain every detail of your horoscope, addressing each issue with clarity and confidence",
    rating: 5,
  },
  {
    name: "Parth Khattar",
    role: "Highly Recommended",
    text: "Pradeep ji explains the things related to horoscope really well and elaborates all the issues regardless of any hesitations and the remedies are very effective. Highly Recommended for all",
    rating: 5,
  },
  {
    name: "Bawa Sandhu",
    role: "Detailed Guidance",
    text: "The amazing thing about Pradeep Ji is that the way he explains things n tells people about their future is so accurate that you can’t even imagine. The small small solution (remedies) for your problems are easy to do.",
    rating: 5,
  },
  {
    name: "Sushhmita Siingh",
    role: "Authentic Reading",
    text: "Very authentic and genuine reading is provided,with personal touch,which is rare nowadays. Big names doesn't matter, authenticity matters",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tst-head > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(".tst-card",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".tst-wrap", start: "top 90%", toggleActions: "play none none none" } }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[index];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-24 lg:py-32 bg-dark-gradient overflow-hidden"
    >
      <div className="absolute inset-0 star-bg opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />

      <div className="container relative">
        <div className="tst-head text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold-soft font-medium">Testimonials</span>
          </div>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory leading-[1.1]">
            Voices of <span className="text-gradient-gold">Transformation</span>
          </h2>
          <div className="gold-divider mx-auto my-7 w-24" />
        </div>

        <div className="tst-wrap mt-14 max-w-3xl mx-auto">
          <div className="tst-card relative bg-navy-soft/60 backdrop-blur-md border border-gold/30 rounded-3xl p-10 lg:p-14 shadow-elegant">
            <Quote className="absolute -top-6 left-10 w-14 h-14 text-gold/40" />

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            <p key={r.name} className="text-center text-lg lg:text-xl text-ivory/90 font-serif leading-relaxed animate-fade-in">
              "{r.text}"
            </p>

            <div className="mt-8 text-center">
              <div className="font-serif text-xl text-gradient-gold">{r.name}</div>
              <div className="text-xs tracking-widest uppercase text-ivory/60 mt-1">{r.role}</div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
                className="w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition-all flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                className="w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition-all flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
