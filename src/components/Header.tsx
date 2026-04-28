import { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, LayoutGroup } from 'framer-motion';


const navLinks = [
  { href: '#provincias',    label: 'Provincias' },
  { href: '#departamentos', label: 'Departamentos' },
  { href: '#localidades',   label: 'Localidades' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();

  const borderRadius = useTransform(scrollY, [0, 100], [0, 20]);
  const marginTop    = useTransform(scrollY, [0, 100], [0, 12]);
  const paddingX     = useTransform(scrollY, [0, 100], [0, 20]);
  const maxWidth     = useTransform(scrollY, [0, 100], [2000, 780]);
  const boxShadow    = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px 0px rgba(0,0,0,0)', '0px 8px 32px -4px rgba(0,0,0,0.6)']
  );

  return (
    <motion.div
      className="sticky top-0 z-50 w-full flex justify-center"
      style={{ paddingLeft: paddingX, paddingRight: paddingX, paddingTop: marginTop }}
    >
      <motion.header
        style={{ borderRadius, maxWidth, boxShadow }}
        className="relative w-full bg-background/70 backdrop-blur-md border border-border"
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">
              GeoArgentina<span className="text-primary">API</span>
            </span>
          </div>

          <LayoutGroup>
            <nav
              className="hidden md:flex items-center gap-1"
              onMouseLeave={() => setHovered(null)}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-sm rounded-md transition-colors"
                  style={{ color: hovered === link.href ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))' }}
                  onMouseEnter={() => setHovered(link.href)}
                >
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-muted"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>
          </LayoutGroup>

          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/nicotapie30/geo-argentina-api"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm bg-muted rounded-lg"
              whileHover={{ scale: 1.04, opacity: 0.85 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-full left-0 right-0 mt-2 mx-3 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-xl overflow-hidden"
            >
              <div className="px-3 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-1 pt-2 border-t border-border">
                  <a
                    href="https://github.com/nicotapie30/geo-argentina-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  );
};
