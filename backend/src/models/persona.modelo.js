import { Schema, model } from 'mongoose'; 



const PersonaSchema = Schema({
    nombre: { 
        type: String,
        required: true,
    },
    rut: {
        type: String,
        required: true,
        unique: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    contraseña: {
        type: String,
        required: true,
        unique: true,
    },
    roles : [
        {
            ref: "Role",
            type: Schema.Types.ObjectId,
        },
    ], 
}, 
  {
    versionKey: false,
  },

); 

const Persona = model('Persona', PersonaSchema); 
export default Persona;
