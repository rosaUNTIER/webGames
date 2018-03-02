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
ctx.beginPath();
ctx.rect(0, 0, FIELD, FIELD);
ctx.fillStyle"#000000";
ctx.fill();

