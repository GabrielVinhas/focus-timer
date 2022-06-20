const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const minutesUp = document.querySelector('.minutes-up')
const minutesDown = document.querySelector('.minutes-down')

const tree = document.querySelector('#tree')
const cloud = document.querySelector('#cloud')
const market = document.querySelector('#market')
const fire = document.querySelector('#fire')

const forestAudio = new Audio("./sounds/floresta.wav")
const rainAudio = new Audio("./sounds/chuva.wav")
const marketudio = new Audio("./sounds/cafeteria.wav")
const firePlaceAudio = new Audio("./sounds/lareira.wav")


let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}


function stopTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countDown () {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if(minutes <= 0) {
            return
        }
         
        if (seconds <= 0) {
            seconds = 60
            
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)
}


function forestSoundToggle() {
    if(forestAudio.paused) {
        forestAudio.play()
    } else {
        forestAudio.pause()
    }
} 

function rainSoundToggle() {
    if(rainAudio.paused) {
        rainAudio.play()
    } else {
        rainAudio.pause()
    }
}

function marketSoundToggle() {
    if(marketudio.paused) {
        marketudio.play()
    } else {
        marketudio.pause()
    }
}

function fireSoundToggle() {
    if(firePlaceAudio.paused) {
        firePlaceAudio.play()
    } else {
        firePlaceAudio.pause()
    }
}

play.addEventListener('click', function() {
    countDown()
})

stop.addEventListener('click', function() {
    stopTimer()
})

minutesUp.addEventListener('click', function() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

minutesDown.addEventListener('click', function() {
    minutesDisplay.textContent = String((minutesDisplay.textContent) - 5).padStart(2, "0")

    if(minutesDisplay.textContent <= 0) {
        (minutesDisplay.textContent = 0)
    }
})

tree.addEventListener('click', function() {
    tree.classList.toggle('selectedTree')
    
    cloud.classList.remove('selectedCloud')
    market.classList.remove('selectedMarket')
    fire.classList.remove('selectedFire')
    
    forestSoundToggle()
})

cloud.addEventListener('click', function() {
    cloud.classList.toggle('selectedCloud')

    tree.classList.remove('selectedTree')
    market.classList.remove('selectedMarket')
    fire.classList.remove('selectedFire')

    rainSoundToggle()
})

market.addEventListener('click', function() {
    market.classList.toggle('selectedMarket')

    tree.classList.remove('selectedTree')
    cloud.classList.remove('selectedCloud')
    fire.classList.remove('selectedFire')

    marketSoundToggle()
})

fire.addEventListener('click', function() {
    fire.classList.toggle('selectedFire')

    tree.classList.remove('selectedTree')
    cloud.classList.remove('selectedCloud')
    market.classList.remove('selectedMarket')

    fireSoundToggle()
})