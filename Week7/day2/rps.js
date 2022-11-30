var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var gun = new Image();
var gun2 = new Image();
var win =0
var lose = 0
gun.src = 'images/gun.jpg'
rock.src = 'images/rock.jpg'
paper.src = 'images/paper.jpg'
scissors.src = 'images/scissors.jpg'
hrock.src = 'images/rock2.jpg'
hpaper.src = 'images/paper2.jpg'
hscissors.src = 'images/scissors2.jpg'
gun2.src = 'images/gun.jpg'
var result = 'Select A Button From Above to Chose'

hscissors.onload = function(){
draw(rock,paper,scissors,gun,hrock,hpaper,hscissors,gun2,result)
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
    draw(rock,paper,scissors,gun,hrock,hpaper,hscissors,gun2,result)
}
}

function draw(rock,paper,scissor,gun,crock,cpaper,cscissor,cgun){

if(gameOver == true){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = '#9AFF12'
ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.font = '30px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black'
    ctx.fillText("Welcome to RPSG, Press Space to Play",canvas.width/2,canvas.height/2)
    return
}

ctx.clearRect(0,0,canvas.width,canvas.height)
ctx.fillStyle = '#9AFF12'
ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.font = '30px Arial'
ctx.textAlign = 'center'
ctx.fillStyle = 'black'
ctx.fillText("Player Choices",canvas.width/2,100)
ctx.drawImage(rock,canvas.width/2-rock.width - 100,150)
ctx.drawImage(paper,canvas.width/2-paper.width ,150)
ctx.drawImage(scissor,canvas.width/2-scissor.width + 100,150)
ctx.drawImage(gun,canvas.width/2-gun.width+200,150)


ctx.fillText("Wins:"+win+" /Lost:"+lose,canvas.width/2,50)

ctx.fillText("Computer Choices",canvas.width/2,325)
ctx.drawImage(crock,canvas.width/2-rock.width - 100,375)
ctx.drawImage(cpaper,canvas.width/2-paper.width ,375)
ctx.drawImage(cscissor,canvas.width/2-scissor.width + 100,375)
ctx.drawImage(cgun,canvas.width/2-gun.width+200,375)

ctx.fillText(result,canvas.width/2,525)
}
ctx.fillStyle = '#9AFF12'
ctx.fillRect(0,0,canvas.width,canvas.height)

var rps = ['Rock', 'Paper', 'Scissors','Gun'];


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
document.getElementById('gun').addEventListener('click', function (e) {
    //alert('You Clicked ' + rps[2])
    playGame(rps[3])
})
function playGame(playersChoice) {
    var cpuChoice = Math.floor(Math.random() * 3.80);
    console.log(cpuChoice, playersChoice)
if(gameOver==true){
    return
}
    switch (playersChoice) {
        case 'Rock':
            if (cpuChoice == 0) {
               result = "CPU picked Rock. Its a tie."
               draw(hrock,paper,scissors,gun,hrock,paper,scissors,gun)
            }
            else if (cpuChoice == 1) {
                result = "CPU picked Paper. You Lose."
                draw(hrock,paper,scissors,gun,rock,hpaper,scissors,gun)
                lose ++
            }
            else if (cpuChoice ==3){
                result = 'CPU Picked Gun, You Lost'
                draw(rock,paper,hscissors,gun,rock,hpaper,scissors,gun)
                loss++}
            else {
                result = "CPU picked Rock. You Won."
                draw(hrock,paper,scissors,gun,rock,paper,hscissors,gun)
                win ++
            }
            break;
    }

    switch (playersChoice) {
        case 'Paper':
            if (cpuChoice == 0) {
                result = "CPU picked Rock. You Won"
                draw(rock,hpaper,scissors,gun,hrock,paper,scissors,gun)
                win ++
             }
             else if (cpuChoice == 1) {
                 result = "CPU picked Paper. Its a Tie."
                 draw(rock,hpaper,scissors,gun,rock,hpaper,scissors,gun)
                 

             }
             else if (cpuChoice ==3){
                result = 'CPU Picked Gun, You Lost'
                draw(rock,paper,hscissors,gun,rock,hpaper,scissors,gun)
                lose++}
             else {
                 result = "CPU picked Rock. You Lost."
                 draw(rock,hpaper,scissors,gun,rock,paper,hscissors,gun)
                 lose ++
             }
             break;
    }

    switch (playersChoice) {
        case 'Scissors':
            if (cpuChoice == 0) {
                result = "CPU picked Rock. You Lost."
                draw(rock,paper,hscissors,gun,hrock,paper,scissors,gun)
                lose ++
             }
             else if (cpuChoice == 1) {
                 result = "CPU picked Paper. You Won."
                 draw(rock,paper,hscissors,gun,rock,hpaper,scissors,gun)
                 win ++
             }
             else if (cpuChoice ==3){
                result = 'CPU Picked Gun, You Lost'
                draw(rock,paper,hscissors,gun,rock,hpaper,scissors,gun)
                lose++
             }
             else {
                 result = "CPU picked Rock. You Lost."
                 draw(rock,paper,hscissors,gun,rock,paper,hscissors,gun)
             }

             break;
    }
    switch (playersChoice) {
        case 'Gun':
            if (cpuChoice == 0) {
                result = "CPU picked Rock. You Won."
                draw(rock,paper,scissors,gun,hrock,paper,scissors,gun)
                win++
             }
             else if (cpuChoice == 1) {
                 result = "CPU picked Paper. You Won."
                 draw(rock,paper,scissors,gun,rock,hpaper,scissors,gun)
                 win ++
             }
             else if (cpuChoice ==3){
                result = 'CPU Picked Gun, You Lost'
                draw(rock,paper,scissors,gun,rock,paper,scissors,gun)
                lose++
                
             }
             else {
                 result = "CPU picked Rock. You Won."
                 draw(rock,paper,scissors,gun,rock,paper,hscissors,gun)
                 win++
             }

             break;
    }
}