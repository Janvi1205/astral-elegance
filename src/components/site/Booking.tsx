import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "919999999999"; // replace with real number

const Booking = () => {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".bk-head > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(".bk-info, .bk-form",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".bk-grid", start: "top 90%", toggleActions: "play none none none" } }
      );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const text = encodeURIComponent(
      `Hello Pandit Ji, I would like to book a consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to confirm your consultation...");
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="bk-head text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs tracking-[0.2em] uppercase text-navy/70 font-medium">Book Consultation</span>
          </div>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.1]">
            Begin Your <span className="italic text-gradient-gold">Spiritual Journey</span>
          </h2>
          <div className="gold-divider mx-auto my-7 w-24" />
          <p className="text-muted-foreground text-lg">
            Share your details and we'll reach out personally to schedule your private session.
          </p>
        </div>

        <div className="bk-grid mt-16 grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Info card */}
          <div className="bk-info lg:col-span-2 bg-dark-gradient rounded-3xl p-8 lg:p-10 border border-gold/30 relative overflow-hidden">
            <div className="absolute inset-0 star-bg opacity-40" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="font-serif text-3xl text-ivory">Connect Directly</h3>
              <div className="gold-divider w-20 my-5" />
              <p className="text-ivory/70 leading-relaxed">
                Personal guidance is just a message away. Reach out via call, email, or visit our consultation chamber.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-soft">Call</div>
                    <a href="tel:+919999999999" className="text-ivory hover:text-gold transition">+91 99999 99999</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-soft">Email</div>
                    <a href="mailto:hello@divyajyotish.com" className="text-ivory hover:text-gold transition">hello@divyajyotish.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-soft">Chamber</div>
                    <div className="text-ivory">New Delhi, India</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bk-form lg:col-span-3 bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="form-input"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 ..."
                  className="form-input"
                />
              </Field>
            </div>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="form-input"
              />
            </Field>
            <Field label="Your Concern">
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Briefly share what guidance you seek..."
                className="form-input resize-none"
              />
            </Field>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-navy-deep font-semibold shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all"
            >
              Book Consultation
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-center text-muted-foreground">
              By submitting, you'll be redirected to WhatsApp to confirm your booking.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.75rem;
          background: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          font-size: 0.95rem;
          transition: all 0.2s;
          outline: none;
        }
        .form-input:focus {
          border-color: hsl(var(--gold));
          background: hsl(var(--card));
          box-shadow: 0 0 0 3px hsl(var(--gold) / 0.15);
        }
        .form-input::placeholder { color: hsl(var(--muted-foreground)); }
      `}</style>
    </section>
  );
};

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-sm font-medium text-navy mb-2 block">
      {label} {required && <span className="text-gold">*</span>}
    </span>
    {children}
  </label>
);

export default Booking;
