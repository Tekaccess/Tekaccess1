import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aboutMaterials from "@/assets/about-materials.jpg";

import truck1 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.14.jpeg";
import truck2 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.14 (1).jpeg";
import truck3 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.14 (2).jpeg";
import truck4 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.15.jpeg";
import truck5 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.15 (1).jpeg";
import truck6 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.15 (2).jpeg";
import truck7 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.15 (3).jpeg";
import truck8 from "@/assets/trucks/WhatsApp Image 2026-04-03 at 09.46.16.jpeg";

const carouselImages = [truck1, truck2, truck3, truck4, truck5, truck6, truck7, truck8];

const AboutUs = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Introduction */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-brand-red/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
                  Since 2018
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight">
                  Driving Logistics <br />
                  <span className="text-[#0A1437] ">Excellence</span>{" "}
                  Across Rwanda.
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                  Founded on integrity and excellence,{" "}
                  <strong className="text-slate-900">TekAccess</strong> is a
                  trusted logistics and transport solutions provider
                  specializing in high-performance supply chain operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <a href="#services" className="gradient-btn px-10">
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#0A1437] hover:underline"
                >
                  Partner with us <span>→</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl group w-full aspect-[4/3]">
                {carouselImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Operations ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentIdx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg transition-transform hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg transition-transform hover:scale-110"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIdx(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIdx ? "bg-brand-red w-6" : "bg-white/60 hover:bg-white w-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl border border-slate-100">
                <img
                  src={aboutMaterials}
                  alt="Story"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-3xl font-extrabold text-[#0A1437]">
                Our Story
              </h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                From import to final delivery, we modernize logistics operations
                with reliable transport solutions that connect businesses across
                Rwanda and beyond.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                  <p className="text-[#0A1437]/60 font-bold text-[10px] tracking-widest uppercase mb-3">
                    Vision
                  </p>
                  <p className="text-slate-900 text-sm font-medium leading-relaxed">
                    To drive growth and excellence, creating solutions that
                    enrich lives and deliver lasting value.
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                  <p className="text-[#0A1437]/60 font-bold text-[10px] tracking-widest uppercase mb-3">
                    Mission
                  </p>
                  <p className="text-slate-900 text-sm font-medium leading-relaxed">
                    To be a trusted partner delivery timely and efficient
                    solutions with integrity and conscious practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
