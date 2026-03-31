import ceoImage from "@/assets/ceo.jpg";

const CeoSection = () => {
  return (
    <section id="ceo" className="relative py-32 overflow-hidden bg-white">
      {/* Decorative gradients */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* CEO Image Side */}
          <div className="relative group">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl bg-slate-100">
              {/* Main image with grayscale filter */}
              <img
                src={ceoImage}
                alt="MURINZI AHORUKOMEYE Bertin - CEO TekAccess"
                className="w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
              />
              {/* Subtle light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-slate-100 px-8 py-4 rounded-3xl shadow-2xl">
              <div className="text-center">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Founder & CEO</p>
                <p className="text-xs text-slate-500 font-light italic leading-tight">TekAccess Ltd</p>
              </div>
            </div>
            
            {/* Decorative gold/glow behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-3xl rounded-full opacity-50" />
          </div>

          {/* CEO Content Side */}
          <div className="lg:pl-8">
            <div className="mb-10 text-center lg:text-left">
              <span className="inline-block text-primary font-bold text-xs tracking-widest uppercase mb-4 py-1 px-3 bg-primary/10 rounded-full">
                CEO'S MESSAGE
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                MURINZI AHORUKOMEYE <br /> <span className="text-primary italic">Bertin</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Leading with vision, integrity, and a commitment to transforming logistics in Rwanda and beyond.
              </p>
            </div>

            {/* Main Message Block */}
            <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm mb-12 overflow-hidden group">
               <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <p className="text-[120px] font-serif font-bold text-primary">"</p>
              </div>
              <p className="relative z-10 text-xl text-slate-900 italic leading-relaxed font-light">
                "At TekAccess, we believe logistics is more than movement, it is trust, precision, and responsibility in action. Every client, any delivery, and every partnership is an opportunity to demonstrate excellence."
              </p>
              <p className="relative z-10 text-slate-600 leading-relaxed font-light mt-6">
                We are committed to building solutions that strengthen industries, empower communities, and contribute to Rwanda’s growth story. Thank you for trusting us to move your world.
              </p>
            </div>

            {/* Milestones / Impact */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {[
                { label: "Founded", val: "2018" },
                { label: "Impact", val: "500+" },
                { label: "Vision", val: "Excellence" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">{item.label}</p>
                  <p className="text-2xl font-bold text-primary">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
