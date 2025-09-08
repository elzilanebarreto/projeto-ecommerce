import { Livros } from "./Livros";

export class LivrosFisicos extends Livros{
    private _editora: string;

    constructor(id: number, titulo: string, autor: string, anoPublicacao: number, numeroPaginas: number, preco: number, editora: string){
        super(id, titulo, autor, anoPublicacao, numeroPaginas, preco);
        this._editora = editora;
    }

    public get editora(){
        return this._editora;
    }

    public set editora(editora: string){
        this._editora = editora;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Editora: ${this._editora}`);
    }
}