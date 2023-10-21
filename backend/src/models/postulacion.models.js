import { Schema, model } from 'mongoose'; 

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
});