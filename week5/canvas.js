//This is a comment in java script
/*
this is multilinec comment
see
*/
//defines varible to acess the canvas prorpetyies
var canvas = document.getElementById("canvas")
//defines drawing context of the canvas
var ctx = canvas.getContext("2d")

ctx.fillStyle ="rgb(0,0,255)"
ctx.strokeStyle= 'green'
ctx.lineWidth = '5'
ctx.fillRect(30, 30,200,100);
ctx.strokeRect(300,30,200,100);

ctx.moveTo(0,0);
ctx.lineTo(400,300)
ctx.lineTo(800,0)
ctx.stroke();
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.moveTo(800,600)
ctx.lineTo(400,350)
ctx.lineTo(0,600)
ctx.stroke()
ctx.beginPath()
ctx.fillStyle = "#55ddaf"
ctx.strokeStyle = 'yellow'
ctx.lineWidth = '2'

ctx.arc(400,300,50,0, (3 * Math.PI), false);
ctx.closePath()
ctx.fill()


ctx.beginPath()
ctx.moveTo(650,100)
ctx.lineTo(700,140)
ctx.lineTo(675,200)
ctx.lineTo(625,200)
ctx.lineTo(600,140)
ctx.closePath()
ctx.stroke()
ctx.fill()


//var mario = new Image()
mario.src = "images/mario-sprite-super-mario-bros-1-mario-1156289219229b0n5zjzl.png"

mario.onload = function(){
    ctx.drawImage(mario, 300, 200,400,200);
}