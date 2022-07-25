//Verificar qual das entradas é o menor tempo


let input = parseInt(gets());
let n_tempo = []

for(let i = 0; i < input; i++){
  n_tempo.push(parseFloat(gets()))
}

n_tempo.sort((a, b) => a -b)

console.log(n_tempo.splice(0, 1))
