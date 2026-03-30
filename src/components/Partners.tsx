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
    <section className="bg-white py-20 lg:py-32 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Title */}
          <div className="lg:w-1/3 flex flex-col justify-center mb-12 lg:mb-0 lg:pr-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Trusted by Our <br className="hidden lg:block" />
              customers & <br className="hidden lg:block" />
              partners
            </h2>
            <div className="mt-6 h-1 w-12 bg-primary rounded-full lg:hidden" />
          </div>

          {/* Right Side: Grid of Logos */}
          <div className="lg:w-2/3 lg:border-l lg:border-gray-200">
            {partnerRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`grid grid-cols-1 sm:grid-cols-3 ${
                  rowIndex !== partnerRows.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {row.map((partner, colIndex) => (
                  <div 
                    key={colIndex} 
                    className={`flex items-center justify-center p-8 md:p-12 transition-all duration-500 group hover:bg-gray-50/50 ${
                      colIndex !== row.length - 1 ? "sm:border-r sm:border-gray-100/50" : ""
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`${partner.height} w-auto object-contain transition-all duration-500 group-hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100`}
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

