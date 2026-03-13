import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" }];


const ComicNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ?
          "bg-background/80 backdrop-blur-md border-b-2 border-foreground" :
          "bg-transparent"}`
      }>

      <div className="container mx-auto flex items-center justify-between px-6 py-2 md:py-3">
        <a href="#" className="font-display text-xl tracking-wider text-primary">
          Colin's Portfolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              className="font-display text-base px-3 py-1 text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors">

              {item.label}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden comic-border p-2 bg-accent font-display text-lg">

          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card comic-border-thick border-t-0 border-l-0 border-r-0 pb-4">

          {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display text-xl px-6 py-3 text-foreground hover:bg-primary hover:text-primary-foreground">

              {item.label}
            </a>
          )}
        </motion.div>
      }
    </motion.nav>);

};

export default ComicNav;