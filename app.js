// app.js
const express = require('express'); // Importa el framework Express
const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto en el que la aplicación escuchará

// Define una ruta GET para la raíz de la aplicación ('/')
app.get('/', (req, res) => {
  // Cuando se accede a la ruta, envía un mensaje de texto como respuesta
  res.send('¡Hola desde mi app Node.js CI/CD!');
});

// La aplicación comienza a escuchar en el puerto definido
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

// Exporta la instancia de la aplicación para que pueda ser utilizada por los archivos de prueba
module.exports = app;
