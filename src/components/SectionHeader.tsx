import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const ease = [0.23, 1, 0.32, 1];

export const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <motion.div
    className="mt-20"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease }}
  >
    {/* Gradient separator line */}
    <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-10" />

    <div className="pb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-primary uppercase tracking-widest px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Recurso
        </span>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-lg leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);
