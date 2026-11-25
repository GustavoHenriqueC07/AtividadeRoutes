import { Router } from 'express';
import { calcularSoma } from '../controllers/controller.js';

const router = Router();

// Liga o endereço POST /soma à função do controller
router.post('/soma', calcularSoma);

export default router;