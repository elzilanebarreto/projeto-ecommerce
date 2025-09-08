import { error } from "console";
import { Livros } from "../model/Livros";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository{

    private listaLivros: Array<Livros> = new Array<Livros>();
    id: number = 0;

    procurarPorNumero(id: number): void {
        try{
            const buscaLivro = this.buscarNoArray(id);
            if(!buscaLivro){
                throw new Error(`Livro com ID: ${id} não foi encontrado!`);
            }
            buscaLivro.visualizar();
        } catch(error: any){
            console.error(`Erro ao procurar livro: ${error.message}`);
        }
    }

    listarTodos(): void {
        for(let livro of this.listaLivros){
            livro.visualizar();
        }
    }

    cadastrar(livro: Livros): void {
        this.listaLivros.push(livro);
        console.log(`\nO livro número: ${livro.id} foi criada com sucesso!`);
    }

    atualizar(livro: Livros): void {
        
        try{
            let buscaLivro = this.buscarNoArray(livro.id);

            if(!buscaLivro){
                throw new Error(`\nO livro do ID: ${livro.id} não foi encontrado!`);
            } else{
                this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
                console.log(`\nO livro com ID: ${livro.id} foi atualizado com sucesso!`);
            }
        } catch(error: any){
            console.log(`Erro ao atualizar: ${error.message}`);
        }
    }
    
    deletar(id: number): void {
        
        try{
            let buscaLivro = this.buscarNoArray(id);

            if(!buscaLivro){
                throw new Error(`Livro com ID: ${id}, não foi encontrado!`);
            } else{
                this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
                console.log(`\nLivro ID: ${id} deletado com sucesso!`);
            }
            
        } catch(error: any){
            console.log(`Erro ao deletar: ${error.message}`);
        }
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