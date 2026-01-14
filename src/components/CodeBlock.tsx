import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock = ({ code, language = 'json', title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
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
        <span className="text-sm text-muted-foreground font-mono">{title || language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 text-sm text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-muted transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-primary" />
              <span>Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar</span>
            </>
          )}
        </button>
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
