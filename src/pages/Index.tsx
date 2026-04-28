import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EndpointSection } from '@/components/EndpointSection';
import { SectionHeader } from '@/components/SectionHeader';
import { Footer } from '@/components/Footer';

// ─── Provincias ───────────────────────────────────────────────────────────────

const provinciasResponse = `{
  "data": [
    {
      "provinceId": 1,
      "name": "Buenos Aires",
      "normalized_name": "buenos aires",
      "slug": "buenos-aires",
      "iso_code": "AR-B",
      "abbreviation": "BA",
      "region": "Pampeana",
      "lat": -36.6769415180527,
      "lng": -60.5588319815719,
      "location": {
        "type": "Point",
        "coordinates": [-60.558831, -36.676941]
      }
    },
    {
      "provinceId": 2,
      "name": "Catamarca",
      "normalized_name": "catamarca",
      "slug": "catamarca",
      "iso_code": "AR-K",
      "abbreviation": "CT",
      "region": "NOA",
      "lat": -28.4696,
      "lng": -65.7852
    }
    // ... 23 provincias + CABA (24 jurisdicciones en total)
  ]
}`;

const provinciaBySlugResponse = `{
  "data": {
    "provinceId": 6,
    "name": "Buenos Aires",
    "normalized_name": "buenos aires",
    "slug": "buenos-aires",
    "iso_code": "AR-B",
    "abbreviation": "BA",
    "region": "Pampeana",
    "lat": -36.6769415180527,
    "lng": -60.5588319815719,
    "location": {
      "type": "Point",
      "coordinates": [-60.558831, -36.676941]
    }
  }
}`;

const provinciasDepartamentosResponse = `{
  "data": [
    {
      "departmentId": 6001,
      "provinceId": 6,
      "name": "Adolfo Alsina",
      "normalized_name": "adolfo alsina",
      "slug": "adolfo-alsina",
      "type": "partido",
      "lat": -37.0735578544224,
      "lng": -62.9296885645889,
      "location": {
        "type": "Point",
        "coordinates": [-62.929688, -37.073557]
      },
      "provinceName": "Buenos Aires"
    },
    {
      "departmentId": 6007,
      "provinceId": 6,
      "name": "Adolfo Gonzales Chaves",
      "slug": "adolfo-gonzales-chaves",
      "type": "partido",
      "lat": -38.0328,
      "lng": -60.1001,
      "provinceName": "Buenos Aires"
    }
    // ... más departamentos de la provincia
  ]
}`;

const provinciasLocalidadesResponse = `{
  "data": [
    {
      "localityId": 60010,
      "provinceId": 6,
      "departmentId": 6001,
      "name": "Carhué",
      "normalized_name": "carhue",
      "slug": "carhue",
      "type": "ciudad",
      "postal_code": "6430",
      "population": 12000,
      "area_km2": 45.2,
      "foundation_date": null,
      "category": null,
      "is_touristic": false,
      "lat": -37.177988,
      "lng": -62.766868,
      "provinceName": "Buenos Aires",
      "departmentName": "Adolfo Alsina"
    }
    // ... más localidades
  ],
  "pagination": {
    "total": 1452,
    "page": 1,
    "limit": 20,
    "pages": 73
  }
}`;

// ─── Departamentos ────────────────────────────────────────────────────────────

const departamentosResponse = `{
  "data": [
    {
      "departmentId": 6001,
      "provinceId": 6,
      "name": "Adolfo Alsina",
      "normalized_name": "adolfo alsina",
      "slug": "adolfo-alsina",
      "type": "partido",
      "lat": -37.0735578544224,
      "lng": -62.9296885645889,
      "location": {
        "type": "Point",
        "coordinates": [-62.929688, -37.073557]
      },
      "provinceName": "Buenos Aires"
    }
    // ... más departamentos
  ],
  "pagination": {
    "total": 135,
    "page": 1,
    "limit": 20,
    "pages": 7
  }
}`;

const departamentosSearchResponse = `{
  "data": [
    {
      "departmentId": 6001,
      "provinceId": 6,
      "name": "Adolfo Alsina",
      "normalized_name": "adolfo alsina",
      "slug": "adolfo-alsina",
      "type": "partido",
      "lat": -37.0735578544224,
      "lng": -62.9296885645889,
      "provinceName": "Buenos Aires"
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "limit": 20,
    "pages": 1
  }
}`;

// ─── Localidades ──────────────────────────────────────────────────────────────

