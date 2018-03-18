// Variáveis Globais - Usadas em todo o escopo da aplicação

// Definindo o alfabeto a ser trabalhado
let alfabeto = ['A','B','C','D','E',
            'F','G','H','I','K',
            'L','M','N','O','P',
            'Q','R','S','T','U',
            'V','W','X','Y','Z'];

let coluna = 0;
let linha = 0;
let chave = "peixe assado".toUpperCase();
let mensagem = "O cara e bom mesmo";

// Definindo a matriz
let matriz = [[],[],[],[],[]];

function tirarLetrasRepetidasChave(vetChave){
    //console.log("vetChave: " + vetChave);
    let aux = '';
    //console.log("chave no inicio: " + chave);

    vetChave.forEach(element => {
        if(element === 'J'){
            element = 'I';
        }
        if(aux.indexOf(element) === -1){
            aux += element;            
        }
    });
    chave = aux;
    //console.log("chave no final: " + chave);
}

tirarLetrasRepetidasChave(stringToArray(chave));

function stringToArray(chave){
    let arrayChave = [];
    let aux = chave.split('');
    for(let i = 0; i < aux.length; i++){
        if(aux[i] !== ' '){
            arrayChave.push(aux[i]);
        }
    }
    return arrayChave;
}

function tirarLetraDuplicadasAlfabeto(palavraChave, alfabeto){
    palavraChave.forEach( letra => {
        let indice = alfabeto.indexOf(letra);
        if(indice > -1){
            alfabeto.splice(indice,1);
        }
    });
    return alfabeto;
}

function preencherMatrizComChave(vetChave){
    //1º Tentativa

    /* const matrizChave = [...new Set(`${vetChave}${novoAlfabeto}`)]
    console.log("VETCHAVE: " + vetChave);
    console.log("NOVO ALFABETO: " + novoAlfabeto);
    console.log("Matriz chave: " + matrizChave);

    for(let i = 0; i < matrizChave.length; i += 5){
        matriz.push(matrizChave.slice(i, (i+5)));
    }

    console.log('matriz final: ' + matriz); */
    
    //-------------------------------------------------

    // 2º Tentativa    
    
    /* console.log("matriz antes: " + matriz);
    vetChave.forEach(element => {     
        if(coluna % 5 >= 0 || coluna === 0){
            matriz[linha][coluna] = element;
            coluna++;
            //console.log("matriz meio if: " + matriz);
        }
        else{
            linha++;
            coluna = 0;
        }
    }); */

    // ------------------------------------------------

    // 3º Tentativa

    /* for (const letra of vetChave) {
        if((coluna % 5 >= 0 && coluna % 5 < 5) || coluna === 0){
            matriz[linha][coluna] = letra;
            coluna++;
            console.log("matriz meio if: " + matriz);
        }
        else{
            linha++;
            coluna = 0;
        }
    }
    */
    
    // -----------------------------------------------------------------

    // 4º Tentativa

    coluna = 0;
    linha = 0;
    for(let i = 0; i < chave.length; i++){
        if( coluna % 5 !== 0 || coluna === 0 ){
            matriz[linha][coluna] = chave[i];
            coluna++;
        }else{
            linha ++;
            coluna = 0;
            i--;
        }
    }

    //console.log("matriz com chave: " + matriz);
}

preencherMatrizComChave(stringToArray(chave));

function preencherMatrizComAlfabeto(novoAlfabeto){
    for(let i = 0; i < novoAlfabeto.length; i++){
        if( coluna % 5 !== 0 || coluna === 0 ){
            matriz[linha][coluna] = novoAlfabeto[i];
            coluna++;
        }else{
            linha ++;
            coluna = 0;
            i--;
        }
    }
    console.log("matriz completa: " + matriz)
}

preencherMatrizComAlfabeto(tirarLetraDuplicadasAlfabeto(stringToArray(chave),alfabeto));