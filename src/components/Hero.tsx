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
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="dark relative min-h-screen w-full overflow-hidden bg-[#030303]"
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-screen items-center justify-center pt-20">
        <div className="max-w-3xl bg-red-00 mt-24 text-center">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              End-to-End <span className="text-brand-red">Logistics</span>{" "}
              You Can Trust.
            </h1>

            <p className="text-base sm:text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              On Time, Every Time. Experience peak supply chain efficiency with
              TekAccess. Our precision-led logistics solutions empower your
              business to move faster and further.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection("#services")}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-red px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 shadow-2xl shadow-brand-red/30 w-full sm:w-auto"
              >
                Our Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 shadow-xl w-full sm:w-auto"
              >
                Get in Touch
                <ChevronRight className="h-5 w-5 opacity-40 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
