import express from 'express'
import type { Request, Response, NextFunction } from 'express';
import somaRoutes from './routes/routes.js';

const app = express();

// Traduz o JSON recebido para objeto, disponível em req.body
app.use(express.json());

// Registra as rotas do projeto
app.use(somaRoutes);

// Captura erros do próprio Express, como JSON mal formatado
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ erro: 'JSON inválido no corpo da requisição.' });
});

// Porta diferente da do projeto 1, para poderem rodar juntos
app.listen(3001, () => console.log('Soma rodando na porta 3001'));