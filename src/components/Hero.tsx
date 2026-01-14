import { CodeBlock } from './CodeBlock';

const exampleCode = `// Ejemplo de uso con fetch
const response = await fetch(
  'https://api.geoargentina.com/provincias'
);

const provincias = await response.json();
console.log(provincias);
// [{ id: 1, nombre: "Buenos Aires", ... }, ...]`;

export const Hero = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Datos Geográficos de{' '}
              <span className="gradient-text">Argentina</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              API REST gratuita y de código abierto para obtener información geográfica 
              de Argentina. Provincias, departamentos, municipios y localidades 
              con datos actualizados.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#provincias" 
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Ver Documentación
              </a>
              <a 
                href="https://api.geoargentina.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                URL Base: api.geoargentina.com
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Sin autenticación</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>100% Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Open Source</span>
              </div>
            </div>
          </div>

          {/* Right side - Code example */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CodeBlock 
              code={exampleCode} 
              language="javascript" 
              title="Ejemplo rápido" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
