import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import useFirebase from "@/hooks/useFirebase";
import { staticBlogs } from "@/data/staticBlogs";

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

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const { isReady, getFirestore } = useFirebase();

  useEffect(() => {
    if (isReady && id) {
      loadBlog(id);
    } else if (id) {
      // Check static blogs first as fallback or if Firebase not ready
      const staticBlog = staticBlogs.find(b => b.id === id);
      if (staticBlog) {
        setBlog(staticBlog as any);
        setLoading(false);
      } else if (!isReady) {
        // Fallback: create a placeholder for demo
        setBlog({
          id,
          collection: "blogs",
          title: "Blog Post",
          content: "<p>Blog content will appear here once Firebase is connected.</p>",
          imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?aut=format&fit=crop&w=1200&q=80",
          category: "General",
          date: Date.now() / 1000,
        });
        setLoading(false);
      }
    }
  }, [isReady, id]);

  const loadBlog = async (blogId: string) => {
    const db = getFirestore();
    if (!db) {
      setLoading(false);
      return;
    }
    try {
      const collections = ["blogs", "blog"];
      for (const col of collections) {
        try {
          const doc = await db.collection(col).doc(blogId).get();
          if (doc.exists) {
            setBlog({ id: doc.id, collection: col, ...doc.data() });
            break;
          }
        } catch (e) {
          continue;
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date?: { seconds: number } | number) => {
    if (!date) return "";
    const timestamp = typeof date === "object" && date.seconds ? date.seconds * 1000 : date;
    return new Date(timestamp as number).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTitle = () => blog?.title || blog?.name || "Blog Post";
  const getContent = () => blog?.content || blog?.body || blog?.description || blog?.text || "";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="h-12 w-12 border-4 border-[#0A1437] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A1437] mb-4">Blog Post Not Found</h1>
          <p className="text-slate-500 mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#0A1437] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#0A1437]/80 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={blog.imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?aut=format&fit=crop&w=1200&q=80"}
          alt={getTitle()}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1437]/90 via-[#0A1437]/40 to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => navigate("/#blogs")}
          className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="text-sm font-bold uppercase tracking-widest">Back</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4">
              {blog.category || "General"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {getTitle()}
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-100 mb-10">
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">{formatDate(blog.date)}</span>
          </div>
          {blog.author && (
            <div className="flex items-center gap-2 text-slate-500">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">{blog.author}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              {Math.max(1, Math.ceil(getContent().replace(/<[^>]*>/g, "").split(" ").length / 200))} min read
            </span>
          </div>
        </div>

        {/* Body */}
        <div
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: getContent() }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[#0A1437] uppercase tracking-widest">
              Share this article
            </span>
            <div className="flex gap-3">
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0A1437] hover:text-white transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0A1437] hover:text-white transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0A1437] hover:text-white transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 5.48c0-1.977-1.784-3.48-3.72-3.48-2.077 0-3.72 1.503-3.72 3.48 0 1.978 1.643 3.48 3.72 3.48 1.936 0 3.72-1.502 3.72-3.48zm-6.12 0c0-2.695 2.498-4.92 5.64-4.92 3.004 0 5.64 2.225 5.64 4.92 0 2.696-2.636 4.92-5.64 4.92-3.142 0-5.64-2.224-5.64-4.92zm-2.4 0c0 1.978-1.784 3.48-3.72 3.48-2.077 0-3.72-1.502-3.72-3.48 0-1.977 1.643-3.48 3.72-3.48 1.936 0 3.72 1.503 3.72 3.48zm-1.44 0c0-1.348-1.08-2.04-2.28-2.04-1.32 0-2.28.83-2.28 2.04 0 1.211.96 2.04 2.28 2.04 1.2 0 2.28-.691 2.28-2.04zm12 0c0-1.348-1.08-2.04-2.28-2.04-1.32 0-2.28.83-2.28 2.04 0 1.211.96 2.04 2.28 2.04 1.2 0 2.28-.691 2.28-2.04zm-12 6.72c0-2.695 2.498-4.92 5.64-4.92 3.004 0 5.64 2.225 5.64 4.92v5.64c0 1.977-1.784 3.48-3.72 3.48h-3.84c-1.936 0-3.72-1.503-3.72-3.48v-5.64zm1.44 0v5.64c0 1.349 1.08 2.04 2.28 2.04h3.84c1.2 0 2.28-.691 2.28-2.04v-5.64c0-1.348-1.08-2.04-2.28-2.04-1.32 0-2.28.83-2.28 2.04z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