const localidadesResponse = `{
  "data": [
    {
      "localityId": 60010,
      "provinceId": 6,
      "departmentId": 6001,
      "name": "Carhué",
      "normalized_name": "carhue",
      "slug": "carhue",
      "type": "ciudad",
      "postal_code": "6430",
      "population": 12000,
      "area_km2": 45.2,
      "foundation_date": null,
      "category": null,
      "is_touristic": false,
      "lat": -37.177988,
      "lng": -62.766868,
      "provinceName": "Buenos Aires",
      "departmentName": "Adolfo Alsina"
    }
    // ... más localidades
  ],
  "pagination": {
    "total": 4015,
    "page": 1,
    "limit": 20,
    "pages": 201
  }
}`;

const localidadesSearchResponse = `{
  "data": [
    {
      "localityId": 60010,
      "provinceId": 6,
      "departmentId": 6001,
      "name": "Carhué",
      "normalized_name": "carhue",
      "slug": "carhue",
      "type": "ciudad",
      "postal_code": "6430",
      "population": 12000,
      "is_touristic": false,
      "lat": -37.177988,
      "lng": -62.766868,
      "provinceName": "Buenos Aires",
      "departmentName": "Adolfo Alsina"
    }
  ],
  "pagination": {
    "total": 3,
    "page": 1,
    "limit": 20,
    "pages": 1
  }
}`;

const localidadesNearbyResponse = `{
  "data": [
    {
      "localityId": 60010,
      "provinceId": 6,
      "departmentId": 6001,
      "name": "Carhué",
      "slug": "carhue",
      "type": "ciudad",
      "postal_code": "6430",
      "population": 12000,
      "is_touristic": false,
      "lat": -37.177988,
      "lng": -62.766868,
      "provinceName": "Buenos Aires",
      "departmentName": "Adolfo Alsina"
    }
  ],
  "meta": {
    "lat": -34.6037,
    "lng": -58.3816,
    "radius_km": 50
  }
}`;

const ease = [0.23, 1, 0.32, 1];

