//contagem de partidas campeonato (partidas--)
let partidas = 0
let aux = 0

let input = gets();
let times = parseInt(input);
while(times > 1)  {
  if(times % 2 != 0){
    partidas = (times - 1) / 2 + 1
    
    //console.log(partidas)
  }
  if(times % 2 == 0){
    partidas = times / 2
  }
    times -= partidas
    aux += partidas
  
}
console.log(aux)
