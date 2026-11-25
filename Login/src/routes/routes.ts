import { Router } from 'express';
import { fazerLogin } from '../controllers/controller.js';

const router = Router();

// Liga o endereço POST /login à função do controller
router.post('/login', fazerLogin);

export default router;