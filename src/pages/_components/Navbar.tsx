"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#inicio");
          }}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="TRINDADE Assessoria Contábil - Início"
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2c3241" }}>
            <span className="text-white font-bold text-base leading-none">T</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-extrabold text-sm tracking-wide transition-colors ${scrolled ? "text-[#2c3241]" : "text-white"}`}
            >
              TRINDADE
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}
            >
              Assessoria Contábil
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#c5d5a5] cursor-pointer ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5516981776122"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 hover:shadow-md cursor-pointer"
            style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
          >
            Fale Conosco
          </a>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg cursor-pointer transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-border shadow-lg"
          >
            <ul className="flex flex-col py-4 px-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://wa.me/5516981776122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  style={{ backgroundColor: "#2c3241", color: "white" }}
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}