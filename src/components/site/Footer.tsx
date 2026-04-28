import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-navy-deep text-ivory pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 star-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                <Sparkles className="w-5 h-5 text-navy-deep" />
              </div>
              <div>
                <div className="font-serif text-xl text-gradient-gold">Pradeep Malhotra</div>
                <div className="text-[10px] tracking-[0.25em] text-gold-soft uppercase">Vedic Astrologer</div>
              </div>
            </div>
            <p className="mt-5 text-ivory/70 text-sm leading-relaxed">
              Ancient wisdom for modern lives. Personalized guidance crafted with sincerity, tradition, and trust.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              {["Home", "About", "Services", "Why Us", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              {["Love Solutions", "Marriage Astrology", "Career Guidance", "Kundli Reading", "Vaastu", "Gemstone Advice"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-gold transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li>+91 97177 21217</li>
              <li>sbv3113@gmail.com</li>
              <li>BA - 357/1, Block BA, Tagore Garden, Tagore Garden Extension, New Delhi, Delhi, 110027</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-14" />
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Pradeep Malhotra. All rights reserved.</p>
          <p>Crafted with sacred intention ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
