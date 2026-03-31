import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="dark relative min-h-screen w-full overflow-hidden bg-[#030303]">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-screen items-center pt-20">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Global Logistics Excellence</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
              End-to-End <br />
              <span className="text-primary italic">Logistics</span> You <br />
               Can Trust.
            </h1>

            <p className="text-lg sm:text-xl text-white/60 mb-12 max-w-2xl font-light leading-relaxed">
              On Time, Every Time. Experience peak supply chain efficiency with TekAccess. 
              Our precision-led logistics solutions empower your business to move faster and further.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-12">
              <button
                onClick={() => scrollToSection("#services")}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-10 py-5 font-bold text-white transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/30"
              >
                Our Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 shadow-xl"
              >
                Get in Touch
                <ChevronRight className="h-5 w-5 opacity-40 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Global Freight Solutions",
                "Real-time Tracking & Visibility",
                "Scalable Supply Chain Strategy",
                "24/7 Priority Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <CheckCircle2 className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-sm sm:text-base font-medium text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
        <button
          onClick={() => scrollToSection("#about")}
          className="flex flex-col items-center gap-4 animate-bounce opacity-40"
        >
          <span className="text-[10px] text-white uppercase tracking-[0.45em] font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </button>
      </div>
    </section>
  );
};

export default Hero;