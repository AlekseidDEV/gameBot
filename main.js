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

        if(+answer > randomNumber && attempts !== 0){
            alert(`загаданное число меньше, попыток осталось ${attempts}`)
            programmBot()
        } else if(+answer < randomNumber && attempts !== 0){
            alert(`загаданное число больше, попыток осталось ${attempts}`)
            programmBot()
        } else if(+answer === randomNumber){
            restartGame = confirm(`Поздравляю, вы угадали, загаданное число ${randomNumber}. Хотите сыграть еще ?`)
            examConfirm(restartGame)
            return
        } else if( attempts === 0){
            restartGame = confirm(`Попытки кончились, хотите сыграть еще ?`)
            examConfirm(restartGame)
            return
        }

    }
    programmBot()
}

gameBot(101, 10)
