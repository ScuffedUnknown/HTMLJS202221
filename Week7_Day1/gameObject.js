var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var timer = requestAnimationFrame(main)
var gil = new Image()
gil.src = "images/image2-1.webp"
ctx.fillStyle = 'green'
//ctx.fillRect(350,250,100,100)
ctx.fillRect(500,250,100,100)

function randomRange(high,low){
    return Math.random()*(high-low) + low
}

function GameObject(){
    this.w = randomRange(100,10)
    this.h = this.w
    this.r = randomRange(50,5)
    this.x = 400    //randomRange(canvas.width-this.w,0)
    this.y = 10//randomRange(canvas.height-this.h,0)
    this.vx = randomRange(10,-10)
    this.vy = randomRange(10,-10)

    this.color = `rgb(${randomRange(255,0)},${randomRange(255,0)},${randomRange(255,0)})`

    this.drawSquare = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    this.drawCircle = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
        ctx.closePath()
        ctx.fill()
    }
    this.drawSprit = function(){
        ctx.drawImage(gil,this.x-this.r,this.y-this.r,this.r*2,this.r*2)
    }
    this.move = function(){
        this.x += this.vx
        this.y += this.vy
        
        if(this.y <this.r){
            this.y=this.r
            this.vy=this.vy*-1
        }
        if(this.y >canvas.height-this.r){
        this.y= canvas.height -this.r
        this.vy*=-1
    }
        if(this.x < this.r){
        this.y=this.r
        this.vx*=-1
    }
        if(this.x >canvas.width-this.r){
        this.x = canvas.width -this.r
        this.vx*=-1
    }
}
}


var numberOfObjects = 100
var circles = []

var square = new GameObject()
var square2 = new GameObject()
var circle = new GameObject()
circle.drawCircle()
square.drawCircle()
square2.drawCircle()

for(var i =0;i<numberOfObjects;i++){
    circles[i] = new GameObject()
}

function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
   // square.move()
    //square2.move()
    //circle.move()
    //circle.drawCircle()
//square.drawCircle()
//square2.drawCircle()
timer = requestAnimationFrame(main)
for(var i = 0; i< circles.length;i++){
    circles[i].move()
    circles[i].drawCircle()
    circles[i].drawSprit()
    
}
}

main();