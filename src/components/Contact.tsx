import { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-contact relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-50 opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <span className="inline-block text-primary font-bold text-xs tracking-widest uppercase mb-6 px-3 py-1 bg-primary/10 rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
            Connect with Our <br />
            <span className="text-primary italic">Global</span> Team.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 text-lg font-light leading-relaxed">
            Ready to streamline your supply chain? Reach out for a customized logistics consultation.
          </p>
          <div className="mt-10 h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-2">
            {/* Map / Visual Side */}
            <div className="relative min-h-[500px] bg-slate-100 overflow-hidden">
              <div className="absolute inset-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.9526347545684!2d30.100397673996817!3d-1.9552070367210403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7173e3331f3%3A0xdd65098bb9fbd168!2sTekaccess%20Ltd%20Headquarters!5e1!3m2!1sen!2smu!4v1768061167506!5m2!1sen!2smu" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  className="grayscale opacity-70 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Map Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center shadow-2xl animate-bounce">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-6 rotate-45 bg-primary" />
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 sm:p-20 flex flex-col justify-center bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Your Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="text" id="name" name="name" 
                      value={formData.name} onChange={handleChange} 
                      placeholder="John Doe" 
                      className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="email" id="email" name="email" 
                      value={formData.email} onChange={handleChange} 
                      placeholder="you@example.com" 
                      className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Your Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-5 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <textarea 
                      id="message" name="message" 
                      value={formData.message} onChange={handleChange} 
                      placeholder="Tell us about your logistics needs..." 
                      rows={4} 
                      className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none shadow-sm" 
                      required 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="gradient-btn w-full flex items-center justify-center gap-3 py-4 text-xs tracking-widest shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Office Details Cards */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          {[
            { icon: Phone, label: "WhatsApp & Call", val: "+250 788 326 686", desc: "Available 24/7 for urgent inquiries" },
            { icon: Mail, label: "Email Support", val: "info@tekaccess.rw", desc: "Reliable communication for your business" },
            { icon: MapPin, label: "Global HQ", val: "Kigali, Rwanda", desc: "Visit our modern logistics facility" }
          ].map((item, idx) => (
            <div key={idx} className="p-12 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-700">
               <div className="mb-8 h-14 w-14 bg-slate-50 flex items-center justify-center rounded-2xl text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100/50">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-4">{item.label}</p>
              <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.val}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;