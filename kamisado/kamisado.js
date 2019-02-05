var Colors = {
	orange: "#ffa500",
	blue: "#0000ff",
	purple: "#934b93",
	pink: "#f3a7f3",
	yellow: "#ffff00",
	red: "#ff0000",
	green: "#008000",
	brown: "#521515",
	white: "#fff",
	black: "#000"}
var Pieces = {
	wOrange: 1, wBlue: 2, wPurple: 3, wPink: 4, wYellow: 5, wRed: 6, wGreen: 7, wBrown: 8,
	bOrange: 9, bBlue: 10, bPurple: 11, bwPink: 12, bYellow: 13, bRed: 14, bGreen: 15, bBrown: 16}
var Squares = {
	none: 0,
	white: 1,
	black: 2,
	both: 3}

var row_0 = [
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black]
var row_1 = [
	Colors.black,
	Colors.orange,
	Colors.blue,
	Colors.purple,
	Colors.pink,
	Colors.yellow,
	Colors.red,
	Colors.green,
	Colors.brown,
	Colors.black]
var row_2 = [
	Colors.black,
	Colors.red,
	Colors.orange,
	Colors.pink,
	Colors.green,
	Colors.blue,
	Colors.yellow,
	Colors.brown,
	Colors.purple,
	Colors.black]
var row_3 = [
	Colors.black,
	Colors.green,
	Colors.pink,
	Colors.orange,
	Colors.red,
	Colors.purple,
	Colors.brown,
	Colors.yellow,
	Colors.blue,
	Colors.black]
var row_4 = [
	Colors.black,
	Colors.pink,
	Colors.purple,
	Colors.blue,
	Colors.orange,
	Colors.brown,
	Colors.green,
	Colors.red,
	Colors.yellow,
	Colors.black]
var row_5 = [
	Colors.black,
	Colors.yellow,
	Colors.red,
	Colors.green,
	Colors.brown,
	Colors.orange,
	Colors.blue,
	Colors.purple,
	Colors.pink,
	Colors.black]
var row_6 = [
	Colors.black,
	Colors.blue,
	Colors.yellow,
	Colors.brown,
	Colors.purple,
	Colors.red,
	Colors.orange,
	Colors.pink,
	Colors.green,
	Colors.black]
var row_7  = [
	Colors.black,
	Colors.purple,
	Colors.brown,
	Colors.yellow,
	Colors.blue,
	Colors.green,
	Colors.pink,
	Colors.orange,
	Colors.red,
	Colors.black]
var row_8 = [
	Colors.black,
	Colors.brown,
	Colors.green,
	Colors.red,
	Colors.yellow,
	Colors.pink,
	Colors.purple,
	Colors.blue,
	Colors.orange,
	Colors.black]
var row_9 = [
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black,
	Colors.black]
	
function getSquareNumber(x, y){
	return(x + 10*y)
}
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');
var scale = 80;
class GameBoard{
	constructor(){
		self = this;
		this.colors = [row_0, row_1, row_2, row_3, row_4, row_5, row_6, row_7, row_8, row_9];
		this.squares = Array(100);
		this.pieces = [];
	}
	show(){
		for(var x = 0; x < 10; x++){
			for (var y = 0; y < 10; y++){
				ctx.beginPath();
				ctx.rect(x*scale, y*scale, scale, scale);
				ctx.fillStyle = this.getSquareColor(x, y);
				ctx.fill();
			}
			this.pieces.forEach(function(element){
				element.show();
			})
		}
	}
	reset(){
		for(var x = 0; x < 10; x++){
			for(var y=0; y < 10; y++){
				if(y == 0 || x == 0 || y == 9 || x == 9){
					this.squares[getSquareNumber(x,y)] = 100;
				}else if(y == 1){
					this.squares[getSquareNumber(x,y)] = 1;
					this.pieces.push(new Piece(x, y, row_1[x], Colors.white));
				}else if(y == 8){
					this.squares[getSquareNumber(x,y)] = 2;
					this.pieces.push(new Piece(x, y, row_8[x], Colors.black));
				}else{
					this.squares[getSquareNumber(x,y)] = 0;
				}
			}
		}
	}
	getPiece(x,y){
		var tmp = 0;
		this.pieces.forEach(function(element){
			
			if(element.x == x && element.y == y){
				tmp = element;
			}
		});
		return(tmp)
	}
	mouseDown(){
		canvas.style.cursor = "grabbing";
		var x = Math.floor((event.clientX - canvas.offsetLeft)/scale);
		var y = Math.floor((event.clientY - canvas.offsetTop)/scale);
		var piece = self.getPiece(x, y);
		if(piece != 0){
			
			piece.lift = true;
		}
	}
	mouseUp(){
		self.pieces.forEach(function(element){
			if(element.lift == true){
				canvas.style.cursor = "grab";
				element.x = Math.floor((event.clientX - canvas.offsetLeft)/scale);
				element.y = Math.floor((event.clientY - canvas.offsetTop)/scale);
				element.lift = false;
			}
		})
	}
	mouseMove(){
		canvas.style.cursor = "grab";
		self.pieces.forEach(function(element){
			if(element.lift == true){
				element.x = ((event.clientX - canvas.offsetLeft)/scale) - 0.5;
				element.y = ((event.clientY - canvas.offsetTop)/scale) - 0.5;
			}
		})
	}
	getSquareColor(x, y){
		return(this.colors[y][x])
	}

}
class Piece{
	constructor(x, y, color, player){
		this.x = x;
		this.y = y;
		this.r = 35;
		this.lift = false;
		this.color = color;
		this.player = player;
	}
	show(){
		ctx.beginPath();
		ctx.arc((this.x + 0.5)*scale, (this.y + 0.5)*scale, this.r, 0, Math.PI*2);
		ctx.fillStyle = this.player;
		ctx.fill();

		ctx.beginPath();
		ctx.arc((this.x + 0.5)*scale, (this.y + 0.5)*scale, this.r-5, 0, Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}
var colorArray = [Colors.orange,
]
var kamisado = new GameBoard();
kamisado.reset();
canvas.addEventListener("mousedown", kamisado.mouseDown);
canvas.addEventListener("mouseup", kamisado.mouseUp);
canvas.addEventListener("mousemove", kamisado.mouseMove);

function draw(){
	kamisado.show();
	
	requestAnimationFrame(draw);
}

draw();