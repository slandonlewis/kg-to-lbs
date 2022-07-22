// //Different Bars//
let bars = [
    {
        name: 'Olympic',
        weight: 45
    },
    {
        name: 'Swiss',
        weight: 38
    },
    {
        name: 'Hex/Trap',
        weight: 54
    },
    {
        name: 'Safety Squat Bar',
        weight: 61
    },
]


let x = 0
let red = 25
let blue = 20
let yellow = 15
let green = 10
let white = 5
let black = 2.5
let silverLarge = 1.25
let silverSmall = 0.5
let barbellWeight = bars[x].weight
let totalWeight = bars[x].weight
let plates = []
let i = -1
let totalEl = document.querySelector('#total-load')
let errorMsg = document.querySelector('#errorMsg')
let currentBarEl = document.querySelector('#currentBar')
let silverPlate = false

totalEl.textContent = `${bars[x].weight} LBS`
currentBarEl.textContent = `${bars[x].name} Bar | ${bars[x].weight} LBS`

function changeBar() {
    if (x < bars.length-1) {
        x += 1
        totalWeight = bars[x].weight
        totalEl.textContent = `${bars[x].weight} LBS`
        currentBarEl.textContent = `${bars[x].name} Bar | ${bars[x].weight} LBS`
    } else {
        x = 0
        totalWeight = bars[x].weight
        totalEl.textContent = `${bars[x].weight} LBS`
        currentBarEl.textContent = `${bars[x].name} Bar | ${bars[x].weight} LBS`
    }
}

function addWeight(newWeight) {
    totalWeight += newWeight*2*2.2
    totalEl.textContent = `${totalWeight} LBS`
    i += 1
    plates.push(newWeight)
    errorMsg.textContent = ""
    if (newWeight === 1.25 || newWeight === 0.5) {
        silverPlate = true
    } else {
        silverPlate = false
    }
}

function undoPrevious() {
    if (silverPlate === false) {
        if (i >= 0) {
            totalWeight -= Math.round(plates[i]*2*2.2)
            plates.pop()
            totalEl.textContent = `${totalWeight} LBS`
            errorMsg.textContent = ""
            i -= 1
        } else {
            errorMsg.textContent = "There is no weight on the bar!"
        }
    } else {
        if (i >= 0) {
            totalWeight -= plates[i]*2*2.2
            plates.pop()
            totalEl.textContent = `${totalWeight} LBS`
            errorMsg.textContent = ""
            i -= 1
        } else {
            errorMsg.textContent = "There is no weight on the bar!"
        }        
    }
}

function resetWeight() {
    totalWeight = bars[x].weight
    totalEl.textContent = `${totalWeight} LBS`
    plates = []
    i = -1
    errorMsg.textContent = ""
    silverPlate = false
}

