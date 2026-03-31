import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useFirebase from "@/hooks/useFirebase";

interface Blog {
  id: string;
  collection: string;
  title?: string;
  name?: string;
  content?: string;
  body?: string;
  description?: string;
  text?: string;
  imageUrl?: string;
  date?: { seconds: number } | number;
  author?: string;
  category?: string;
}

const fallbackImages = {
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?aut=format&fit=crop&w=800&q=80",
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { isReady, getFirestore } = useFirebase();

  useEffect(() => {
    if (isReady) loadBlogs();
  }, [isReady]);

  const loadBlogs = async () => {
    const db = getFirestore();
    if (!db) { setLoading(false); return; }
    try {
      const allBlogs: Blog[] = [];
      const collections = ["blogs", "blog"];
      for (const col of collections) {
        try {
          const snapshot = await db.collection(col).get();
          snapshot.forEach((doc: any) => allBlogs.push({ id: doc.id, collection: col, ...doc.data() }));
        } catch (e) {}
      }
      allBlogs.sort((a, b) => {
        const dateA = a.date && typeof a.date === "object" ? a.date.seconds : (a.date as number) || 0;
        const dateB = b.date && typeof b.date === "object" ? b.date.seconds : (b.date as number) || 0;
        return dateB - dateA;
      });
      setBlogs(allBlogs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date?: { seconds: number } | number) => {
    if (!date) return "Recent";
    const timestamp = typeof date === "object" && date.seconds ? date.seconds * 1000 : date;
    return new Date(timestamp as number).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getTitle = (blog: Blog) => blog.title || blog.name || "Blog Post";
  const getContent = (blog: Blog) => blog.content || blog.body || blog.description || blog.text || "";
  const getPreview = (blog: Blog) => {
    const plainText = getContent(blog).replace(/<[^>]*>/g, "");
    return plainText.substring(0, 100) + (plainText.length > 100 ? "..." : "");
  };

  const categories = ["All", ...Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean))) as string[]];
  const filteredBlogs = activeCategory === "All" ? blogs : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section id="blogs" className="section-blogs relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="inline-block text-[#0A1437] font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1 bg-slate-100 rounded-full">
              insights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight mt-4">
              Latest from Our <br />
              <span className="italic opacity-80">Knowledge Hub.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat ? "bg-[#0A1437] text-white border-[#0A1437]" : "bg-white text-slate-400 border-slate-100 hover:border-[#0A1437] hover:text-[#0A1437]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <article key={blog.id} onClick={() => setSelectedBlog(blog)} className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-xl transition-all duration-700 hover:-translate-y-2">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={blog.imageUrl || fallbackImages.blog} alt={getTitle(blog)} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0A1437] shadow-sm">{blog.category || "General"}</span>
                </div>
              </div>
              <div className="p-10">
                <div className="mb-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <h3 className="mb-6 text-xl font-bold text-[#0A1437] leading-tight group-hover:text-[#0A1437]/80">{getTitle(blog)}</h3>
                <p className="mb-8 text-sm text-slate-500 font-light leading-relaxed line-clamp-2">{getPreview(blog)}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A1437] uppercase tracking-widest">
                  Read More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedBlog(null)} className="absolute inset-0 bg-[#0A1437]/60 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl flex flex-col">
              <button onClick={() => setSelectedBlog(null)} className="absolute right-8 top-8 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-[#0A1437] transition-all"><X className="h-6 w-6" /></button>
              <div className="overflow-y-auto p-12 lg:p-20">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
                  <img src={selectedBlog.imageUrl || fallbackImages.blog} alt={getTitle(selectedBlog)} className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto">
                  <span className="text-[#0A1437] font-bold text-xs uppercase tracking-widest mb-4 inline-block">{selectedBlog.category}</span>
                  <h3 className="text-3xl font-extrabold text-[#0A1437] mb-6">{getTitle(selectedBlog)}</h3>
                  <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: getContent(selectedBlog) }} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blogs;
