import { Lock, Menu, X, Globe, User } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Promo Banner */}
      <div className="bg-primary py-2 px-4 text-center">
        <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.2em]">
          Efficient. Reliable. Scalable.{" "}
          <span className="hidden sm:inline opacity-70">
            — Your Trusted Partner in Logistics & Supply Solutions.
          </span>
        </p>
      </div>

      {/* Main Navigation */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-2"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt="TekAccess Logo"
                  className="h-14 sm:h-14 object-contain rounded-md"
                />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden items-center lg:flex flex-1 justify-center px-4">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="relative group px-4 py-2 text-sm font-bold text-slate-700 transition-colors duration-300 hover:text-primary whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-px group-hover:left-1/2 group-hover:scale-x-[20]"></span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden items-center gap-4 lg:flex shrink-0">
              <div className="flex items-center gap-1 mr-2 border-r border-slate-200 pr-4">
                <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-primary">
                  <Globe className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-primary">
                  <User className="h-4 w-4" />
                </button>
              </div>

              {/* <button
                onClick={() => window.location.href = "/login.html"}
                className="gradient-btn text-xs px-6 py-2 shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5" />
                  Manager Portal
                </span>
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 right-0 top-full transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="border-t border-slate-100 bg-white shadow-2xl p-6">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center justify-between rounded-2xl px-6 py-4 text-left text-base font-bold text-slate-600 transition-all duration-300 hover:bg-slate-50 hover:text-primary"
                >
                  {link.label}
                  <div className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              ))}
              <div className="my-4 h-px bg-slate-100" />
              <button
                onClick={() => (window.location.href = "/login.html")}
                className="gradient-btn w-full flex items-center justify-center gap-3 p-5 text-base"
              >
                <Lock className="h-5 w-5" />
                Manager Portal
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
