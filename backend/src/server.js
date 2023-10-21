import express, { json } from 'express'; 
import { startConnection } from './config/db.config.js';
import personaRoutes from './routes/persona.routes.js'; 

const app = express(); 
const port = 5000; 

//middlewares
app.use(json()); 
app.use('/api/personas', personaRoutes);


app.get('/', (req, res) => {
    console.log(req.params );
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); 
    startConnection();
   
});