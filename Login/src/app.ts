import express from 'express'
import type{ Request, Response, NextFunction } from 'express';
import loginRoutes from './routes/routes.js';

const app = express();

// Traduz o JSON recebido para objeto, disponível em req.body
app.use(express.json());

// Registra as rotas do projeto
app.use(loginRoutes);

// Captura erros do próprio Express, como JSON mal formatado
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ erro: 'JSON inválido no corpo da requisição.' });
});

app.listen(3002, () => console.log('Login rodando na porta 3002'));