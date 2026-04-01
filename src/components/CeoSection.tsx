import ceoImage from "@/assets/ceo.jpg";

const CeoSection = () => {
  return (
    <section id="ceo" className="relative py-32 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* CEO Image Side */}
          <div className="relative group max-w-md mx-auto lg:mx-0">
            <div className="relative flex overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl bg-white aspect-[4/5]">
              <img
                src={ceoImage}
                alt="MURINZI AHORUKOMEYE Bertin - CEO TekAccess"
                className="w-full h-full object-cover object-[center_20%] transition-all duration-1000 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
            </div>

            {/* Floating badge centered on image */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-brand-red px-10 py-6 rounded-[1.5rem] shadow-2xl w-[240px] z-20">
              <div className="text-center text-white">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Founder & CEO</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight font-black">TekAccess Ltd</p>
              </div>
            </div>
          </div>

          {/* CEO Content Side */}
          <div className="lg:pl-8 text-center lg:text-left">
            <div className="mb-12">
              <span className="inline-block text-brand-red font-bold text-xs tracking-widest uppercase mb-6 py-1 px-3 bg-brand-red/10 rounded-full border border-brand-red/20 leading-tight">
                CEO'S MESSAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] mb-6 leading-tight tracking-tight">
                MURINZI AHORUKOMEYE <br /> <span className="italic opacity-80 text-brand-red">Bertin</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Leading with vision, integrity, and a commitment to transforming logistics in Rwanda and beyond.
              </p>
            </div>

            {/* Main Message Block */}
            <div className="relative p-10 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm mb-12 overflow-hidden group">
              <p className="relative z-10 text-xl text-[#0A1437] italic leading-relaxed font-light">
                "At TekAccess, we believe logistics is more than movement, it is trust, precision, and responsibility in action. Every client, any delivery, and every partnership is an opportunity to demonstrate excellence."
              </p>
              <div className="my-8 h-px w-12 bg-[#0A1437]/20" />
              <p className="relative z-10 text-slate-600 leading-relaxed font-light">
                We are committed to building solutions that strengthen industries, empower communities, and contribute to Rwanda’s growth story. Thank you for trusting us to move your world.
              </p>
            </div>

            {/* Impact */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 pt-6 border-t border-slate-100">
              {[
                { label: "Founded", val: "2018" },
                { label: "Impact", val: "500+" },
                { label: "Vision", val: "Excellence" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{item.label}</p>
                  <p className="text-2xl font-black text-[#0A1437]">{item.val}</p>
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
