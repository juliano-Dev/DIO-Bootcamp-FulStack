/*
var jogador1 = 0;
var jogador2 = 2;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('jogadores validos'):
console.log('jogadores invalidos')
if(jogador1 > 0 ){
    console.log('jogador1 pontuou.') 
    placar = jogador1 > jogador2
} 
else if (jogador2 > 0 ) {
    console.log('jogador2 pontuou.')
    placar = jogador1 < jogador2
}
else console.log('Nenhum jogador pontuou')

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou')
        break
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou')
        break
    default:
        console.log('Empate')
}
*/
let array = ['v1', 'v2', 'v3', 'v4', 'v5']
let object = {propriedade1: 'v1', propriedade2: 'v2', propriedade3: 'v3'}

//executa até q a condicao seja falsa
for(let i = 0; i <array.length; i++){
    console.log(i)
}

//executa apartir de uma propriedade 
//com array
for(let i in array){
    console.log(i)
}

//com object
for(let i in object){
    console.log(i)
}

//executa apartir do valor
for(i of array){
    console.log(i)
}

//objects ñ são iteravies

var a = 0
