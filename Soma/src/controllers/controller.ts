import type { Request, Response } from 'express';
import { validarNumeros, somar } from '../models/soma.js';

// Atende a rota POST /soma
export function calcularSoma(req: Request, res: Response): void {
    try {
        const { num1, num2, num3 } = req.body ?? {};
// Valida tudo de uma vez para o cliente ver todos os problemas juntos
        const problemas = validarNumeros({ num1, num2, num3 });

    if (problemas.length > 0) {
        res.status(400).json({ erro: 'Dados inválidos.', problemas });
        return;
    }

// Sucesso (200): devolve o resultado da soma
    res.status(200).json({ resultado: somar(num1, num2, num3) });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno no servidor.' });
    }
}