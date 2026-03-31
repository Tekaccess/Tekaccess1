import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="section-footer relative border-t border-slate-100 px-4 py-24 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-50/30" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-3 lg:gap-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="group inline-block">
              <img 
                src={logo} 
                alt="TekAccess Logo" 
                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-slate-600 font-light leading-relaxed max-w-xs">
              Empowering global trade with innovative logistics solutions, precision analytics, and unwavering reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Digital Navigation</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: "Services", href: "#services" },
                { name: "About Us", href: "#about" },
                { name: "Leadership", href: "#team" },
                { name: "Insights", href: "#blogs" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm text-slate-500 transition-all duration-300 hover:text-primary hover:translate-x-1 font-light"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Connect with Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/people/TekAccess-Ltd/", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/Tekaccessltd", label: "Twitter" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/tekaccess-ltd?originalSubdomain=rw", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/tekaccessltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-100 text-slate-400 transition-all duration-500 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 shadow-sm"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="pt-4">
               <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">TekAccess Global HQ</p>
               <p className="text-sm text-slate-500 mt-2 font-light">Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            &copy; {currentYear} TekAccess Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
             <button className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy Policy</button>
             <button className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
