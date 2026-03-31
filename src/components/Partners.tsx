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
  const partners = [
    { name: "EDCL", logo: edclLogo },
    { name: "CHUB", logo: chubLogo },
    { name: "CHUK", logo: chukLogo },
    { name: "Gasabo District", logo: gatsiboLogo },
    { name: "RAB", logo: rabLogo },
    { name: "Rwanda National Police", logo: rnpLogo },
    { name: "Cheetah", logo: cheetahLogo },
    { name: "REMA", logo: remaLogo },
    { name: "Nyaruguru", logo: nyaruguruLogo },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#0A1437] font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1 bg-slate-100 rounded-full">
            Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight">
            Trusted by Leading Institutions
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
