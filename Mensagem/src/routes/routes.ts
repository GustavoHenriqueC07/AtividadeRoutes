import { Router } from "express";
import { criarMensagem } from "../controllers/controller.js";

const router = Router();

// Rota POST /mensagem
router.post("/mensagem", criarMensagem);

export default router;
