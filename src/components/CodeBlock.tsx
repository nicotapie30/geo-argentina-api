import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  copyText?: string;
}

const methodColors: Record<string, string> = {
  GET:    'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  POST:   'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  PUT:    'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  DELETE: 'bg-red-500/15 text-red-400 border border-red-500/30',
};

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

function parseTitle(title?: string) {
  if (!title) return { method: null, label: '' };
  const method = HTTP_METHODS.find((m) => title.startsWith(m + ' '));
  if (method) return { method, label: title.slice(method.length + 1) };
  return { method: null, label: title };
}

export const CodeBlock = ({ code, language = 'json', title, copyText }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const { method, label } = parseTitle(title);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText ?? code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightJSON = (jsonString: string) => {
    return jsonString
      .replace(/"([^"]+)":/g, '<span class="syntax-property">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="syntax-string">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="syntax-number">$1</span>')
      .replace(/: (true|false|null)/g, ': <span class="syntax-keyword">$1</span>')
      .replace(/\/\/.*/g, (match) => `<span class="syntax-comment">${match}</span>`);
  };

  return (
    <div className="code-block glow-effect">
      <div className="code-header">
        <div className="flex items-center gap-2">
          {method && (
            <span className={`px-2 py-0.5 rounded text-xs font-mono font-semibold ${methodColors[method]}`}>
              {method}
            </span>
          )}
          <span className="text-sm text-muted-foreground font-mono">
            {label || language.toUpperCase()}
          </span>
        </div>

        <motion.button
          onClick={handleCopy}
          className="relative flex items-center gap-2 px-3 py-1 text-sm text-muted-foreground border border-border rounded-md overflow-hidden"
          whileHover={{ scale: 1.04, color: 'hsl(var(--foreground))' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                className="flex items-center gap-2 text-primary"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <Check className="w-4 h-4" />
                Copiado
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <Copy className="w-4 h-4" />
                Copiar
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <pre className="code-content scrollbar-thin">
        <code
          className="text-foreground"
          dangerouslySetInnerHTML={{ __html: highlightJSON(code) }}
        />
      </pre>
    </div>
  );
};
