import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Linkedin, Twitter } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useFirebase from "@/hooks/useFirebase";
import ceoImage from "@/assets/ceo.jpg";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  about?: string;
  bio?: string;
  imageUrl?: string;
}

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { isReady, getFirestore } = useFirebase();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialTeam: TeamMember[] = [
      {
        id: "bertin",
        name: "MURINZI AHORUKOMEYE Bertin",
        position: "Founder & CEO",
        about:
          "Founder of TekAccess with a vision to revolutionize the logistics industry in Rwanda through innovation and integrity.",
        bio: "At TekAccess, we believe logistics is more than movement, it is trust and responsibility in action.",
        imageUrl: ceoImage,
      },
      {
        id: "rayan",
        name: "NSONERA Rayan Ken",
        position: "Chief Operations Officer",
        about:
          "Oversees operations and business development, manages logistics workflows and premium customer experiences.",
        bio: "Commitment to operational excellence bridges the gap between ambitious goals and successful deliveries.",
      },
      {
        id: "alban",
        name: "SHIMWA Alban Symplice",
        position: "Chief Finance Officer",
        about:
          "Ensures sound financial planning, compliance, and resource management, driving financial integrity.",
        bio: "Dedicated to building a robust financial foundation that supports sustainable growth.",
      },
      {
        id: "keyla",
        name: "KEZA NKWAYA Keyla",
        position: "Administrative Assistant",
        about:
          "Supports coordination and monitoring of daily operations, administrative efficiency with organization and dedication.",
        bio: "Ensuring that the heart of TekAccess beats with precision and care.",
      },
      {
        id: "kevine",
        name: "MURENZI UWASE Kevine",
        position: "Operations Officer",
        about:
          "Manages daily operations and ensures smooth execution of logistics workflows with precision and efficiency.",
        bio: "Dedicated to optimizing operational processes for exceptional service delivery.",
      },
      {
        id: "richard",
        name: "MUGABO Richard",
        position: "Procurement Officer",
        about:
          "Oversees procurement strategies and supplier relationships, ensuring quality and cost-effective sourcing.",
        bio: "Committed to building strong partnerships and securing the best resources for TekAccess.",
      },
      {
        id: "joy",
        name: "NTIZIMIRA Joy",
        position: "IT Officer",
        about:
          "Manages technology infrastructure and digital systems, driving innovation through technical excellence.",
        bio: "Passionate about leveraging technology to solve complex logistics challenges.",
      },
    ];

    if (isReady) {
      loadTeam(initialTeam);
    } else {
      setTeam(initialTeam);
      setLoading(false);
    }
  }, [isReady]);

  const loadTeam = async (baseTeam: TeamMember[]) => {
    const db = getFirestore();
    if (!db) {
      setTeam(baseTeam);
      setLoading(false);
      return;
    }
    try {
      const snapshot = await db.collection("team").get();
      if (snapshot.empty) {
        setTeam(baseTeam);
      } else {
        const dbData: Record<string, TeamMember> = {};
        snapshot.forEach((doc: any) => {
          dbData[doc.id] = { ...doc.data(), id: doc.id };
        });
        const mergedTeam = baseTeam.map((member) => {
          const dbMember = Object.values(dbData).find(
            (m) =>
              m.name?.includes(member.name.split(" ").pop() || "") ||
              m.position === member.position,
          );
          if (dbMember) {
            return {
              ...member,
              imageUrl:
                member.id === "bertin"
                  ? ceoImage
                  : dbMember.imageUrl || member.imageUrl,
              about: dbMember.about || member.about,
              bio: dbMember.bio || member.bio,
            };
          }
          return member;
        });
        setTeam(mergedTeam);
      }
    } catch (err) {
      console.error("Error loading team:", err);
      setTeam(baseTeam);
    } finally {
      setLoading(false);
    }
  };

  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && team.length > 0) {
      const newIndex = Math.round(scrollContainerRef.current.scrollLeft / 340);
      setActiveIndex(Math.min(newIndex, team.length - 1));
    }
  };

  if (loading && team.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-12 w-12 border-4 border-[#0A1437] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section
      id="team"
      className="section-team relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[#0A1437] font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight mt-4">
              The Visionaries <br />
              Behind <span className="italic opacity-80">TekAccess.</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => scrollTo("left")}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-[#0A1437] hover:text-white transition-all group"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollTo("right")}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-[#0A1437] hover:text-white transition-all group"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4 -mx-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {team.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="relative flex-shrink-0 w-[300px] sm:w-[340px] h-[500px] sm:h-[550px] rounded-[2rem] overflow-hidden snap-center group cursor-pointer transition-all duration-700 hover:shadow-2xl"
              >
                <img
                  src={
                    member.imageUrl ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?aut=format&fit=crop&w=800&q=80"
                  }
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between gap-4 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-[#0A1437] truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {member.position}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#0A1437] hover:bg-[#0A1437] hover:text-white transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                scrollContainerRef.current?.scrollTo({
                  left: index * 340,
                  behavior: "smooth",
                })
              }
              className={`h-2 rounded-full transition-all duration-500 ${index === activeIndex ? "w-12 bg-[#0A1437]" : "w-2 bg-slate-200"}`}
            />
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-0 rounded-[2.5rem] shadow-2xl">
          {selectedMember && (
            <div className="flex flex-col md:flex-row min-h-[500px]">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={
                    selectedMember.imageUrl ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?aut=format&fit=crop&w=800&q=80"
                  }
                  alt={selectedMember.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="md:w-3/5 p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-8 right-8 text-slate-400 hover:text-[#0A1437] transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="mb-8">
                  <span className="inline-block text-[#0A1437] font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1 bg-slate-100 rounded-full">
                    {selectedMember.position}
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#0A1437]">
                    {selectedMember.name}
                  </h3>
                </div>
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
                  {selectedMember.about}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-[#0A1437] hover:text-white transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-[#0A1437] hover:text-white transition-all"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
