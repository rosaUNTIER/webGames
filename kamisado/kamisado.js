
var board = document.getElementById('board');
var ctx = board.getContext('2d');

var orange = "#ffa500";
var blue = "#0000ff";
var violett = "#934b93";
var rosa = "#f3a7f3";
var yellow = "#ffff00";
var red = "#ff0000";
var green = "#008000";
var brown = "#521515";

var inkr = [
	1,
	3,
	5,
	-1
];

var colors = [
	orange,
    blue,
    violett,
    rosa,
    yellow,
    red,
    green,
    brown
];

var xPos = 0;
		var xBoard = 0,
		yBoard = 0,
		xField = 80,
		yField = 80,
		pos = 80;
for(j = 0; j <= 7; j++){
	xPos = j;
	for (k = 0; k <= 7; k++){
		
		ctx.beginPath();
		ctx.rect(xPos*pos, k*pos, xField, yField);
		var color = colors[j];
		ctx.fillStyle = color;
		ctx.fill();
		
		if (xPos+inkr[j%4] > 7){
			xPos += inkr[j%4] - 8;
		}
		else if (xPos+inkr[j%4]<0){
			xPos += inkr[j%4] + 8;
		}
		else{
			xPos += inkr[j%4];
		}
	}
}

var storeX = 0; 
var storeY = 0; 
function getCoordinates(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    storeX = x;
    storeY = y;
    console.log("x coords: " + storeX + ", y coords: " + storeY);
    document.getElementById("printXY").innerHTML = "x coords: " + storeX + ", y coords: " + storeY;
}

