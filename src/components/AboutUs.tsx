import {
  TrendingUp,
  CheckCircle,
  Eye,
  Zap,
  ShieldCheck,
  Target,
  Anchor,
  Award,
} from "lucide-react";
import aboutTruckLoading from "@/assets/about-truck-loading.jpg";
import aboutMaterials from "@/assets/about-materials.jpg";

const AboutUs = () => {
  const coreValues = [
    {
      title: "Awareness",
      icon: <Eye className="h-6 w-6" />,
      desc: "We maintain awareness of our environment, our impact and the evolving needs of our stakeholders.",
    },
    {
      title: "Proactivity",
      icon: <Zap className="h-6 w-6" />,
      desc: "Through proactivity, we anticipate challenges and opportunities, ensuring timely and effective solutions.",
    },
    {
      title: "Accountability",
      icon: <ShieldCheck className="h-6 w-6" />,
      desc: "Our accountability keeps us true to our word, honoring every commitment with transparency and integrity.",
    },
    {
      title: "Resilience",
      icon: <Anchor className="h-6 w-6" />,
      desc: "With resilience, we adapt and rise above challenges, maintaining reliability through every project.",
    },
    {
      title: "Growth",
      icon: <TrendingUp className="h-6 w-6" />,
      desc: "We pursue growth, embracing continuous improvement for our people, partners, and systems.",
    },
    {
      title: "Excellence",
      icon: <Award className="h-6 w-6" />,
      desc: "We strive for excellence, setting the highest standards and delivering solutions that inspire confidence.",
    },
  ];

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Introduction */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#0A1437]">
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

      {/* Values */}
      <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#0A1437]">
              Core Values
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
              The principles guiding every decision and action at TekAccess.
            </p>
            <div className="mx-auto h-1 w-20 bg-[#0A1437] rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="group p-10 bg-white rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-8 h-14 w-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-[#0A1437] group-hover:text-white transition-all duration-500">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0A1437] mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
