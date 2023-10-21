import Postulacion from '../models/postulacion.models.js'; 

//Crear Postulacion
export async function crearPostulacion(req, res){
    try{
        const { nombre, rut, email, telefono, fechaNacimiento, direccion } = req.body;
        const nuevaPostulacion = new Postulacion({ nombre, rut, email, telefono, fechaNacimiento, direccion });
        const postulacionGuardada = await nuevaPostulacion.save();
        res.status(201).json(postulacionGuardada)
    } catch (error) {
        console.log(error)
    }
    
}
