import { useEffect, useState } from "react";
import { Package, Truck, Warehouse, Ship, Plane, Clock, ArrowRight, Zap, ShieldCheck, Train } from "lucide-react";
import useFirebase from "@/hooks/useFirebase";

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
      imageUrl: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ship-delivery",
      title: "Logistics - Ship Delivery",
      description: "We supplied clinker and gypsum through reliable ship deliveries from Gisenyi to Katana via Lake Kivu, ensuring steady support for cement production. This business demonstrated our capability to manage cross-border supply chains with consistency and reliability.",
      imageUrl: "https://images.unsplash.com/photo-1494412574743-019485b7828d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "train-delivery",
      title: "Logistics - Train Delivery",
      description: "Under our framework business, we manage efficient gypsum transport by train from Dodoma to Kigoma, Tanzania, ensuring reliable and consistent delivery to support cement manufacturing requirements.",
      imageUrl: "https://images.unsplash.com/photo-1532105956626-ce0121abc48a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "coal-supply",
      title: "Coal Supply",
      description: "Coal supply sourced in Songea, Tanzania — our extensive network with the region’s leading miners ensures a consistent and high-quality supply for industrial needs.",
      imageUrl: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const icons = [Truck, Ship, Train, Zap];

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
            return dbs ? { ...is, ...dbs } : is;
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

  const ServiceIcons = [Truck, Ship, Train, Zap];

  return (
    <section id="services" className="section-services relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <span className="inline-block text-brand-red font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-brand-red/10 rounded-full border border-brand-red/20">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight mt-4">
            Comprehensive <span className="italic opacity-80">Logistics Solutions.</span>
          </h2>
          <div className="mt-10 h-1.5 w-24 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ServiceIcons[index % ServiceIcons.length];
            return (
              <div key={service.id} className="group relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
                {service.imageUrl && (
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1437]/40 to-transparent" />
                    <div className="absolute top-6 left-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-[#0A1437] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                )}
                <div className="p-8 sm:p-10">
                  <h3 className="mb-4 text-xl sm:text-2xl font-bold text-[#0A1437] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mb-8 text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <a href="#contact" className="inline-flex items-center gap-3 text-xs font-bold text-brand-red uppercase tracking-widest group/btn transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
                <a href="#contact" className="inline-block bg-white text-[#0A1437] px-10 py-5 rounded-full font-bold text-sm tracking-widest transition-all hover:scale-105 shadow-xl">
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