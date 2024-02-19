"use strict"

const gameBot = function(maxValue, attemptsNum){

    let randomNumber = Math.floor(Math.random() * maxValue)
    let attempts = attemptsNum

    const examConfirm = function(boolValue){
        if(boolValue){
            attempts = attemptsNum
            programmBot()
        } else{
            return
        }
    }

    const programmBot = function(){
        let answer = prompt('Угадай число от 1 до 100')
        let restartGame
        if(answer === null){
            alert('Игра окончена')
            return
        } else if(isNaN(answer)){
            alert('Введите число')
            programmBot()
        }

        attempts--

        switch(true){
            case +answer > randomNumber && attempts !== 0:
                alert(`загаданное число меньше, попыток осталось ${attempts}`)
                programmBot()
                break
            case +answer < randomNumber && attempts !== 0:
                alert(`загаданное число больше, попыток осталось ${attempts}`)
                programmBot()
                break
            case +answer === randomNumber:
                alert(`Поздравляю, вы угадали, загаданное число ${randomNumber}`)
                break
            case attempts === 0:
                restartGame = confirm(`Попытки кончились, хотите сыграть еще ?`)
                examConfirm(restartGame)
        }
    }
    programmBot()
}

gameBot(101, 10)
