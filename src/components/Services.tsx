import { useEffect, useState } from "react";
import { Package, Truck, Warehouse, Ship, Plane, Clock, ArrowRight, Zap, ShieldCheck, Train } from "lucide-react";
import useFirebase from "@/hooks/useFirebase";

// Import local assets
import truckImg from "@/assets/hero-bg-3.jpg";
import shipImg from "@/assets/Mobile_991x558_V01 shipping internationally jpg.jpg";
import trainImg from "@/assets/train.jpg";
import coalImg from "@/assets/coal.jpg";
import gypsumImg from "@/assets/gypsum.jpg";
import clinkerImg from "@/assets/clinker.jpg";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const { isReady, getFirestore } = useFirebase();

  const initialServices: Service[] = [
    {
      id: "trucks-delivery",
      title: "Logistics - Trucks Delivery",
      description: "We have demonstrated operational excellence and precision logistics for large scale industrial projects. Regional transport to Tanzania, Rwanda, Kenya, DRC and Uganda, ensuring timely, secure, cost-effective and on-time deliveries to clients.",
      imageUrl: truckImg
    },
    {
      id: "ship-delivery",
      title: "Logistics - Ship Delivery",
      description: "We supplied clinker and gypsum through reliable ship deliveries from Gisenyi to Katana via Lake Kivu, ensuring steady support for cement production. This business demonstrated our capability to manage cross-border supply chains with consistency and reliability.",
      imageUrl: shipImg
    },
    {
      id: "train-delivery",
      title: "Logistics - Train Delivery",
      description: "Under our framework business, we manage efficient gypsum transport by train from Dodoma to Kigoma, Tanzania, ensuring reliable and consistent delivery to support cement manufacturing requirements.",
      imageUrl: trainImg
    },
    {
      id: "coal-supply",
      title: "Coal Supply",
      description: "Coal supply sourced in Songea, Tanzania — our extensive network with the region’s leading miners ensures a consistent and high-quality supply for industrial needs.",
      imageUrl: coalImg
    },
    {
      id: "gypsum-supply",
      title: "Gypsum Supply",
      description: "Gypsum supply sourced in Garissa, Kenya — our extensive network with the region’s leading miners ensures a consistent and high-quality supply for industrial needs.",
      imageUrl: gypsumImg
    },
    {
      id: "clinker-supply",
      title: "Clinker Supply",
      description: "Clinker supply sourced in Kenya  — our extensive network with the region’s leading miners ensures a consistent and high-quality supply for industrial needs.",
      imageUrl: clinkerImg
    }
  ];

  const ServiceIcons = [Truck, Ship, Train, Zap];

  useEffect(() => {
    if (isReady) {
      loadServices();
    } else {
      setServices(initialServices);
      setLoading(false);
    }
  }, [isReady]);

  const loadServices = async () => {
    const db = getFirestore();
    if (!db) {
      setServices(initialServices);
      setLoading(false);
      return;
    }
    try {
      const snapshot = await db.collection("services").get();
      if (snapshot.empty) {
        setServices(initialServices);
      } else {
        const servicesData: Service[] = [];
        snapshot.forEach((doc: any) => {
          servicesData.push({ id: doc.id, ...doc.data() });
        });
        const merged = initialServices.map(is => {
          const dbs = servicesData.find(s => s.title === is.title);
          return dbs ? { ...is, ...dbs, imageUrl: dbs.imageUrl || is.imageUrl } : is;
        });
        setServices(merged);
      }
    } catch (err) {
      console.error("Error loading services:", err);
      setServices(initialServices);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="services" className="section-services relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <span className="inline-block text-brand-red font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-brand-red/10 rounded-full border border-brand-red/20">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight mt-4">
            Comprehensive <span className=" opacity-80">Logistics Solutions.</span>
          </h2>
          <div className="mt-10 h-1.5 w-24 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ServiceIcons[index % ServiceIcons.length];
            const titleParts = service.title.split(" - ");
            const category = titleParts.length > 1 ? titleParts[0] : "Services";
            const mainTitle = titleParts.length > 1 ? titleParts[1] : service.title;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-red/5 h-full"
              >
                {service.imageUrl && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1437]/60 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-brand-red text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                        {category}
                      </span>
                    </div>

                    {index < 3 && (
                      <div className="absolute -bottom-4 left-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-red shadow-xl border border-slate-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                    )}
                  </div>
                )}
                <div className="flex-1 p-8 pt-10 flex flex-col">
                  <h3 className="mb-3 text-xl font-bold text-[#0A1437] tracking-tight group-hover:text-brand-red transition-colors">
                    {mainTitle}
                  </h3>
                  <p className="mb-6 text-slate-500 font-light leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>
                  <div className="pt-5 border-t border-slate-50 mt-auto">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[10px] font-bold text-brand-red uppercase tracking-widest group/btn transition-all duration-300"
                    >
                      EXPLORE DETAILS
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 p-12 rounded-[2.5rem] bg-[#0A1437] text-white overflow-hidden relative group">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Need custom logistics?</h3>
              <p className="text-white/70 font-light text-lg">
                We provide tailored operational strategies designed to handle your most complex supply chain challenges.
              </p>
            </div>
            <div className="lg:text-right">
              <a href="#contact" className="inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest transition-all hover:scale-105 shadow-xl shadow-brand-red/20">
                REQUEST A CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;