import { MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground">GeoArgentinaAPI</span>
          </div>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-destructive fill-destructive" /> en Argentina
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
