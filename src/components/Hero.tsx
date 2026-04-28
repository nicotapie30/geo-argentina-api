import { useEffect, useRef } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { CodeBlock } from './CodeBlock';

const exampleCode = `// Ejemplo de uso con fetch
const response = await fetch(
  'https://geoargentinaapi.up.railway.app/v1/provincias'
);

const data = await response.json();
console.log(data.provincias);
// [{ id: 1, nombre: "Buenos Aires", ... }, ...]`;

const stats = [
  { value: 23,   label: 'Provincias' },
  { value: 135,  label: 'Departamentos' },
  { value: 4015, label: 'Localidades' },
];

const ease = [0.23, 1, 0.32, 1] as const;

const AnimatedCounter = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString('es-AR');
      },
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return <span ref={ref}>0</span>;
};

export const Hero = () => {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            API REST · Open Source · Sin autenticación
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Datos<br />
            Geográficos<br />
            <span className="gradient-text">Argentina</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed max-w-md"
          >
            Cobertura completa del territorio argentino. Provincias, departamentos, municipios y localidades con coordenadas y datos actualizados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="#provincias"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm"
              whileHover={{ scale: 1.03, boxShadow: '0 0 24px -4px hsl(var(--primary) / 0.5)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              Ver Documentación
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </motion.a>
            <motion.a
              href="https://github.com/nicotapie30/geo-argentina-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-lg text-sm"
              whileHover={{ scale: 1.03, backgroundColor: 'hsl(var(--muted))' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.45 + i * 0.08 }}
                className="flex flex-col gap-2"
              >
                <motion.div
                  className="w-5 h-[2px] rounded-full bg-primary"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.08 }}
                />
                <p className="text-3xl font-bold tabular-nums leading-none gradient-text">
                  <AnimatedCounter value={s.value} delay={0.55 + i * 0.08} />
                </p>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <CodeBlock
            code={exampleCode}
            language="javascript"
            title="Ejemplo rápido"
          />
        </motion.div>
      </div>
    </section>
  );
};