const Index = () => {
  return (
    <div className="relative min-h-[100dvh]">
      {/* Grid background with radial mask */}
      <div
        className="fixed inset-0 pointer-events-none -z-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 85% at 50% 15%, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 85% at 50% 15%, black 35%, transparent 75%)',
        }}
      />
      {/* Blur layer over grid, under content */}
      <div className="fixed inset-0 pointer-events-none -z-10 backdrop-blur-[2px] bg-background/20" />
      {/* Radial glow */}
      <div className="fixed top-0 left-[25%] -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-primary/[7%] blur-[130px] pointer-events-none -z-10" />

      <Header />
      <main className="container mx-auto px-6">
        <Hero />

        {/* Base URL Info */}
        <motion.div
          className="my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-mono text-primary uppercase tracking-widest">Base URL</p>
            <code className="text-sm font-mono text-foreground break-all">
              https://geoargentinaapi.up.railway.app/v1
            </code>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Online</span>
            </div>
            <span>JSON · REST</span>
            <span>Sin autenticación</span>
            <span>120 req/min</span>
          </div>
        </motion.div>

        {/* Provincias */}
        <div id="provincias">
          <SectionHeader
            title="Provincias"
            description="23 provincias y la Ciudad Autónoma de Buenos Aires (CABA)"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/provincias"
            title="Listar todas las provincias"
            description="Retorna las 23 provincias de Argentina más la Ciudad Autónoma de Buenos Aires (CABA), ordenadas por nombre. Incluye coordenadas del centroide, código ISO, abreviatura y región geográfica."
            responseCode={provinciasResponse}
            responseTitle="GET /v1/provincias"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/provincias/:slug"
            title="Obtener provincia por slug"
            description="Retorna una provincia específica por su slug — versión normalizada del nombre (minúsculas, sin tildes, guiones en lugar de espacios)."
            parameters={[
              { name: 'slug', type: 'string', description: 'Slug de la provincia. Ej: buenos-aires, cordoba, santa-fe', required: true },
            ]}
            responseCode={provinciaBySlugResponse}
            responseTitle="GET /v1/provincias/buenos-aires"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/provincias/:slug/departamentos"
            title="Departamentos de una provincia"
            description="Lista todos los departamentos y partidos de una provincia, ordenados por nombre."
            parameters={[
              { name: 'slug', type: 'string', description: 'Slug de la provincia', required: true },
            ]}
            responseCode={provinciasDepartamentosResponse}
            responseTitle="GET /v1/provincias/buenos-aires/departamentos"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/provincias/:slug/localidades"
            title="Localidades de una provincia"
            description="Lista las localidades de una provincia con paginación y filtro por tipo."
            parameters={[
              { name: 'slug',  type: 'string', description: 'Slug de la provincia', required: true },
              { name: 'page',  type: 'number', description: 'Número de página (por defecto: 1)' },
              { name: 'limit', type: 'number', description: 'Resultados por página (por defecto: 20, máx: 100)' },
              { name: 'type',  type: 'string', description: 'Tipo: ciudad · pueblo · villa · barrio · paraje · aldea · colonia · parque' },
            ]}
            responseCode={provinciasLocalidadesResponse}
            responseTitle="GET /v1/provincias/buenos-aires/localidades"
          />
        </div>

        {/* Departamentos */}
        <div id="departamentos">
          <SectionHeader
            title="Departamentos"
            description="Segunda división administrativa — 135 departamentos y partidos"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/departamentos"
            title="Listar departamentos"
            description="Retorna todos los departamentos con paginación. Filtrá por provincia para obtener solo los de una región específica."
            parameters={[
              { name: 'page',        type: 'number', description: 'Número de página (por defecto: 1)' },
              { name: 'limit',       type: 'number', description: 'Resultados por página (por defecto: 20, máx: 100)' },
              { name: 'provinciaId', type: 'number', description: 'Filtrar por ID de provincia' },
            ]}
            responseCode={departamentosResponse}
            responseTitle="GET /v1/departamentos?provinciaId=6"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/departamentos/search"
            title="Buscar departamentos"
            description="Búsqueda por nombre, normalizada y sin tildes. 'cordoba' encuentra 'Córdoba'. Ideal para inputs de autocompletado."
            parameters={[
              { name: 'q',     type: 'string', description: 'Texto a buscar (2–100 caracteres)', required: true },
              { name: 'page',  type: 'number', description: 'Número de página (por defecto: 1)' },
              { name: 'limit', type: 'number', description: 'Resultados por página (por defecto: 20, máx: 100)' },
            ]}
            responseCode={departamentosSearchResponse}
            responseTitle="GET /v1/departamentos/search?q=alsina"
          />
        </div>

        {/* Localidades */}
        <div id="localidades">
          <SectionHeader
            title="Localidades"
            description="Ciudades, pueblos y parajes — 4.015 localidades con coordenadas"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/localidades"
            title="Listar localidades"
            description="Retorna el listado completo con paginación y filtros combinables: provincia, departamento, tipo y si es turística."
            parameters={[
              { name: 'page',         type: 'number',  description: 'Número de página (por defecto: 1)' },
              { name: 'limit',        type: 'number',  description: 'Resultados por página (por defecto: 20, máx: 100)' },
              { name: 'provincia',    type: 'number',  description: 'Filtrar por ID de provincia' },
              { name: 'departamento', type: 'number',  description: 'Filtrar por ID de departamento' },
              { name: 'type',         type: 'string',  description: 'Tipo: ciudad · pueblo · villa · barrio · paraje · aldea · colonia · parque' },
              { name: 'is_touristic', type: 'boolean', description: 'Filtrar localidades turísticas: true o false' },
            ]}
            responseCode={localidadesResponse}
            responseTitle="GET /v1/localidades?provincia=6&type=ciudad"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/localidades/search"
            title="Buscar localidades"
            description="Búsqueda por nombre normalizada — sin tildes, insensible a mayúsculas. Perfecta para autocompletar en formularios."
            parameters={[
              { name: 'q',     type: 'string', description: 'Texto a buscar (2–100 caracteres)', required: true },
              { name: 'page',  type: 'number', description: 'Número de página (por defecto: 1)' },
              { name: 'limit', type: 'number', description: 'Resultados por página (por defecto: 20, máx: 100)' },
            ]}
            responseCode={localidadesSearchResponse}
            responseTitle="GET /v1/localidades/search?q=carhue"
          />
          <EndpointSection
            method="GET"
            endpoint="/v1/localidades/nearby"
            title="Localidades cercanas"
            description="Encuentra localidades dentro de un radio geográfico dado usando consultas $near de MongoDB. Ideal para apps de ubicación o mapas interactivos."
            parameters={[
              { name: 'lat',    type: 'number', description: 'Latitud (-90 a 90)', required: true },
              { name: 'lng',    type: 'number', description: 'Longitud (-180 a 180)', required: true },
              { name: 'radius', type: 'number', description: 'Radio en km (por defecto: 20, máx: 500)' },
              { name: 'limit',  type: 'number', description: 'Cantidad máxima de resultados (por defecto: 10, máx: 50)' },
            ]}
            responseCode={localidadesNearbyResponse}
            responseTitle="GET /v1/localidades/nearby?lat=-34.6037&lng=-58.3816&radius=50"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
