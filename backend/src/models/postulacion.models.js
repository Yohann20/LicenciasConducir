import { Schema, model } from 'mongoose'; 
//FALTA AGREGAR QUE TRAMITE DESEA REALIZAR
const PostulacionSchema = Schema({
    nombre:{
        type: String,
        required: true,
    },
    rut:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    telefono:{
        type: String,
        required: true,
    },
    fechaNacimiento:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    documentoPDF:{
        type: String,
        required: true,
    },
    tramite:{
        type: String,
        required: true,
    },
}); 

const Postulacion = model('Postulacion', PostulacionSchema); 
export default Postulacion;