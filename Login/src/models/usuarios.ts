import fs from 'fs';
import path from 'path';

// Molde do usuário cadastrado no arquivo JSON
export interface Usuario {
    usuario: string;
    senha: string;
}

// Lê o arquivo usuarios.json e devolve o usuário cadastrado
export function buscarUsuario(): Usuario {
    // __dirname aponta para a pasta deste arquivo, então o caminho não depende de onde o comando foi executado
    const caminho = path.join(__dirname, 'usuarios.json');
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(conteudo);
}