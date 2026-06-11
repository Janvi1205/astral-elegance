import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import { Seminar } from "@/components/site/Seminar";
import WhyUs from "@/components/site/WhyUs";
import Testimonials from "@/components/site/Testimonials";
import Booking from "@/components/site/Booking";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Seminar />
      <WhyUs />
      <Testimonials />
      <Booking />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
