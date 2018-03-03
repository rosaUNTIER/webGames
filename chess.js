var board = document.getElementById('chess');
var ctx = board.getContext('2d');

//how big is one field in pixels
const FIELD = 80;
//where those fields are
var xPos = 0,
    yPos = 0;

var color = [
	"#000000",	//black
	"#FFFFFF"	//white
];


for (j=0; j<8; j++){
	for (i=0; i<8; i++) {
		ctx.beginPath();
		ctx.rect(FIELD*i, FIELD*j, FIELD, FIELD);

		if ((i+j)%2==0 || (i+j)%2==2){
			ctx.fillStyle="#000000";
			ctx.fill();
			console.log("bing");
		}
		else {
			ctx.fillStyle="#FFFFFF";
			ctx.fill();	
			console.log("bong");
		}
	}
}

