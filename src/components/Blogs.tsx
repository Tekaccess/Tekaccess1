import { useState, useEffect } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const navigate = useNavigate();
  const { isReady, getFirestore } = useFirebase();

  useEffect(() => {
    if (isReady) loadBlogs();
  }, [isReady]);

  const loadBlogs = async () => {
    const db = getFirestore();
    if (!db) {
      setLoading(false);
      return;
    }
    try {
      const allBlogs: Blog[] = [];
      const collections = ["blogs", "blog"];
      for (const col of collections) {
        try {
          const snapshot = await db.collection(col).get();
          snapshot.forEach((doc: any) =>
            allBlogs.push({ id: doc.id, collection: col, ...doc.data() }),
          );
        } catch (e) {}
      }
      allBlogs.sort((a, b) => {
        const dateA =
          a.date && typeof a.date === "object"
            ? a.date.seconds
            : (a.date as number) || 0;
        const dateB =
          b.date && typeof b.date === "object"
            ? b.date.seconds
            : (b.date as number) || 0;
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
    const timestamp =
      typeof date === "object" && date.seconds ? date.seconds * 1000 : date;
    return new Date(timestamp as number).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTitle = (blog: Blog) => blog.title || blog.name || "Blog Post";
  const getPreview = (blog: Blog) => {
    const plainText = (
      blog.content ||
      blog.body ||
      blog.description ||
      blog.text ||
      ""
    ).replace(/<[^>]*>/g, "");
    return plainText.substring(0, 120) + (plainText.length > 120 ? "..." : "");
  };

  const categories = [
    "All",
    ...(Array.from(
      new Set(blogs.map((blog) => blog.category).filter(Boolean)),
    ) as string[]),
  ];
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section id="blogs" className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-block text-brand-red font-bold text-xs tracking-widest uppercase mb-4 px-3 py-1 bg-brand-red/10 rounded-full border border-brand-red/20 shadow-sm">
            PAST ACHIEVEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1437] leading-tight tracking-tight mt-4">
            Our Proven <span className="opacity-70">Track Record.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Explore our successful logistics projects and milestones that
            demonstrate our commitment to operational excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/20"
                  : "bg-white text-slate-500 border-slate-200 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 border-4 border-[#0A1437] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.imageUrl || fallbackImages.blog}
                    alt={getTitle(blog)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0A1437] shadow-sm">
                      {blog.category || "General"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1437] mb-3 line-clamp-2 group-hover:text-[#0A1437]/80 transition-colors">
                    {getTitle(blog)}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-5 line-clamp-2">
                    {getPreview(blog)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-widest">
                      Read More{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                    {blog.author && (
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <User className="h-3 w-3" />
                        <span className="truncate max-w-[100px]">
                          {blog.author}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
