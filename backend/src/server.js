import express, { json } from 'express'; 
import { startConnection } from './config/db.config.js';
import personaRoutes from './routes/persona.routes.js'; 

const app = express(); 
const port = 5000; 

 
//middlewares
app.use(json()); 
//routes (nose como hacerlo) 
app.use('/persona', personaRoutes);




app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); 
    startConnection();
   
});