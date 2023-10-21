import Persona from '../models/persona.modelo.js'; 


export async function obtenerPersonas(req, res){
    const personas = await Persona.find();
    res.json(personas);
}

export async function crearPersona(req, res){ 
    const { nombre, rut, email, contraseña, roles } = req.body; 
    const nuevaPersona = new Persona({ nombre, rut, email, contraseña, roles }); 
    const personaGuardada = await nuevaPersona.save(); 
    res.status(201).json(personaGuardada); 

}; 

