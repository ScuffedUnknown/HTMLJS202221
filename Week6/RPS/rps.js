var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

ctx.font = "40px funny"
ctx.fillText("Welcome to RPS Game", 200, 100)





var rps = ['Rock', 'Paper', 'Scissors'];


document.getElementById('rock').addEventListener('click', function (e) {
    alert('You Clicked ' + rps[0])
    playGame(rps[0])
})

document.getElementById('paper').addEventListener('click', function (e) {
    alert('You Clicked ' + rps[1])
    playGame(rps[1])
})
document.getElementById('scissors').addEventListener('click', function (e) {
    alert('You Clicked ' + rps[2])
    playGame(rps[2])
})

function playGame(playersChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.80);
    console.log(cpuChoice, playersChoice)

    switch (playersChoice) {
        case 'Rock':
            if (cpuChoice == 0) {
                alert("Cpu Picked Rock Its a Tie")
            }
            else if (cpuChoice == 1) {
                alert("CPU picked paper CPU won")
            }
            else {
                alert("CPU picked Scissors You Won")
            }
            break;
    }

    switch (playersChoice) {
        case 'Paper':
            if (cpuChoice == 0) {
                alert("Cpu Picked Rock You Won")
            }
            else if (cpuChoice == 1) {
                alert("CPU picked paper Its a Tie")
            }
            else {
                alert("CPU picked Scissors CPU Won")
            }
            break;
    }

    switch (playersChoice) {
        case 'Scissors':
            if (cpuChoice == 0) {
                alert("Cpu Picked Rock CPU Wom")
            }
            else if (cpuChoice == 1) {
                alert("CPU picked paper You won")
            }
            else {
                alert("CPU picked Scissors Its a Tie")
            }
            break;
    }
}