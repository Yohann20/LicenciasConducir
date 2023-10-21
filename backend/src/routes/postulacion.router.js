import { Router } from "express"; 

import { obtenerPostulacion, obtenerPostulacionPorId, crearPostulacion, eliminarPostulacion } from '../controller/postulacion.controller.js';

const router = Router();

router.get('/postulacion', obtenerPostulacion);
router.get('/postulacion/:id', obtenerPostulacionPorId);
router.post('/postulacion', crearPostulacion);
router.delete('/postulacion/:id', eliminarPostulacion);