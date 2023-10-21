const mongoose = require('mongoose'); 



const PersonaSchema = mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
        },
    ], 
}, 
  {
    versionKey: false,
  },

); 

const Persona = mongoose.model('Persona', PersonaSchema); 
module.exports = Persona;
