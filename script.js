let playerScore = 0;
let computerScore = 0;
let btn = document.querySelectorAll('button')

function computerChoise() {
    let value = ['rock', 'paper', 'scissor']
    return value[Math.floor(Math.random() * value.length)]
}


function playerChoise(e) {
    return e.target.textContent
}

function buttonDisable() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}
function game(e) {
    let cc = computerChoise()
    let pc = playerChoise(e)
    let result = ''

    if (cc == 'rock' && pc == 'scissor' || cc == 'paper' && pc == 'rock' || cc == 'scissor' && pc == 'paper') {

        computerScore += 1
        result = (`computer's ` + cc + ' Beats ' + ` player's ` + pc)
        if (computerScore == 5) {
            result+="Ohh You Lose"
            buttonDisable()
        }
    }
    else if (pc == 'rock' && cc == 'scissor' || pc == 'paper' && cc == 'rock' || pc == 'scissor' && cc == 'paper') {
        playerScore += 1
        result = (`player's ` + pc + ' Beats ' + `computer's ` + cc)
        if (playerScore == 5) {
            result+="Congratulation You Won"
            buttonDisable()
        }

    }

    score = 'Computer Score = ' + computerScore + ' Player Score = ' + playerScore
    
    const rslt= document.querySelector('.score');
    rslt.textContent = score
    rslt.classList.add('resultupdate');
    const rslt2= document.querySelector('.result');
    rslt2.textContent = result
    rslt2.classList.add('resultupdate')
}


function fn(obj) {
    obj.addEventListener('click', game)
}

btn.forEach(fn)

