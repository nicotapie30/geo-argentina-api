import { MapPin, Github } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-semibold text-foreground">GeoArgentinaAPI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#provincias" className="text-muted-foreground hover:text-foreground transition-colors">
            Provincias
          </a>
          <a href="#departamentos" className="text-muted-foreground hover:text-foreground transition-colors">
            Departamentos
          </a>
          <a href="#localidades" className="text-muted-foreground hover:text-foreground transition-colors">
            Localidades
          </a>
          <a href="#municipios" className="text-muted-foreground hover:text-foreground transition-colors">
            Municipios
          </a>
        </nav>

        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
};
