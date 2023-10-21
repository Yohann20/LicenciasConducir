import { Router } from "express"; 

import { createPersona, getPersonas, getOnePersona, deletePersona, updatePersona } from '../controllers/persona.controller.js'; 

const router = Router();

router.get('/', getPersonas); 
router.get('/:id', getOnePersona); 