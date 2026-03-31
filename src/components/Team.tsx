import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Briefcase, Target, Quote, Users } from "lucide-react";
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
  purpose?: string;
  experience?: string;
  quote?: string;
}

const fallbackImages = {
  team: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

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
        about: "Founder of TekAccess with a vision to revolutionize the logistics industry in Rwanda through innovation, integrity, and uncompromising dedication to client success.",
        bio: "At TekAccess, we believe logistics is more than movement, it is trust, precision, and responsibility in action.",
        imageUrl: ceoImage,
      },
      {
        id: "rayan",
        name: "NSONERA Rayan Ken",
        position: "Chief Operations Officer",
        about: "Oversees operations and business development, manages logistics workflows and premium customer experiences.",
        bio: "Commitment to operational excellence and streamlining complex logistics bridges the gap between ambitious goals and successful deliveries.",
      },
      {
        id: "alban",
        name: "SHIMWA Alban Symplice",
        position: "Chief Finance Officer",
        about: "Ensures sound financial planning, compliance, and resource management, driving financial integrity and supporting strategic expansion through data-driven decisions.",
        bio: "Dedicated to building a robust financial foundation that supports sustainable growth and long-term value creation.",
      },
      {
        id: "keyla",
        name: "KEZA NKWAYA Keyla",
        position: "Administrative Assistant",
        about: "Supports coordination and monitoring of daily operations, administrative efficiency with organization and dedication.",
        bio: "Ensuring that the heart of TekAccess beats with precision and care.",
      }
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

        const mergedTeam = baseTeam.map(member => {
          const dbMember = Object.values(dbData).find(m => 
            m.name?.includes(member.name.split(' ').pop() || '') || 
            m.position === member.position
          );
          
          if (dbMember) {
            return {
              ...member,
              imageUrl: member.id === "bertin" ? ceoImage : (dbMember.imageUrl || member.imageUrl),
              about: dbMember.about || member.about,
              bio: dbMember.bio || member.bio,
              purpose: dbMember.purpose,
              experience: dbMember.experience,
              quote: dbMember.quote
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

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 340;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && team.length > 0) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = 340;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(newIndex, team.length - 1));
    }
  };

  const openMemberProfile = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeMemberProfile = () => {
    setSelectedMember(null);
  };

  if (loading && team.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section id="team" className="section-team relative py-32 overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 flex items-end justify-between">
          <div className="text-left">
            <span className="inline-block text-primary font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-primary/10 rounded-full">
              VISIONARY LEADERS
            </span>
            <h2 className="relative mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Our Leadership <br />
              <span className="text-primary italic">Team</span>
            </h2>
            <p className="max-w-xl text-slate-600 text-lg font-light leading-relaxed">
              Meet the visionary minds driving excellence, innovation, and trust at TekAccess.
            </p>
            <div className="mt-8 h-1 w-24 bg-primary rounded-full hidden lg:block" />
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => scrollTo('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm transition-all hover:bg-primary hover:text-white hover:border-primary group"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm transition-all hover:bg-primary hover:text-white hover:border-primary group"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Team Horizontal Scroll */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide pt-4 px-4 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {team.map((member) => (
              <div
                key={member.id}
                onClick={() => openMemberProfile(member)}
                className="relative flex-shrink-0 w-[300px] sm:w-[340px] h-[500px] sm:h-[580px] rounded-[2rem] overflow-hidden snap-center group cursor-pointer transition-all duration-700 hover:scale-[0.98] border border-slate-200 shadow-xl bg-slate-50"
              >
                {/* Full Image Background with Grayscale Float Effect */}
                <img
                  src={member.imageUrl || fallbackImages.team}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                
                {/* Floating Indicator */}
                <div className="absolute top-6 right-6 bg-white/40 backdrop-blur-xl border border-white/20 rounded-full h-12 w-12 flex items-center justify-center text-slate-900 scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ChevronRight className="h-6 w-6" />
                </div>
                
                {/* Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-3 drop-shadow-sm">{member.position}</p>
                  <h4 className="text-2xl font-extrabold mb-4 leading-tight drop-shadow-md">
                    {member.name}
                  </h4>
                  <p className="text-sm text-white/80 font-light line-clamp-3 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {member.about}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * 340,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? 'w-12 bg-primary' 
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Member ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Team Member Profile Modal */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && closeMemberProfile()}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-0 rounded-[2.5rem] animate-in zoom-in-95 duration-500 shadow-2xl">
          {selectedMember && (
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Image Side */}
              <div className="relative lg:w-2/5 h-80 lg:h-auto overflow-hidden bg-slate-100">
                <img
                  src={selectedMember.imageUrl || fallbackImages.team}
                  alt={selectedMember.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white via-white/40 to-transparent" />
                
                {/* Position overlay */}
                <div className="absolute bottom-8 left-8 lg:hidden">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">{selectedMember.position}</p>
                  <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">{selectedMember.name}</h3>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center bg-slate-50 relative">
                {/* Close Button */}
                <button
                  onClick={closeMemberProfile}
                  className="absolute top-8 right-8 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Name & Title - Desktop */}
                <div className="hidden lg:block mb-12">
                   <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Leadership Profile</p>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">{selectedMember.name}</h3>
                  <p className="text-lg text-slate-600 font-light italic">{selectedMember.position}</p>
                </div>

                {/* Bio / About */}
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-1 w-8 bg-primary rounded-full" />
                      <h4 className="font-bold text-slate-900 tracking-widest text-[10px] uppercase">About</h4>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed font-light">
                      {selectedMember.about}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-1 w-8 bg-primary rounded-full opacity-50" />
                      <h4 className="font-bold text-slate-700 tracking-widest text-[10px] uppercase">Vision</h4>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed font-light text-base">
                      "{selectedMember.bio}"
                    </p>
                  </div>
                </div>

                {/* Decorative highlight */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-[80px]" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
