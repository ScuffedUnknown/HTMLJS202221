var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

//ctx.font = "40px sherif"
//ctx.fillText("Welcome to RPS Game", 200, 100)


var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

rock.src = 'images/rock.jpg'
paper.src = 'images/paper.jpg'
scissors.src = 'images/scissors.jpg'
hrock.src = 'images/rock2.jpg'
hpaper.src = 'images/paper2.jpg'
hscissors.src = 'images/scissors2.jpg'

var result = 'Select A Button From Above to Chose'

hscissors.onload = function(){
draw(rock,paper,scissors,hrock,hpaper,hscissors,result)
}

document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp )
var gameOver = true
function keyPressDown(e){
    console.log(e.keyCode)

}
function keyPressUp(e){
    console.log(e.keyCode)
if(e.keyCode == 32){
    gameOver= false
    draw(rock,paper,scissors,hrock,hpaper,hscissors,result)
}
}

function draw(rock,paper,scissor,crock,cpaper,cscissor){

if(gameOver == true){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.font = '30px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black'
    ctx.fillText("Welcome, press space to play",canvas.width/2,100)
    return
}
ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.font = '30px Arial'
ctx.textAlign = 'center'
ctx.fillStyle = 'black'
ctx.fillText("Player Choices",canvas.width/2,100)
ctx.drawImage(rock,canvas.width/2-rock.width - 100,150)
ctx.drawImage(paper,canvas.width/2-paper.width ,150)
ctx.drawImage(scissor,canvas.width/2-scissor.width + 100,150)


ctx.fillText("Computer Choices",canvas.width/2,325)
ctx.drawImage(crock,canvas.width/2-rock.width - 100,375)
ctx.drawImage(cpaper,canvas.width/2-paper.width ,375)
ctx.drawImage(cscissor,canvas.width/2-scissor.width + 100,375)

ctx.fillText(result,canvas.width/2,525)
}


var rps = ['Rock', 'Paper', 'Scissors'];


document.getElementById('rock').addEventListener('click', function (e) {
    //alert('You Clicked ' + rps[0])
    playGame(rps[0])
})

document.getElementById('paper').addEventListener('click', function (e) {
    //alert('You Clicked ' + rps[1])
    playGame(rps[1])
})
document.getElementById('scissors').addEventListener('click', function (e) {
    //alert('You Clicked ' + rps[2])
    playGame(rps[2])
})

function playGame(playersChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.80);
    console.log(cpuChoice, playersChoice)
if(gameOver==true){
    return
}
    switch (playersChoice) {
        case 'Rock':
            if (cpuChoice == 0) {
               result = "CPU picked Rock. Its a tie."
               draw(hrock,paper,scissors,hrock,paper,scissors)
            }
            else if (cpuChoice == 1) {
                result = "CPU picked Paper. You Lose."
                draw(hrock,paper,scissors,rock,hpaper,scissors)
            }
            else {
                result = "CPU picked Rock. You Won."
                draw(hrock,paper,scissors,rock,paper,hscissors)
            }
            break;
    }

    switch (playersChoice) {
        case 'Paper':
            if (cpuChoice == 0) {
                result = "CPU picked Rock. You Won"
                draw(rock,hpaper,scissors,hrock,paper,scissors)
             }
             else if (cpuChoice == 1) {
                 result = "CPU picked Paper. Its a Tie."
                 draw(rock,hpaper,scissors,rock,hpaper,scissors)
             }
             else {
                 result = "CPU picked Rock. You Lost."
                 draw(rock,hpaper,scissors,rock,paper,hscissors)
             }
             break;
    }

    switch (playersChoice) {
        case 'Scissors':
            if (cpuChoice == 0) {
                result = "CPU picked Rock. You Lost."
                draw(rock,paper,hscissors,hrock,paper,scissors)
             }
             else if (cpuChoice == 1) {
                 result = "CPU picked Paper. You Won."
                 draw(rock,paper,hscissors,rock,hpaper,scissors)
             }
             else {
                 result = "CPU picked Rock. You Lost."
                 draw(rock,paper,hscissors,rock,paper,hscissors)
             }
             break;
    }
}