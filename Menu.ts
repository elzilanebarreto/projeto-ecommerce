import leia = require('readline-sync');

export function main(){

    let opcao;

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

                keyPress();
                break;
            case 2:
                console.log('\n\nListar todos os livros\n\n');

                keyPress();
                break;
            case 3:
                console.log('\n\nBuscar livro pelo código\n\n');
                
                keyPress();
                break;
            case 4:
                console.log('\n\nAtualizar dados do livro\n\n');

                keyPress();
                break;
            case 5:
                console.log('\n\nDeletar Livro\n\n');

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