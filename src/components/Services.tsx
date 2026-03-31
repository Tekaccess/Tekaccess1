import { useEffect, useState } from "react";
import { Package, Truck, Warehouse, Ship, Plane, Clock, ArrowRight, Zap, ShieldCheck } from "lucide-react";
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
      id: "transport",
      title: "Transport & Haulage",
      description: "Reliable and efficient inland transport solutions across Rwanda and the region, ensuring your goods reach their destination safely and on time.",
      imageUrl: "https://images.unsplash.com/photo-1519003722824-192d992a6058?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "supply-chain",
      title: "Supply Chain Optimization",
      description: "Data-driven strategies to streamline your logistics, reduce costs, and improve overall operational efficiency from end-to-end.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "customs",
      title: "Customs Clearance & Compliance",
      description: "Expert handling of all regulatory requirements, ensuring smooth cross-border operations and full legal compliance for your international trade.",
      imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "warehouse",
      title: "Warehouse Management",
      description: "Secure, tech-enabled storage and inventory solutions that provide real-time visibility and efficient handling of your valuable assets.",
      imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "project-logistics",
      title: "Project Logistics",
      description: "Specialized logistics planning and execution for large-scale infrastructure and industrial projects, handling complex cargo with precision.",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "general-supply",
      title: "General Supply Services",
      description: "Reliable procurement and delivery of materials, equipment, and consumables tailored to meet your business's specific operational needs.",
      imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const icons = [Truck, Zap, ShieldCheck, Warehouse, Package, ArrowRight];

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

  const ServiceIcons = [Truck, Clock, ShieldCheck, Warehouse, Package, Ship, Zap];

  return (
    <section id="services" className="section-services relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <span className="inline-block text-[#0A1437] font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight mt-4">
            Specialized Logistics <br />
            For <span className="italic opacity-80">Every Industry.</span>
          </h2>
          <div className="mt-10 h-1.5 w-24 bg-[#0A1437] mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ServiceIcons[index % ServiceIcons.length];
            return (
              <div key={service.id} className="group relative p-12 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-[#0A1437] group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100/50">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-6 text-2xl font-bold text-[#0A1437] tracking-tight transition-colors">
                  {service.title}
                </h3>
                <p className="mb-8 text-slate-600 font-light leading-relaxed">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-3 text-xs font-bold text-[#0A1437] uppercase tracking-widest group/btn transition-all duration-300">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
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