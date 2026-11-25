// Molde dos 3 números esperados no body
export interface SomaBody {
    num1: unknown;
    num2: unknown;
    num3: unknown;
}

// Confere cada campo e devolve a lista de problemas encontrados (vazia = tudo certo)
export function validarNumeros(dados: SomaBody): string[] {
    const problemas: string[] = [];

    for (const [campo, valor] of Object.entries(dados)) {
        if (valor === undefined) {
            problemas.push(`O campo "${campo}" não foi enviado.`);
        } else if (typeof valor !== 'number' || !Number.isFinite(valor)) {
            problemas.push(`O campo "${campo}" precisa ser um número.`);
        }
    }

return problemas;
}

// Soma os três números (só é chamada depois da validação)
export function somar(a: number, b: number, c: number): number {
    return a + b + c;
}