import type { Request, Response } from 'express';
import { buscarUsuario } from '../models/usuarios.js';

// Atende a rota POST /login
export function fazerLogin(req: Request, res: Response): void {
    try {
    const { usuario, senha } = req.body ?? {};

    // Faltou informação: erro do cliente (400)
    if (!usuario || !senha) {
        res.status(400).json({ erro: 'Informe usuário e senha.' });
        return;
    }

// Pede ao model o usuário cadastrado no JSON
    const cadastrado = buscarUsuario();

// Mesma mensagem para usuário ou senha errados, para não dar pistas a invasores
    if (usuario !== cadastrado.usuario || senha !== cadastrado.senha) {
        res.status(401).json({ erro: 'Usuário ou senha incorretos.' });
        return;
    }

// Credenciais corretas (200)
    res.status(200).json({ mensagem: 'Login realizado com sucesso!' });
    } catch (error) {
// Cobre falhas como arquivo JSON ausente ou corrompido
    res.status(500).json({ erro: 'Erro interno no servidor.' });
    }
}