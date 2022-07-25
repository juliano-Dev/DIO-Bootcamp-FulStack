//retorna os numeros pares de um array
function par(){
    let array = [2, 3, 5, 7, 11, 13, 18, 34]
    let par = []
    for(let i=0; i <= array.length; i++){
        if(array[i] % 2 == 0) {
            par[i] = array[i]
            console.log(par[i])
        }
    }
    return 
}
par()
