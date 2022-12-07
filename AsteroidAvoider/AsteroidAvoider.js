var canvas = document.getElementById("canvas")

var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var numAsteroid = 20

var asteroids = [];
var gameState = [];
var ship = new PlayerShip()
var gameOver = true
var currentState = 0
var score = 0
var highscore = 0

function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.width = 20
    this.height = 20
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.vx = 0
    this.vy = 0
    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
    this.moveShip = function () {
        this.x += this.vx
        this.y += this.vy
        //boundaries
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2
            this.vy = 0
        }
        if (this.y < this.height / 2) {
            this.y = this.height / 2
            this.vy = 0
        }
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2
            this.vx = 0
        }

        if (this.x < this.width / 2) {
            this.x = this.width / 2
            this.vx = 0
        }
    }
}

document.addEventListener('keydown', pressKeyDown)
document.addEventListener('keyup', pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //ship goes up
            ship.up = true
        }
        if (e.keyCode == 65) {
            //ship goes left
            ship.left = true
        }
        if (e.keyCode == 68) {
            //ship goes  right
            ship.right = true
        }
        if (e.keyCode == 83) {
            //ship goes down
            ship.down = true
        }
        if (e.keyCode == 38) {
            //ship goes up
            ship.up = true
        }
        if (e.keyCode == 37) {
            //ship goes left
            ship.left = true
        }
        if (e.keyCode == 39) {
            //ship goes  right
            ship.right = true
        }
        if (e.keyCode == 40) {
            //ship goes down
            ship.down = true
        }
    }
    if (gameOver) {

        if (e.keyCode == 32) {
            if (currentState == 2) {
                //from gameover screen
                currentState = 0
                numAsteroid = 20
                score = 0
                asteroids = []
               
                gameStart()
                main()
            } else {
                //from main menu
                gameOver = false
                currentState = 1
                scoreTimer()
                main()
            }

        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            //ship goes up
            ship.up = false
        }
        if (e.keyCode == 65) {
            //ship goes left
            ship.left = false
        }
        if (e.keyCode == 68) {
            //ship goes  right
            ship.right = false
        }
        if (e.keyCode == 83) {
            //ship goes down
            ship.down = false
        }
        if (e.keyCode == 38) {
            //ship goes up
            ship.up = false
        }
        if (e.keyCode == 37) {
            //ship goes left
            ship.left = false
        }
        if (e.keyCode == 39) {
            //ship goes  right
            ship.right = false
        }
        if (e.keyCode == 40) {
            //ship goes down
            ship.down = false
        }
    }

}
function Asteroid() {
    this.radius = randomNumber(15, 2)
    this.x = randomNumber(canvas.width - this.radius, this.radius)
    this.y = randomNumber(canvas.height - this.radius, this.radius) - canvas.height;
    this.vy = randomNumber(10, 5)
    this.color = 'white'

    this.drawAsteroid = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore();

    }
}


function randomNumber(high, low) {
    return Math.random() * (high - low) + low
}
function detectCollsion(distance, calcDistance) {
    return distance < calcDistance
}
function scoreTimer() {
    if (!gameOver) {
        score++
        if (score % 5 == 0) {
            numAsteroid += 10


        }
        setTimeout(scoreTimer, 1000)
    }
}


//gamestatemmoment
gameState[0] = function () {
    ctx.save()
    ctx.font = '30px Arial'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = '30px Arial'
    ctx.fillText("PRESS SPACE TO START", canvas.width / 2, canvas.height / 2 + 20)
}
gameState[1] = function () {
    ctx.save()
    ctx.font = '15px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText('Score: ' + score.toString(), canvas.width - 150, 30)
    ctx.restore()
    //movement
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }

    if (ship.left) {
        ship.vx = -5

    } else if (ship.right) {
        ship.vx = 5
    } else {
        ship.vx = 0
    }



    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollsion(distance, (ship.height / 2 + asteroids[i].radius))) {
            gameOver = true
            currentState = 2
            main();
            return
            //alert("Hit asteroid Game Over")
        }
        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomNumber(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomNumber(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height
        }
        asteroids[i].y += asteroids[i].vy
        asteroids[i].drawAsteroid();
    }
    ship.moveShip()
    ship.drawShip();

    while (asteroids.length < numAsteroid) {
        //add and create new asteroids
        asteroids.push(new Asteroid());
    }
}
gameState[2] = function () {
    if (score > highscore) {
        highscore = score
        ctx.save()
        ctx.fillStyle = 'white'
        ctx.font = '30px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('You Crashed, your score was:' + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText('Your new high score is:' + highscore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.fillText('New Record:' + highscore.toString(), canvas.width / 2, canvas.height / 2)
        ctx.font = '15px Arial'
        ctx.fillText("PRESS SPACE TO RESTART", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()

    }
    else {
        ctx.save()
        ctx.fillStyle = 'white'
        ctx.font = '30px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('You Crashed, your score was:' + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText('Your high score is:' + highscore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.font = '15px Arial'
        ctx.fillText("PRESS SPACE TO RESTART", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()
    }
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    gameState[currentState]();
    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }

}
function gameStart() {
    for (var i = 0; i < numAsteroid; i++) {
        asteroids[i] = new Asteroid();
    }
    ship = new PlayerShip()
}
