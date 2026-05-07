import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-semibold">
            GeoArgentina<span className="text-primary">API</span>
          </span>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-400 fill-red-400 mx-1" /> en Argentina
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/nicotapie30/geo-argentina-api"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Repositorio
            </a>
            <a
              href="https://geoargentinaapi.onrender.com/v1/provincias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              API
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
