import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface Parameter {
  name: string;
  type: string;
  description: string;
  required?: boolean;
}

interface EndpointSectionProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  title: string;
  description: string;
  parameters?: Parameter[];
  responseCode: string;
  responseTitle?: string;
}

const methodColors: Record<string, string> = {
  GET:    'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  POST:   'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  PUT:    'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  DELETE: 'bg-red-500/15 text-red-400 border border-red-500/30',
};

const ease = [0.23, 1, 0.32, 1];
const BASE_URL = 'https://geoargentinaapi.up.railway.app';

function buildCurlUrl(endpoint: string): string {
  return BASE_URL + endpoint.replace(/:(\w+)/g, (_, key) => {
    if (key === 'slug') return 'buenos-aires';
    if (key === 'id')   return '1';
    return `{${key}}`;
  });
}

const CurlSnippet = ({ endpoint }: { endpoint: string }) => {
  const [copied, setCopied] = useState(false);
  const url = buildCurlUrl(endpoint);
  const curl = `curl ${url}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest flex items-center gap-2">
        <Terminal className="w-3 h-3 text-primary" />
        Petición de ejemplo
      </h4>
      <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3">
        <code className="text-xs font-mono text-muted-foreground truncate">
          <span className="text-primary/70">$</span> {curl}
        </code>
        <button
          onClick={handleCopy}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copiar curl"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};

export const EndpointSection = ({
  method,
  endpoint,
  title,
  description,
  parameters,
  responseCode,
  responseTitle,
}: EndpointSectionProps) => {
  const copyUrl = (() => {
    if (!responseTitle) return buildCurlUrl(endpoint);
    const path = responseTitle.replace(/^(GET|POST|PUT|DELETE|PATCH)\s+/, '');
    return `${BASE_URL}${path}`;
  })();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-10 border-b border-border">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <div className="flex items-center gap-2.5">
            <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold ${methodColors[method]}`}>
              {method}
            </span>
            <code className="text-sm font-mono text-muted-foreground">
              {endpoint}
            </code>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {parameters && parameters.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Parámetros
            </h4>
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground w-32">Nombre</th>
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground w-20">Tipo</th>
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground hidden sm:table-cell">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((param, i) => (
                    <tr
                      key={param.name}
                      className={i < parameters.length - 1 ? 'border-b border-border' : ''}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <code className="text-primary font-mono text-xs">{param.name}</code>
                          {param.required && (
                            <span className="text-[10px] text-red-400 font-medium">req</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                          {param.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell leading-relaxed">
                        {param.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <CurlSnippet endpoint={endpoint} />
      </motion.div>

      <motion.div
        className="lg:sticky lg:top-24 self-start"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
      >
        <CodeBlock
          code={responseCode}
          language="json"
          title={responseTitle || 'Respuesta'}
          copyText={copyUrl}
        />
      </motion.div>
    </section>
  );
};
