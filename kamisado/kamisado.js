
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

//useless stuff atm
/*
function fieldBoard(color,position0,position1,position2,position3,position4,position5,position6,position7){
	this.color = color;
	this.position0 = position0;
	this.position1 = position1;
	this.position2 = position2;
	this.position3 = position3;
	this.position4 = position4;
	this.position5 = position5;
	this.position6 = position6;
	this.position7 = position7;
var orange = new fieldBoard("#ffa500",0,9,18,27,36,45,54,63);
var blue = new fieldBoard("#0000ff",1,12,23,26,37,40,51,62);
var violett = new fieldBoard("#934b93",2,15,20,25,38,43,48,61);
var rosa = new fieldBoard("#f3a7f3",3,10,17,24,39,46,53,60);
var yellow = new fieldBoard("#ffff00",4,13,22,31,32,41,50,59);
var red = new fieldBoard("#ff0000",5,8,19,30,33,44,55,58);
var green = new fieldBoard("#008000",6,11,16,29,34,47,52,57);
var brown = new fieldBoard("#521515",7,14,21,28,35,42,49,56);
*/
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

