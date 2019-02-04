var COLORS = {
	orange: "#ffa500",
	blue: "#0000ff",
	violet: "#934b93",
	pink: "#f3a7f3",
	yellow: "#ffff00",
	red: "#ff0000",
	green: "#008000",
	brown: "#521515"}

var row_0 = [
	COLORS.orange,
	COLORS.blue,
	COLORS.violet,
	COLORS.pink,
	COLORS.yellow,
	COLORS.red,
	COLORS.green,
	COLORS.brown]
var row_1 = [
	COLORS.red,
	COLORS.orange,
	COLORS.pink,
	COLORS.green,
	COLORS.blue,
	COLORS.yellow,
	COLORS.brown,
	COLORS.violet]

var row_2 = [
	COLORS.green,
	COLORS.pink,
	COLORS.orange,
	COLORS.red,
	COLORS.violet,
	COLORS.brown,
	COLORS.yellow,
	COLORS.blue]
var row_3 = [
	COLORS.pink,
	COLORS.violet,
	COLORS.blue,
	COLORS.orange,
	COLORS.brown,
	COLORS.green,
	COLORS.red,
	COLORS.yellow]
var row_4 = [
	COLORS.yellow,
	COLORS.red,
	COLORS.green,
	COLORS.brown,
	COLORS.orange,
	COLORS.blue,
	COLORS.violet,
	COLORS.pink]
var row_5 = [
	COLORS.blue,
	COLORS.yellow,
	COLORS.brown,
	COLORS.violet,
	COLORS.red,
	COLORS.orange,
	COLORS.pink,
	COLORS.green]
var row_6  = [
	COLORS.violet,
	COLORS.brown,
	COLORS.yellow,
	COLORS.blue,
	COLORS.green,
	COLORS.pink,
	COLORS.orange,
	COLORS.red]
var row_7 = [
	COLORS.brown,
	COLORS.green,
	COLORS.red,
	COLORS.yellow,
	COLORS.pink,
	COLORS.violet,
	COLORS.blue,
	COLORS.orange]

var GameBoard = {};
GameBoard.colors = [
	row_0,
	row_1,
	row_2,
	row_3,
	row_4,
	row_5,
	row_6,
	row_7]

var Player = {
	white: "#fff",
	black: "#000"}
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');
var scale = 80;

function getSquareColor(x, y){
	return(GameBoard.colors[y][x]);
}

function drawBoard(){
	for(y = 0; y < 8; y++){
		for (x = 0; x <8; x++){
			ctx.beginPath();
			ctx.rect(x*scale, y*scale, scale, scale);
			ctx.fillStyle = getSquareColor(x, y);
			ctx.fill();
		}
	}
}
class Piece{
	constructor(x, y, color, player){
		this.x = x;
		this.y = y;
		this.color = color;
		this.player = player;
	}
	show(){
		ctx.beginPath();
		ctx.arc((this.x + 0.5)*scale, (this.y + 0.5)*scale, 35, 0, Math.PI*2);
		ctx.fillStyle = this.player;
		ctx.fill();
		ctx.beginPath();
		ctx.arc((this.x + 0.5)*scale, (this.y + 0.5)*scale, 30, 0, Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}

var test = new Piece(2,3,COLORS.red, Player.white);
var test2 = new Piece(2,4,COLORS.brown, Player.black);

drawBoard();
test.show();
test2.show();