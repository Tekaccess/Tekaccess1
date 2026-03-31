import cheetahLogo from "@/assets/partners/cheetah.jpg";
import chubLogo from "@/assets/partners/chub.webp";
import chukLogo from "@/assets/partners/chuk.webp";
import edclLogo from "@/assets/partners/edcl.webp";
import gatsiboLogo from "@/assets/partners/gatsibo.webp";
import nyaruguruLogo from "@/assets/partners/nyaruguru.webp";
import rabLogo from "@/assets/partners/rab.webp";
import remaLogo from "@/assets/partners/rema.webp";
import rnpLogo from "@/assets/partners/rnp.png";

const Partners = () => {
  const partnerRows = [
    [
      { name: "EDCL", logo: edclLogo, height: "h-12 md:h-16" },
      { name: "CHUB", logo: chubLogo, height: "h-12 md:h-20" },
      { name: "CHUK", logo: chukLogo, height: "h-12 md:h-16" },
    ],
    [
      { name: "Gasabo District", logo: gatsiboLogo, height: "h-12 md:h-24" },
      { name: "RAB", logo: rabLogo, height: "h-12 md:h-24" },
      { name: "Rwanda National Police", logo: rnpLogo, height: "h-12 md:h-24" },
    ],
    [
      { name: "Cheetah", logo: cheetahLogo, height: "h-12 md:h-28" },
      { name: "REMA", logo: remaLogo, height: "h-12 md:h-16" },
      { name: "Nyaruguru", logo: nyaruguruLogo, height: "h-12 md:h-24" },
    ],
  ];

  return (
    <section className="bg-white py-24 lg:py-36 overflow-hidden border-y border-slate-100 relative">
      {/* Subtle depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {/* Left Side: Title */}
          <div className="lg:w-1/3 flex flex-col justify-center mb-16 lg:mb-0 lg:pr-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Our Trusted <br className="hidden lg:block" />
              Strategic <br className="hidden lg:block" />
              Partners
            </h2>
            <p className="text-slate-600 text-lg font-light max-w-md mx-auto lg:mx-0">
              Building long-term relationships with Rwanda's leading institutions to deliver excellence together.
            </p>
          </div>

          {/* Right Side: Grid of Logos */}
          <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-200 pt-16 lg:pt-0 lg:pl-12">
            {partnerRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`grid grid-cols-1 sm:grid-cols-3 ${
                  rowIndex !== partnerRows.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                {row.map((partner, colIndex) => (
                  <div 
                    key={colIndex} 
                    className={`flex items-center justify-center p-8 md:p-14 transition-all duration-500 group hover:bg-slate-50 ${
                      colIndex !== row.length - 1 ? "sm:border-r sm:border-slate-100" : ""
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`${partner.height} w-auto object-contain transition-all duration-500 group-hover:scale-110 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

