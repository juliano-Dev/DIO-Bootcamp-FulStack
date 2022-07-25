//soma de numeros no intervalo

let menor = gets(), maior = gets()
let n1 = parseInt(maior)
let n2 = parseInt(menor)
function soma(n1, n2){
    if(n1 <= 1 || n2 <= 1)
    if(n1 > n2) maior = n1, menor = n2
    if(n2 > n1) maior = n2, menor = n1
    let somaN = 0
    for(let i = 0; i<= maior; i++){
        somaN += i
    }
    return somaN
}
console.log(soma(n1, n2))
