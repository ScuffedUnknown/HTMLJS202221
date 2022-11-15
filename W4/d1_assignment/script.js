var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "Yellow"
ctx.strokeStyle = 'Black'
ctx.lineWidth = 5
ctx.fillRect(85,302,100,100)
ctx.strokeRect(85,302,100,100)

ctx.beginPath()

ctx.arc(385.5,441.5,66, (4 * Math.PI), false);
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = '#ff00ff'
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = 5
ctx.moveTo(557,308);
ctx.lineTo(667,284);
ctx.lineTo(724,380);
ctx.lineTo(650,464);
ctx.lineTo(548,420);
ctx.lineTo(557,308);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath()
ctx.fillStyle = '#ffff00'

ctx.moveTo(635,496);
ctx.lineTo(667,554);
ctx.lineTo(732,567);
ctx.lineTo(687,617);
ctx.lineTo(695,680);
ctx.lineTo(635,652);
ctx.lineTo(576,680);
ctx.lineTo(583,617);
ctx.lineTo(539,567);
ctx.lineTo(604,554);
ctx.lineTo(635,496);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath()
ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = 5
ctx.moveTo(85,682);
ctx.lineTo(278,549);
ctx.closePath();
ctx.stroke();