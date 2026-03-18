import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 luxury-transition ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5" : "bg-transparent"}`
      }>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-20">
        <a href="#">
          <img src={logo} alt="Логотип" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-light text-muted-foreground">
          <a href="#portfolio" className="hover:text-foreground luxury-transition">Портфолио</a>
          <a href="#contact" className="hover:text-foreground luxury-transition">Контакты</a>
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-xs font-medium tracking-wide uppercase border border-foreground/10">
          
          Получить консультацию
        </motion.a>
      </div>
    </header>);

};

export default StickyHeader;