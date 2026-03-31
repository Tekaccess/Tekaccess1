import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, X, Newspaper } from "lucide-react";
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
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { isReady, getFirestore } = useFirebase();

  useEffect(() => {
    if (isReady) {
      loadBlogs();
    }
  }, [isReady]);

  const loadBlogs = async () => {
    const db = getFirestore();
    if (!db) {
      setError("Database not connected");
      setLoading(false);
      return;
    }

    try {
      const allBlogs: Blog[] = [];

      // Try 'blogs' collection
      try {
        const blogsSnapshot = await db.collection("blogs").get();
        blogsSnapshot.forEach((doc: { id: string; data: () => Blog }) => {
          allBlogs.push({ id: doc.id, collection: "blogs", ...doc.data() });
        });
      } catch (err) {
        console.log("No 'blogs' collection:", err);
      }

      // Try 'blog' collection
      try {
        const blogSnapshot = await db.collection("blog").get();
        blogSnapshot.forEach((doc: { id: string; data: () => Blog }) => {
          allBlogs.push({ id: doc.id, collection: "blog", ...doc.data() });
        });
      } catch (err) {
        console.log("No 'blog' collection:", err);
      }

      // Sort by date
      allBlogs.sort((a, b) => {
        const dateA =
          a.date && typeof a.date === "object" ? a.date.seconds : (a.date as number) || 0;
        const dateB =
          b.date && typeof b.date === "object" ? b.date.seconds : (b.date as number) || 0;
        return dateB - dateA;
      });

      setBlogs(allBlogs);
    } catch (err) {
      console.error("Error loading blogs:", err);
      setError("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date?: { seconds: number } | number) => {
    if (!date) return "Recent";
    try {
      const timestamp =
        typeof date === "object" && date.seconds ? date.seconds * 1000 : date;
      return new Date(timestamp as number).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  const getContent = (blog: Blog) => {
    return blog.content || blog.body || blog.description || blog.text || "";
  };

  const getTitle = (blog: Blog) => {
    return blog.title || blog.name || "Blog Post";
  };

  const getPreview = (blog: Blog) => {
    const content = getContent(blog);
    const plainText = content.replace(/<[^>]*>/g, "");
    return plainText.substring(0, 100) + (plainText.length > 100 ? "..." : "");
  };

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean))) as string[]];
  
  // Filter blogs by category
  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section id="blogs" className="section-blogs relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-primary font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-primary/10 rounded-full">
            FIELD ANALYSIS & INSIGHTS
          </span>
          <h2 className="relative mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Latest <br />
            <span className="text-primary italic">Insights</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-lg font-light leading-relaxed">
            Stay updated with the latest trends and innovations in the logistics and supply chain industry.
          </p>
          <div className="mt-10 h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        {!loading && !error && blogs.length > 0 && (
          <div className="mb-20 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3 p-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-7 py-2.5 rounded-full text-xs font-bold transition-all duration-500 uppercase tracking-widest ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105'
                      : 'text-slate-500 hover:text-primary hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="mt-6 text-slate-400 font-bold text-xs uppercase tracking-widest">Compiling field data...</p>
          </div>
        )}

        {/* Blogs Grid */}
        {!loading && !error && filteredBlogs.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <div
                key={`${blog.collection}-${blog.id}`}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.imageUrl || fallbackImages.blog}
                    alt={getTitle(blog)}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImages.blog;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {blog.category && (
                    <div className="absolute left-6 top-6">
                      <span className="rounded-full bg-white/90 backdrop-blur-xl px-4 py-2 text-[10px] font-bold text-primary shadow-lg border border-white/20 uppercase tracking-[0.2em]">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-10">
                  {/* Meta */}
                  <div className="mb-6 flex items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary opacity-60" />
                      {formatDate(blog.date)}
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight tracking-tight">
                    {getTitle(blog)}
                  </h3>
                  <p className="mb-10 text-slate-600 text-sm font-light leading-relaxed line-clamp-2">
                    {getPreview(blog)}
                  </p>

                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="inline-flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.2em] group/btn"
                  >
                    CONTINUE READING
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedBlog && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 animate-in fade-in duration-500"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="relative bg-white max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] shadow-[0_32px_128px_rgba(0,0,0,0.15)] animate-in zoom-in-95 duration-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute right-8 top-8 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-300 hover:text-primary hover:border-primary border border-slate-100 transition-all shadow-xl"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col">
                <div className="h-80 w-full overflow-hidden">
                  <img
                    src={selectedBlog.imageUrl || fallbackImages.blog}
                    alt={getTitle(selectedBlog)}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-12 sm:p-24">
                  <div className="mb-8 flex flex-wrap items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary opacity-60" />
                      {formatDate(selectedBlog.date)}
                    </div>
                    {selectedBlog.author && (
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-primary opacity-60" />
                        {selectedBlog.author}
                      </div>
                    )}
                    {selectedBlog.category && (
                      <span className="px-5 py-2 bg-slate-50 rounded-full text-primary border border-slate-100">
                        {selectedBlog.category}
                      </span>
                    )}
                  </div>

                  <h2 className="mb-10 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    {getTitle(selectedBlog)}
                  </h2>

                  <div
                    className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: getContent(selectedBlog) || "Editorial content coming soon.",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
