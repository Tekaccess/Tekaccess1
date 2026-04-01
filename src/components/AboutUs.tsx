import aboutTruckLoading from "@/assets/about-truck-loading.jpg";
import aboutMaterials from "@/assets/about-materials.jpg";

const AboutUs = () => {
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
                  <span className="text-[#0A1437] italic">Excellence</span>{" "}
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
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl">
                <img
                  src={aboutTruckLoading}
                  alt="Operations"
                  className="w-full aspect-[4/3] object-cover"
                />
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
