import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EndpointSection } from '@/components/EndpointSection';
import { Footer } from '@/components/Footer';

const provinciasResponse = `{
  "total": 24,
  "provincias": [
    {
      "id": 1,
      "nombre": "Buenos Aires",
      "nombre_completo": "Provincia de Buenos Aires",
      "iso_id": "AR-B",
      "categoria": "provincia",
      "centroide": {
        "lat": -36.6769415180527,
        "lon": -60.5588319815719
      }
    },
    {
      "id": 2,
      "nombre": "Catamarca",
      "nombre_completo": "Provincia de Catamarca",
      "iso_id": "AR-K",
      "categoria": "provincia"
    }
    // ... más provincias
  ]
}`;

const provinciaByIdResponse = `{
  "provincia": {
    "id": 1,
    "nombre": "Buenos Aires",
    "nombre_completo": "Provincia de Buenos Aires",
    "iso_id": "AR-B",
    "categoria": "provincia",
    "centroide": {
      "lat": -36.6769415180527,
      "lon": -60.5588319815719
    },
    "superficie_km2": 307571,
    "poblacion": 17541141,
    "densidad": 57.0,
    "capital": "La Plata"
  }
}`;

const departamentosResponse = `{
  "total": 135,
  "departamentos": [
    {
      "id": 6001,
      "nombre": "Adolfo Alsina",
      "provincia": {
        "id": 6,
        "nombre": "Buenos Aires"
      },
      "categoria": "partido",
      "centroide": {
        "lat": -37.0735578544224,
        "lon": -62.9296885645889
      }
    },
    {
      "id": 6007,
      "nombre": "Adolfo Gonzales Chaves",
      "provincia": {
        "id": 6,
        "nombre": "Buenos Aires"
      }
    }
    // ... más departamentos
  ]
}`;

const localidadesResponse = `{
  "total": 4015,
  "localidades": [
    {
      "id": 6001010,
      "nombre": "Carhué",
      "departamento": {
        "id": 6001,
        "nombre": "Adolfo Alsina"
      },
      "provincia": {
        "id": 6,
        "nombre": "Buenos Aires"
      },
      "categoria": "localidad simple",
      "centroide": {
        "lat": -37.1779889296814,
        "lon": -62.7668683254453
      }
    }
  ]
}`;

const municipiosResponse = `{
  "total": 1285,
  "municipios": [
    {
      "id": 60001,
      "nombre": "25 de Mayo",
      "provincia": {
        "id": 6,
        "nombre": "Buenos Aires"
      },
      "categoria": "municipio",
      "centroide": {
        "lat": -35.4327458,
        "lon": -60.1721284
      }
    },
    {
      "id": 60002,
      "nombre": "Adolfo Alsina",
      "provincia": {
        "id": 6,
        "nombre": "Buenos Aires"
      }
    }
  ]
}`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        
        {/* Provincias Section */}
        <div id="provincias">
          <EndpointSection
            method="GET"
            endpoint="/provincias"
            title="Listar todas las provincias"
            description="Obtiene la lista completa de las 24 provincias de Argentina, incluyendo la Ciudad Autónoma de Buenos Aires. Cada provincia incluye su identificador único, nombre, coordenadas del centroide y categoría administrativa."
            responseCode={provinciasResponse}
            responseTitle="GET /provincias"
          />
          
          <EndpointSection
            method="GET"
            endpoint="/provincias/:id"
            title="Obtener provincia por ID"
            description="Obtiene información detallada de una provincia específica, incluyendo datos demográficos como población, superficie y densidad. Útil para obtener estadísticas completas de una región."
            parameters={[
              { name: 'id', type: 'number', description: 'Identificador único de la provincia', required: true }
            ]}
            responseCode={provinciaByIdResponse}
            responseTitle="GET /provincias/1"
          />
        </div>

        {/* Departamentos Section */}
        <div id="departamentos">
          <EndpointSection
            method="GET"
            endpoint="/departamentos"
            title="Listar departamentos"
            description="Obtiene todos los departamentos/partidos de Argentina. Puede filtrarse por provincia para obtener solo los departamentos de una región específica. Los departamentos representan la segunda división administrativa del país."
            parameters={[
              { name: 'provincia_id', type: 'number', description: 'Filtrar por ID de provincia' },
              { name: 'nombre', type: 'string', description: 'Buscar por nombre (parcial)' }
            ]}
            responseCode={departamentosResponse}
            responseTitle="GET /departamentos?provincia_id=6"
          />
        </div>

        {/* Localidades Section */}
        <div id="localidades">
          <EndpointSection
            method="GET"
            endpoint="/localidades"
            title="Listar localidades"
            description="Accede al listado completo de localidades de Argentina. Incluye ciudades, pueblos y parajes con sus coordenadas geográficas y clasificación. Soporta paginación para manejar el gran volumen de datos."
            parameters={[
              { name: 'provincia_id', type: 'number', description: 'Filtrar por ID de provincia' },
              { name: 'departamento_id', type: 'number', description: 'Filtrar por ID de departamento' },
              { name: 'pagina', type: 'number', description: 'Número de página (por defecto: 1)' },
              { name: 'limite', type: 'number', description: 'Resultados por página (máx: 100)' }
            ]}
            responseCode={localidadesResponse}
            responseTitle="GET /localidades?provincia_id=6"
          />
        </div>

        {/* Municipios Section */}
        <div id="municipios">
          <EndpointSection
            method="GET"
            endpoint="/municipios"
            title="Listar municipios"
            description="Obtiene el listado de municipios de Argentina. Los municipios representan las unidades de gobierno local y pueden filtrarse por provincia. Ideal para aplicaciones que necesitan información sobre gobiernos locales."
            parameters={[
              { name: 'provincia_id', type: 'number', description: 'Filtrar por ID de provincia' },
              { name: 'nombre', type: 'string', description: 'Buscar por nombre (parcial)' }
            ]}
            responseCode={municipiosResponse}
            responseTitle="GET /municipios?provincia_id=6"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
