@"
# Comuna Italia

Plataforma web para la presentacion de pueblos y comunas italianas. Un solo proyecto Angular que sirve multiples webs segun el subdominio.

## Caracteristicas

- Multi-tenant: Una unica aplicacion que muestra informacion diferente segun el subdominio
- Diseno moderno y elegante: Estilo cultural y turistico
- Responsive: Adaptado a moviles, tablets y desktop
- Secciones incluidas: Hero, Galeria, About, Experiencias, Footer
- Pagina de detalle: Cada experiencia tiene su pagina individual

## Instalacion

cd comuna-italia
npm install

## Desarrollo

npm start

La aplicacion estara disponible en http://localhost:4200

### Probar diferentes pueblos en desarrollo

- http://localhost:4200?village=castiglione - Castiglione del Lago
- http://localhost:4200?village=alba - Alba  
- http://localhost:4200?village=civita - Civita di Bagnoregio

## Configuracion de Subdominios (Produccion)

El sistema detecta automaticamente el subdominio:

- castiglione.comunaitalia.com -> Castiglione del Lago
- alba.comunaitalia.com -> Alba
- civita.comunaitalia.com -> Civita di Bagnoregio

## Agregar un nuevo pueblo

1. Agrega los datos en src/app/data/villages.data.ts
2. Agrega las imagenes en src/assets/villages/nuevo-pueblo/
3. Configura el subdominio en tu servidor

## Build para Produccion

npm run build

## Tecnologias

- Angular 18.2.0
- TypeScript
- SCSS
- Standalone Components
- Signals
"@