import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const link = "https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation.";
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6 text-white" />
      </span>
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-full bg-navy-deep text-ivory text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;
