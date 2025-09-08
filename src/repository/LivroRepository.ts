import { Livros } from "../model/Livros"

export interface LivroRepository{
    procurarPorNumero(id: number): void;
    listarTodos(): void;
    cadastrar(livro: Livros): void; 
    atualizar(livro: Livros): void; 
    deletar(id: number): void; 
}