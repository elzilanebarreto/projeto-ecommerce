import { error } from 'console';
import leia = require('readline-sync');
import { LivroController } from './src/controller/LivroController';
import { LivrosFisicos } from './src/model/LivrosFisicos';

export function main(){

    let livros: LivroController = new LivroController();

    let opcao: number, id: number, anoPublicacao: number, numeroPaginas: number, preco: number;
    let titulo: string, autor: string, editora: string;

    // let livro1: LivrosFisicos = new LivrosFisicos(livros.gerarId(), 'Harry Potter', 'JK Rowling', 1997, 352, 45.99, 'Rocco');
    // livros.cadastrar(livro1);

    while (true){

        console.log('*******************************************');
        console.log('                                           ');
        console.log('               📚 Livraria                ');
        console.log('                                           ');
        console.log('*******************************************');
        console.log('                                           ');
        console.log('          1 - Cadastrar Livro              ');
        console.log('          2 - Listar todos os livros       ');
        console.log('          3 - Buscar livro pelo código     ');
        console.log('          4 - Atualizar dados de um livro  ');
        console.log('          5 - Excluir um livro             ');
        console.log('          6 - Sair                         ');
        console.log('                                           ');
        console.log('*******************************************');
        console.log('                                           ');


        console.log('Entre com a opção desejada: ');
        opcao = leia.questionInt('');

        if(opcao === 6){
            console.log('\nLivraria Online agradece e te deseja uma ótima leitura!');
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1: 
                console.log('\n\nCadastrar Livro\n\n');
                
                console.log('Digite o título do livro: ');
                titulo = leia.question('');

                console.log('Digite o autor do livro: ');
                autor = leia.question('');

                console.log('Digite o ano de publicação do livro: ');
                anoPublicacao = leia.questionInt('');

                console.log('Digite a quantidade de páginas do livro: ');
                numeroPaginas = leia.questionInt('');
                
                console.log('Digite o preço do livro: ');
                preco = leia.questionFloat('');
                
                
                console.log('Digite o nome da editora do livro: ');
                editora = leia.question('');

                livros.cadastrar(new LivrosFisicos(livros.gerarId(), titulo, autor, anoPublicacao, numeroPaginas, preco, editora));
                
                keyPress();
                break;
            case 2:
                console.log('\n\nListar todos os livros\n\n');
                livros.listarTodos();

                keyPress();
                break;
            case 3:
                console.log('\n\nBuscar livro pelo código\n\n');
                console.log('Digite o ID do livro: ');
                id = leia.questionInt('');

                livros.procurarPorNumero(id);

                keyPress();
                break;
            case 4:
                console.log('\n\nAtualizar dados do livro\n\n');

                console.log('Digite o ID do livro: ');
                id = leia.questionInt('');

                
                try{
                    let livro = livros.buscarNoArray(id);
                    
                    if(!livro){
                        throw new Error(`Livro com ID ${id} não encontrado!`);
                    } else{
                        console.log('Digite o título do livro: ');
                        titulo = leia.question('');

                        console.log('Digite o autor do livro: ');
                        autor = leia.question('');

                        console.log('Digite o ano de publicação do livro: ');
                        anoPublicacao = leia.questionInt('');

                        console.log('Digite a quantidade de páginas do livro: ');
                        numeroPaginas = leia.questionInt('');
                        
                        console.log('Digite o preço do livro: ');
                        preco = leia.questionFloat('');
                        
                        
                        console.log('Digite o nome da editora do livro: ');
                        editora = leia.question('');


                        livros.atualizar(new LivrosFisicos(id, titulo, autor, anoPublicacao, numeroPaginas, preco, editora));
                    }
                } catch (error: any){
                    console.log(`ERRO: ${error.message}`);
                }

                keyPress();
                break;
            case 5:
                console.log('\n\nDeletar Livro\n\n');
                
                console.log('Digite o ID do livro que deseja deletar: ');
                id = leia.questionInt('');

                livros.deletar(id);

                keyPress();
                break;
            default:
                console.log('Opção Inválida!');

                keyPress();
                break;

        }


    }
} 

function sobre(): void{
    console.log('\n*****************************************************');
    console.log('Projeto Desenvolvido por: ');
    console.log('Elzilane Barreto - barretoelzilane@gmail.com');
    console.log('https://github.com/elzilanebarreto');
    console.log('*****************************************************');
}

function keyPress(): void{
    console.log('\nPressione enter para continuar...');
    leia.prompt();
}

main();