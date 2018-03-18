// Variáveis Globais - Usadas em todo o escopo da aplicação

// Definindo o alfabeto a ser trabalhado
let alfabeto = ['A','B','C','D','E',
            'F','G','H','I','j',
            'L','M','N','O','P',
            'Q','R','S','T','U',
            'V','W','X','Y','Z'
            ];

let coluna = 0;
let linha = 0;
let chave = "carambola doida".toUpperCase();
let mensagem = "O cara e bom mesmo";

// Definindo a matriz
let grid = [[],[],[],[],[]];

function tirarLetrasRepetidasChave(){
    vetChave = chave.split('');
    //console.log("vetChave: " + vetChave);
    let aux = ' ';
    //console.log("chave no inicio: " + chave);

    vetChave.forEach(element => {
        if(aux.indexOf(element) === -1){
            aux += element;            
        }
    });
    chave = aux;
    //console.log("chave no final: " + chave);
}

tirarLetrasRepetidasChave();