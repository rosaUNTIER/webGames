var board = getElementById("board");
var ctx = board.getContext("2d");

var xBoard = 0,
		yBoard = 0,
    xField = 80,
    yField = 80;
var colors = [
		"red",
    "#ef4f43",
    "#ff5900",
    "#ffd900",
    "#50a161",
    "#FF0000",
    "#400022",
    "#ff00f4"
];
for (i = 0; i < 8; i++){
var inc = 80;
ctx.beginPath();
ctx.rect(xBoard+inc*i+1, yBoard, xField, yField);
var color = colors[i];
ctx.fillStyle = color;
ctx.fill();
}


