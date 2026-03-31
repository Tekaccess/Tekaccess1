import { useEffect, useState } from "react";
import { Package, Truck, Warehouse, Ship, Plane, Clock, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import useFirebase from "@/hooks/useFirebase";
interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  price?: number;
}
const fallbackImages = {
  service: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
};
const iconMap: {
  [key: string]: React.ElementType;
} = {
  package: Package,
  truck: Truck,
  warehouse: Warehouse,
  ship: Ship,
  plane: Plane,
  clock: Clock
};
const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
          servicesData.push({
            id: doc.id,
            ...doc.data()
          });
        });
        // Merge with initial services to ensure we have all 6
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

  const icons = [Truck, Zap, ShieldCheck, Warehouse, Package, ArrowRight];

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 opacity-40" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-primary/10 rounded-full">
              CORE SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Comprehensive <br />
              <span className="text-primary italic">Logistics</span> Services.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-lg font-light leading-relaxed">
            From regional haulage to complex supply chain optimization, we deliver precision at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-[2rem] border border-slate-100 p-10 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200/60 hover:border-primary/20 hover:-translate-y-2 overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors duration-700" />
                
                {/* Icon Container */}
                <div className="relative z-10 mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-slate-100/50">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Service Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 border border-slate-100 shadow-inner">
                   <img 
                    src={service.imageUrl || fallbackImages.service} 
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 mb-4 text-2xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-slate-600 text-sm font-light leading-relaxed mb-10">
                  {service.description}
                </p>

                {/* Action Link */}
                <a href="#contact" className="relative z-10 inline-flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest group/link">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center mt-16">
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Services;