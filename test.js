    // test.js (ES Modules)
    import { expect } from 'chai'; // Usa import para expect
    import request from 'supertest'; // Usa import para supertest
    import app from './app.js'; // Usa import y especifica la extensión .js para módulos locales

    // Describe un conjunto de pruebas para la ruta GET /
    describe('GET /', () => {
      // Define una prueba individual
      it('debería retornar "¡Buenas tardes profesor espero se encuentre bien!"', (done) => {
        // Realiza una solicitud GET a la aplicación
        request(app)
          .get('/')
          .end((err, res) => {
            // Verifica que no haya errores en la solicitud
            if (err) return done(err);
            // Aserción: el código de estado de la respuesta debe ser 200 (OK)
            expect(res.statusCode).to.equal(200);
            // Aserción: el texto de la respuesta debe ser el mensaje esperado
            expect(res.text).to.equal('¡Buenas tardes profesor espero se encuentre bien!');
            // Llama a 'done()' para indicar que la prueba asíncrona ha terminado
            done();
          });
      });
    });