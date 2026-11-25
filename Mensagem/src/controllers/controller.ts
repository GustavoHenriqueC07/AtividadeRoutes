import type { Request, Response } from "express";
import type { Mensagem } from "../models/mensagem.js";

export function criarMensagem(req: Request, res: Response): void {

    try {
        // Recebendo os dados
        const { nome, idade, timeFavorito } = req.body;

        // Validando os campos
        if (
            typeof nome !== "string" ||
            !nome.trim() ||
            typeof idade !== "number" ||
            !Number.isInteger(idade) ||
            idade < 0 ||
            typeof timeFavorito !== "string" ||
            !timeFavorito.trim()
        ) {
            res.status(400).json({
                erro: "Dados inválidos ou incompletos."
            });
            return;
        }

        // Criando o objeto
        const mensagem: Mensagem = {
            nome,
            idade,
            timeFavorito
        };

        // Montando a resposta
        res.status(200).json({
            mensagem: `Olá, ${mensagem.nome}! Você tem ${mensagem.idade} anos e torce para o ${mensagem.timeFavorito}!`
        });

    } catch (error) {
        res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
}