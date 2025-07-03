    // app.js (ES Modules)
    import express from 'express'; // Usa import en lugar de require
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
      res.send('¡Buenas tardes profesor espero se encuentre bien!'); 
    });

    app.listen(port, () => {
      console.log(`La aplicación está escuchando en http://localhost:${port}`);
    });

    export default app; // Usa export default en lugar de module.exports
