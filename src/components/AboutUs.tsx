import { TrendingUp, CheckCircle, Eye, Zap, ShieldCheck, Target, Anchor, Award } from "lucide-react";
import aboutTruckLoading from "@/assets/about-truck-loading.jpg";
import aboutMaterials from "@/assets/about-materials.jpg";

const AboutUs = () => {
  const coreValues = [
    { 
      title: "Awareness", 
      icon: <Eye className="h-6 w-6 text-primary" />,
      desc: "We maintain awareness of our environment, our impact and the evolving needs of our stakeholders, making every decision with clarity and responsibility."
    },
    { 
      title: "Proactivity", 
      icon: <Zap className="h-6 w-6 text-primary" />,
      desc: "Through proactivity, we anticipate challenges and opportunities, ensuring timely and effective solutions."
    },
    { 
      title: "Accountability", 
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      desc: "Our accountability keeps us true to our word, honoring every commitment with transparency and integrity."
    },
    { 
      title: "Focus", 
      icon: <Target className="h-6 w-6 text-primary" />,
      desc: "We uphold focus, staying committed to what matters most, delivering with precision and consistency."
    },
    { 
      title: "Resilience", 
      icon: <Anchor className="h-6 w-6 text-primary" />,
      desc: "With resilience, we adapt and rise above challenges, maintaining reliability through every project."
    },
    { 
      title: "Growth", 
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      desc: "We pursue growth, embracing continuous improvement for our people, partners, and systems."
    },
    { 
      title: "Excellence", 
      icon: <Award className="h-6 w-6 text-primary" />,
      desc: "And in all we do, we strive for excellence, setting the highest standards and delivering solutions that inspire confidence and create lasting value."
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Hero Content Section - Clean Light Theme */}
      <div className="relative bg-slate-50 py-24 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10 text-center lg:text-left">
              <div>
                <span className="inline-block text-primary font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-primary/10 rounded-full">
                  ESTABLISHED EXCELLENCE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
                  Your Trusted Partner in <br />
                  <span className="text-primary italic">Reliable Logistics</span> <br />
                  & Supply Solutions.
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Founded on integrity and excellence, <span className="text-slate-900 font-semibold">TekAccess</span> is a trusted logistics and transport solutions provider.
                </p>
                <p className="text-slate-500 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                  We specialize in supply chain operations across multiple industries, combining efficiency, safety, and reliability to deliver results that exceed client expectations.
                </p>
              </div>

              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="gradient-btn text-xs px-8 py-3.5 inline-flex items-center gap-3 shadow-sm hover:scale-105 transition-all"
                >
                  PARTNER WITH US
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            {/* Right - Image with Premium Frame */}
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl">
                <img
                  src={aboutTruckLoading}
                  alt="TekAccess Logistics Operations"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>
              {/* Decorative gold/primary highlight */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section - Pure White */}
      <div className="relative py-24 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
               <div className="relative overflow-hidden rounded-[2rem] shadow-xl transform -rotate-1 border border-slate-100">
                <img
                  src={aboutMaterials}
                  alt="Modernized logistics operations"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary/20 rounded-br-3xl" />
            </div>

            {/* Right - Text */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Our Story</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  From import to final delivery, <span className="text-slate-900 font-medium">TekAccess</span> modernizes logistics operations with reliable transport solutions that connect businesses across Rwanda and beyond.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">Vision</p>
                  <p className="text-slate-900 font-medium leading-relaxed text-sm">
                    To drive growth and excellence, creating solutions that enrich lives and deliver lasting value for all stakeholders.
                  </p>
                </div>
                <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">Mission</p>
                  <p className="text-slate-900 font-medium leading-relaxed text-sm">
                    To be a trusted partner in all we do, delivering timely and efficient solutions with integrity and conscious practices, empowering all stakeholders to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="relative bg-slate-50 py-32 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Our Core Values</h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
              The heart of our organization, guiding every decision and action we take to serve you better.
            </p>
            <div className="mt-10 h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50">
                <div className="mb-8 p-5 bg-slate-50 rounded-2xl inline-block group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <div className="text-primary group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light group-hover:text-slate-800 transition-colors">
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
