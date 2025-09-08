import { Livros } from "../model/Livros";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository{

    private listaLivros: Array<Livros> = new Array<Livros>();
    id: number = 0;

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

    public gerarId(): number{
        return ++ this.id;
    }

    public buscarNoArray(id: number): Livros | null {
        for(let livro of this.listaLivros){
            if(livro.id === id){
                return livro;
            }
        }

        return null;
    }

}