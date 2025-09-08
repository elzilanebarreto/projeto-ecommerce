import { Livros } from "../model/Livros";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository{
    
    procurarPorNumero(id: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): void {
        throw new Error("Method not implemented.");
    }
    cadastrar(livro: Livros): void {
        throw new Error("Method not implemented.");
    }
    atualizar(livro: Livros): void {
        throw new Error("Method not implemented.");
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.");
    }

}