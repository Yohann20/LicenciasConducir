import express, { json } from 'express'; 
import { startConnection } from './config/db.config.js';
const app = express(); 
const port = 5000; 


app.use(json()); 



app.get('/', (req, res) => {
    console.log(req.params );
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); 
    startConnection();
   
});