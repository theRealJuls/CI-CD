// test.js
const expect = require('chai').expect; // Importa la función 'expect' de Chai para aserciones
const request = require('supertest'); // Importa Supertest para hacer solicitudes HTTP a la app
const app = require('./app'); // Importa la aplicación Express que vamos a probar

// Describe un conjunto de pruebas para la ruta GET /
describe('GET /', () => {
  // Define una prueba individual
  it('debería retornar "¡Hola desde mi app Node.js CI/CD!"', (done) => {
    // Realiza una solicitud GET a la aplicación
    request(app)
      .get('/')
      .end((err, res) => {
        // Verifica que no haya errores en la solicitud
        if (err) return done(err);
        // Aserción: el código de estado de la respuesta debe ser 200 (OK)
        expect(res.statusCode).to.equal(200);
        // Aserción: el texto de la respuesta debe ser el mensaje esperado
        expect(res.text).to.equal('¡Hola desde mi app Node.js CI/CD!');
        
        done();
      });
  });
});