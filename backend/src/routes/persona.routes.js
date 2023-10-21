import { Router } from "express"; 

import { obtenerPersona } from '../controller/persona.controller.js'; 

const router = Router();

//modificar
router.get('/persona', obtenerPersona); 
 

export default router; 