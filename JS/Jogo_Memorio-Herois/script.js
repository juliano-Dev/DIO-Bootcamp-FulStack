const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard
let secondCard
let lockBoard = false

//virar a carta
function flipCard(){
    if(lockBoard) return
    if(this === firstCard) return

    this.classList.add('flip')

    if(!hasFlippedCard){
        hasFlippedCard = true
        firstCard = this
        return
    }
    secondCard = this
    hasFlippedCard = false
    checkForMatch()

}

//verifica se as cartas são iguais
function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards()
        return
    }

    unflipCards()
}

//desabilita as cartas
function disableCards(){   
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()

}

//desvira as cartas
function unflipCards(){
    lockBoard = true

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        
        resetBoard()
    }, 1500)
}

//reseta o tabuleiro
function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]

}

//embaralha as cartas
(function shuffle(){
    cards.forEach((card) =>{
        let randomPosition = Math.floor(Math.random() * 16)
        card.style.order = randomPosition
    })
})()

//conta numero de cartas
/*
function countCards(){
    let element =  document.getElementsByTagName('.card')
    let count = 0
    Array.prototype.forEach.call(element, function(){
        count++
    })
    return count
}
*/

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})






