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
let mensagem = "passaro";

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
    //console.log("matriz completa: " + matriz);
}

preencherMatrizComAlfabeto(tirarLetraDuplicadasAlfabeto(stringToArray(chave),alfabeto));

function manipularMensagem(){
    const message = mensagem.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I').split('').filter(x => x !== ' ');
    //console.log("mensagem: " + message);
    let messageModificada = '';
    for(let i = 0; i < message.length; i++){
        //1º Tentativa
        
        /* const dupleCurrent = message.slice(i, i + 2);
        if(dupleCurrent[0] === dupleCurrent[1]){
            message.slice(i+1,0,'X');
            duples.push(message.slice(i, i + 2));   
        } else if(dupleCurrent.length !== 2){
            dupleCurrent.push('X');
            duples.push(dupleCurrent);
        } else{
            duples.push(dupleCurrent);
        } */

        // ------------------------------------------------
        
        //2º Tentativa

        if(message[i] == message[i+1]){//Caso em que o par(i,i+1) têm letras iguais
            if(message[i] == "X" || message[i + 1] == "X"){//se a letra referente a i OU i+1 for um X
                messageModificada += message[i] + "Z";//substituir letra repetida por um Z.
            }else{
                messageModificada += message[i] + "X";//Senão, substituir letra repetida por um X.
            }
        }else if(i < message.length -1){//Caso em que o i, é o penúltimo item (Evita de estourar a lista por conta do i+1)
            messageModificada += message[i] + message[i+1];//adiciona o par i e i+1.
        }else{
            messageModificada += message[i];//Caso o i ja seja o último item, adiciona-se somente ele (i)
        }

        if(message.length % 2 !== 0 && i === message.length - 1){//Caso eu tenha uma mensagem de tamanho par e o i é o último item da lista
            if(message[i] == "X"){//se a ultima letra for um X
                messageModificada += "Z";//adiciona um Z no final
            }else{
                messageModificada += "X";//senão, adiciona um X
            }
        }
        i++; //Passa para o próximo par
    }
    //console.log("Nova mensagem: " + stringToArray(messageModificada));
    return stringToArray(messageModificada);
}

function quebraNovaMensagemEmPares(novaMensagem){
    let pares = [];
    //console.log(novaMensagem);
    
    for (let i = 0; i < novaMensagem.length; i += 2) {
        let duplaDaVez = novaMensagem.slice(i, i+2);
        pares.push(duplaDaVez);
    }

    //console.log("pares: " + pares);
/*     pares.forEach(par => {
        console.log("par: " + par);
    }); */

    return pares;
}

function coordenadas(pares){
        let coord = [];
        let i = 0;
        //console.log(matriz);
        //console.log(pares);

        // 1º Tentativa

        /* pares.forEach(par => {
            par.forEach(letra => {
                for(let i = 0; i < pares.length*2; i++){
                    for(let j = 0; j < 5; j++){
                        for(let k = 0; k < 5; k++){
                            if(matriz[j][k] == letra){
                                coord[i] = {'linha': j, 'coluna':k}; 
                            }
                            //console.log("linha: " + j + ", coluna: " + k);
                        }
                    }
                }
            });
        }); */

        // ---------------------------------------------------------------------------


    pares.forEach(par => {
        par.forEach(letra => {
            matriz.forEach(coluna => {
                if(coluna.indexOf(letra) != -1){                 
                    coord[i] = {'coluna': coluna.indexOf(letra),'linha': Math.floor(matriz.toString().replace(/,/g,"").indexOf(letra)/5)};
                    i++;
                }
            });
        });
    });
    return coord;
}

coordenadas(quebraNovaMensagemEmPares(manipularMensagem()));