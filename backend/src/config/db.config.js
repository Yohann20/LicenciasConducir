import {connect} from 'mongoose'; 
import { DB_URL } from './configEnv.js';




const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
};


export async function startConnection(){
 try{ 
    await connect(DB_URL, options); 
    console.log('Base de datos conectada');
 }catch(e){
     console.log(e);
 }
};