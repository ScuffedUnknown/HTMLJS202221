var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var shipSprite = new Image()
shipSprite.src = "images/SHip.png"
shipSprite.onload = function(){
    main()
}
var asteroidSprite = new Image
asteroidSprite.src = "images/asteroid.png"
asteroidSprite.onload = function(){
    main()
}
var StartScreen = new Image()
StartScreen.src = "images/Start.png"
StartScreen.onload = function(){
    main()
}
var poweredup = false
var spawntime = 11
var time = 5
var pickuptime = 5
var numAsteroids = 20
var asteroids = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0


//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()
    pup = new PowerUp()
}

//Constructor Function for Asteroid Class
function Asteroid(){
    this.radius = randomRange(15,2)
    this.x = randomRange(-canvas.width + this.radius, this.radius)
    this.y = randomRange(-canvas.height + this.radius, this.radius)-canvas.height
    this.vy = randomRange(10, 5)
    this.color = "white"

    this.drawAsteroid = function(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.drawImage(asteroidSprite,-this.y,-this.x)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }

}
function PowerUp(){
    this.color = "Red"
    this.x = randomRange(canvas.width-10,10)
    this.y = randomRange(canvas.height-10,10)
    this.radius = randomRange(15,13)
    
    this.drawPowerUp = function(){
      
        
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,this.radius,0, 2 * Math.PI,true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
        //console.log(this.x,this.y)
    }

}


//Setup Keyboard Event Handlers 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if(gameOver){

        //checking for spacebar
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over screen reatarts game
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //empties asteroids array
                asteroids = []
                //resets score
                score = 0
                 poweredup = false
                spawntime = 10
                time = 5
                 pickuptime = 5
                gameStart()
                main()
            }
            else{
                //main screen starts game 
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
            
        }
    }
    
}
function RestartTime() {
    spawntime = 10
}
function pressKeyUp(e){
    if(!gameOver){
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        } 
    }
    
}

//constructor function
function PlayerShip(){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false


    this.drawShip = function(){
       ctx.save()
        ctx.translate(this.x, this.y)
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.drawImage(shipSprite,0,0)
        ctx.restore() 
    }

    this.move = function(){
        this.x -= this.vx
        this.y -= this.vy

        //bottom boundary of screen
        if(this.y > canvas.height - this.h/2){
            this.y = canvas.height - this.h/2
            this.vy = 0
        }
        //top boundary of screen
        if(this.y < this.h/2){
            this.y = this.h/2
            this.vy = 0
        }

        //right boundary of screen
        if(this.x > canvas.width - this.w/2){
            this.x = canvas.width - this.w/2
            this.vx = 0
        }
        //left boundary of screen
        if(this.x < this.w/2){
            this.x = this.w/2
            this.vx = 0
        }
    }
      
}

//Main Screen
gameStates[0] = function(){
    ctx.drawImage(StartScreen,0,0)

}

//Game Screen
gameStates[1] = function(){
    //code for displaying score
    ctx.save()
    ctx.font = "15px Roboto Mono"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()
    //powerup disapears instantly

    //Vertical 
    if(ship.right){
        ship.vx = -3
    }else{
        ship.vx = 3
    }
    
    //Horizontal Movement
    if(ship.up){
        ship.vy = 3
    }else if(ship.down){
        ship.vy = -3
    }else{
        ship.vy = 0
    }
   

    //Loops through all asteroids and can check their position
    for(var i = 0; i < asteroids.length; i++){
        var dX = -ship.y - asteroids[i].x
        var dY = -ship.x - asteroids[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))
        if(poweredup){
            if(spawntime == 3){
                poweredup = false   
 }
        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.width + asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = -randomRange(canvas.height + asteroids[i].radius, asteroids[i].radius) - canvas.height
        }//powerup time doesnt tickdown until newe asteroids
    }else{
        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.width + asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = -randomRange(canvas.height + asteroids[i].radius, asteroids[i].radius) - canvas.height}
        if(detectCollision(distance, (ship.h/2 + asteroids[i].radius))){
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
            return
        }
    }



        if(!gameOver){
            asteroids[i].y += asteroids[i].vy
            asteroids[i].drawAsteroid()
        }
    }
    
    if(!gameOver){
        ship.move()
        ship.drawShip() 
        if(spawntime==0||spawntime==9||spawntime==8||spawntime ==7){
            var dX = ship.x - pup.x
            var dY = ship.y - pup.y
            var distance = Math.sqrt((dX*dX)+(dY*dY))
            //console.log(dX,dY,distance)
            if(detectCollision(distance, (ship.h/2 + pup.radius))){
                console.log("Picked up powerup")
                poweredup =true
            }
            pup.drawPowerUp()
            if(spawntime==0){
                RestartTime()
                 pup.x = randomRange(canvas.width-pup.radius, pup.radius);
                 pup.y = randomRange(canvas.height-pup.radius, pup.radius);

            }
             
            }
        // if(spawntime == 7){
        //     ctx.clearRect(0,0,canvas.width, canvas.height)
        // }
        }
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }


//Game Over
gameStates[2] = function(){
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save() 
        ctx.font = "30px Roboto Mono"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2)
        ctx.font = "15px Roboto Mono"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
        

    }else{
        //keep same score new high score
        ctx.save()
        ctx.font = "30px Roboto Mono"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.font = "15px Roboto Mono"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
    }
    
   
}

function main(){
    //clear canvas 
    //shipY-=1

    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()

    if(!gameOver){
        timer = requestAnimationFrame(main)
    }
    
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance
}

//Timer for Score
function scoreTimer(){
    if(!gameOver){
        score++
        spawntime--
        console.log(spawntime,poweredup)
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 5
            console.log()
        }
        setTimeout(scoreTimer, 1000)
    }

}
