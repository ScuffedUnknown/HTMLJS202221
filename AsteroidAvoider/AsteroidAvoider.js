var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var numAsteroid = 20
var asteroids=[];


function Asteroid(){
    this.radius = randomNumber(15,2)
    this.x=randomNumber(canvas.width - this.radius,this.radius)
    this.y=randomNumber(canvas.height - this.radius,this.radius) - canvas.height;
    this.vy=randomNumber(10,5)
    this.color = 'white'
 
    this.drawAsteroid = function(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius ,0  ,Math.PI*2,true) 
        ctx.closePath()
        ctx.fill()
        ctx.restore();
        console.log(this.x,this.y,this.radius, this.color, canvas.height);
    }
}
for(var i = 0;i<numAsteroid;i++){
    asteroids[i] = new Asteroid();
}

function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for(var i=0;i<asteroids.length;i++){
        if(asteroids[i].y>canvas.height+asteroids[i].radius){
            asteroids[i].x = randomNumber(canvas.width-asteroids[i].radius,asteroids[i].radius)
            asteroids[i].y = randomNumber(canvas.height-asteroids[i].radius,asteroids[i].radius)-canvas.height
        }
        asteroids[i].y+= asteroids[i].vy
        asteroids[i].drawAsteroid();
    }


    timer = requestAnimationFrame(main)
}
function randomNumber(high,low){
    return Math.random() * (high-low) + low
}