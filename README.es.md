# MOVIE API CLIENT

> Availbale in [English](./README.md)

Este proyecto es un cliente para la base de de datos [The Movie DB](https://https://www.themoviedb.org/) desarrollando usando [react](https://reactjs.org/) como proyecto final para el bootcamp react de geeks hubs academy.

## Requisitos
Para construir y ejecutar este proyecto se necesita:
- Nodejs (version 16.0 o superior)
- Un clave API valida para The Movie DB (se puede conseguir [aquí](https://www.themoviedb.org/settings/api))

## Instalación
Despues de clonar este repositorio, se debe ejecutar `npm install` para descargar e instalar los modulos nodejs de los que depende este proyecto.

Además necesita proveer al entorno de ejecución la clave para la API de The Movie DB. La manera mas sencilla y segura es escribirla en un archivo `.env`. Para ello copiar el archivo `.env.example` como `.env` y rellenar todos los campos:

```
REACT_APP_API_KEY=_YOUR_THE_MOVIE_DB_API_KEY_
```

## Scripts Disponibles

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargara con cada cambio.\
Además deberas poder ver errores en la consola.

### `npm test`

Lanza la suite de tests en modo de vista interactiva.\
Consulta la sección [corriendo tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Se empaqueta correctamente para producción y se optimiza la build para el mejor desempeño.

La build se minimiza y los archivos pasan a incluir los hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.
