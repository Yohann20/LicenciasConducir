import Postulacion from '../models/postulacion.models.js'; 

//Crear Postulacion
export async function crearPostulacion(req, res){
    try{
        const { nombre, rut, email, telefono, fechaNacimiento, direccion } = req.body;
        const nuevaPostulacion = new Postulacion({ nombre, rut, email, telefono, fechaNacimiento, direccion });
        const postulacionGuardada = await nuevaPostulacion.save();
        res.status(201).json(postulacionGuardada)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al crear postulacion"})
    }
    
}

//Obtener Postulaciones
export async function obtenerPostulacion(req, res){
    try{
        const postulaciones = await Postulacion.find();
        res.json(postulaciones);
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al obtener postulacion"})
    }
}

//Obtener Postulacion por id
export async function obtenerPostulacionPorId(req, res){
    try{
        const { id } = req.params;
        const postulacion = await Postulacion.findById(id);
        res.json(postulacion);
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al obtener postulacion"})
    }
}

//Eliminar postulacion
export async function eliminarPostulacion(req, res){
    try{
        const { id } = req.params;  //puede ser borra por id o por rut
        const postulacionEliminada = await Postulacion.findByIdAndDelete(id);
        res.status(200).json(postulacionEliminada)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al eliminar postulacion"})
    }
}
