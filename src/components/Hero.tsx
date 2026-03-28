import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, CheckCircle2, ChevronRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down for more cinematic feel
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
    <section id="home" className="relative min-h-screen w-full overflow-hidden ">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-100 "
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
        {/* Deep Gradient Overlay - Darkened */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side: Content */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Premium Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full border-2 border-background bg-white/20" />
                  <div className="h-6 w-6 rounded-full border-2 border-background bg-white/10" />
                </div>
                <span className="text-sm font-semibold text-white/90 ml-1">
                  Trusted by 500+ global partners
                </span>
              </div>

              {/* Main Headline - Removed color gradient */}
              <h1 className="mb-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Revolutionizing <br />
                <span className="text-white/90">
                  Green Logistics
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mb-8 max-w-xl text-lg sm:text-xl text-white/50 leading-relaxed font-light">
                We bridge the gap between efficiency and sustainability. Experience
                seamless global logistics powered by cutting-edge green technology
                and uncompromising style.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("#services")}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-white/90"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => scrollToSection("#about")}
                  className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  Learn More
                  <ChevronRight className="h-5 w-5 opacity-50" />
                </button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                {["ECO-Friendly Shipping", "Real-time Tracking", "Global Network", "24/7 Premium Support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/40">
                    <CheckCircle2 className="h-4 w-4 text-white/60" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Visual Element (Optional Glass Card) */}
            <div className={`hidden lg:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                {/* Decorative Elements - Neutralized */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-3xl animate-pulse" />

                {/* Glass Stats Card */}
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: "Delivery Success", value: "99.9%" },
                      { label: "Global Reach", value: "150+" },
                      { label: "CO2 Reduced", value: "45%" },
                      { label: "Satisfaction", value: "4.9/5" },
                    ].map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-sm text-white/40">{stat.label}</p>
                        <p className="text-3xl font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-8 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white/10 bg-white/5" />
                      ))}
                    </div>
                    <p className="text-sm text-white/40">
                      Join thousands of companies <br />making the switch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <button
          onClick={() => scrollToSection("#about")}
          className="group flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">Scroll</span>
          <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;