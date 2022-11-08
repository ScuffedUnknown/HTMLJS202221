var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100
var y = 300
var radius = 50
var speed = 10
var speedX = speed 
var speedY = speed

var shrek = new Image();
shrek.src = "images/shrek.webp";
shrek.onload = function(){
    main();
}
var bg = new Image();
bg.src= "images/swamp.webp"
bg.onload = function(){
    main()
}


function main() {
    ctx.clearRect(300,0,canvas.width,canvas.height);
    //drawCircle('#D8A199', x,y,radius)
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height )
    ctx.drawImage(shrek, x - radius,y - radius, 100, 100)
    x += speedX;
    y += speedY;

    
    timer = requestAnimationFrame(main);
    console.log(x)

    createCanvasBoundary(x, canvas.width,radius,'speedX');
    createCanvasBoundary(y, canvas.height,radius,'speedY');

}
function drawCircle(color, posX, posY, radius){


    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(posX,posY,radius,0,2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();

}
function createCanvasBoundary(position, canvasSize, objectRadius, direction){
    if( position > canvasSize - objectRadius || position < objectRadius){
        if(direction == "speedX"){
            speedX *= -1
        }
        else{
            speedY *= -1
        }
    }
}

