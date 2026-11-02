import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HR_ORIGIN = "https://www.tekaccess.live";

const Careers = () => {
  const navigate = useNavigate();
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers | TekAccess";
    const handleMessage = (e: MessageEvent) => {
      const frame = frameRef.current;
      if (e.origin === HR_ORIGIN && frame && e.source === frame.contentWindow && e.data?.type === "tekaccess-apply-height") {
        frame.style.height = `${e.data.height}px`;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0A1437] hover:text-brand-red transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back
        </button>
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1437] leading-tight">
          Careers
        </h1>
        <p className="mt-4 mb-8 text-slate-500">
          Browse our open jobs and apply below. Can't see the list?{" "}
          <a
            href={`${HR_ORIGIN}/careers`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/90"
          >
            Open it in a new tab
          </a>
          .
        </p>
        <iframe
          ref={frameRef}
          src={`${HR_ORIGIN}/careers?embed=1`}
          title="Open jobs"
          className="w-full border-0 min-h-[700px]"
        />
      </div>
    </main>
  );
};

export default Careers;
