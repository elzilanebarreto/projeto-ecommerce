export abstract class Livros {
    private _id: number;
    private _titulo: string;
    private _autor: string;
    private _anoPublicao: number;
    private _numeroPaginas: number;

    constructor(id: number, titulo: string, autor: string, anoPublicacao: number, numeroPaginas: number){
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicao = anoPublicacao;
        this._numeroPaginas = numeroPaginas;
    }

    // Método get e set
    public get id(){
        return this._id;
    }

    public set id(id: number){
        this._id = id;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get autor(): string {
        return this._autor;
    }
    public set autor(autor: string) {
        this._autor = autor;
    }

    public get anoPublicao(): number {
        return this._anoPublicao;
    }
    public set anoPublicao(anoPublicacao: number) {
        this._anoPublicao = anoPublicacao;
    }

    public get numeroPaginas(): number {
        return this._numeroPaginas;
    }
    public set numeroPaginas(numeroPaginas: number) {
        this._numeroPaginas = numeroPaginas;
    }

    public visualizar(): void{
        console.log('\n\n**************************************************');
        console.log('                 Dados do Livro:                      ');
        console.log('\n\n**************************************************');
        console.log(`ID do Livro: ${this._id}`);
        console.log(`Título do Livro: ${this._titulo}`);
        console.log(`Autor do Livro: ${this._autor}`);
        console.log(`Ano de Publicação do Livro: ${this._anoPublicao}`);
        console.log(`Número de Páginas do Livro: ${this._numeroPaginas}`);
    }
}