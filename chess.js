var board = document.getElementById('chess');
var ctx = board.getContext('2d');

//how big is one field in pixels
const FIELD = 80;
//chess .. uh .. 
var colors = [
white,
black
];
//where those fields are
var xPos = 0,
    yPos = 0,
    
//circling through the field
for(j = 0; j <= 7; j++){
if (j%2 == 0){
  	ctx.beginPath();
  	ctx.rect(xPos*, k*pos, FIELD, FIELD);
		var color = colors[0];
		ctx.fillStyle = color;
		ctx.fill();
}
