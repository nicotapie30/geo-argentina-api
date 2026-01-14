import { CodeBlock } from './CodeBlock';

interface EndpointSectionProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  title: string;
  description: string;
  parameters?: { name: string; type: string; description: string; required?: boolean }[];
  responseCode: string;
  responseTitle?: string;
}

const methodColors = {
  GET: 'bg-primary text-primary-foreground',
  POST: 'bg-secondary text-secondary-foreground',
  PUT: 'bg-amber-500 text-black',
  DELETE: 'bg-destructive text-destructive-foreground',
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
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 border-b border-border">
      {/* Left side - Documentation */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">{title}</h3>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-md text-sm font-mono font-medium ${methodColors[method]}`}>
              {method}
            </span>
            <code className="text-muted-foreground font-mono text-sm bg-muted px-3 py-1 rounded-md">
              {endpoint}
            </code>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {parameters && parameters.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-foreground">Parámetros</h4>
            <div className="space-y-2">
              {parameters.map((param) => (
                <div key={param.name} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <code className="text-primary font-mono text-sm">{param.name}</code>
                  <span className="text-xs text-muted-foreground bg-card px-2 py-0.5 rounded">
                    {param.type}
                  </span>
                  {param.required && (
                    <span className="text-xs text-destructive">requerido</span>
                  )}
                  <span className="text-sm text-muted-foreground flex-1">{param.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right side - Code */}
      <div className="lg:sticky lg:top-24 self-start">
        <CodeBlock 
          code={responseCode} 
          language="json" 
          title={responseTitle || 'Respuesta'} 
        />
      </div>
    </section>
  );
};
