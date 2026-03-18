import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#portfolio", label: "Портфолио" },
  { href: "#process", label: "Как мы работаем" },
  { href: "#contact", label: "Контакты" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 luxury-transition ${
          scrolled || menuOpen
            ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
            <a href="#">
              <img src={logo} alt="Логотип" className="h-8 md:h-10 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-light text-muted-foreground">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-foreground luxury-transition">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop phone + CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+79999999999"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground luxury-transition"
              >
                <Phone size={14} />
                +7 (999) 999-99-99
              </a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-xs font-medium tracking-wide uppercase border border-foreground/10"
              >
                Получить консультацию
              </motion.a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Меню"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-lg uppercase tracking-[0.15em] font-light text-muted-foreground hover:text-foreground luxury-transition"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="mt-10 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-xs font-medium tracking-wide uppercase border border-foreground/10 text-center"
            >
              Получить консультацию
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyHeader;
