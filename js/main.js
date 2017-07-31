var can;
var ctx;

var w;
var h ;

var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");
    
    w = can.width;
    h = can.height;

    girlPic.src="src/girl.jpg";
    starPic.src = "src/star.png";

    for(var i = 0 ; i< num ;i++){
    	var obj = new starObj();
    	obj.init();
    	stars.push(obj);
    }

	gameloop();
}

document.body.onload = init;

function gameloop(){

	window.requestAnimationFrame(gameloop);
	drawBackground();
	drawGirl();
	drawStar();
   
}

function drawBackground(){

	ctx.fillStyle="#333";
	ctx.fillRect(0,0,w,h);
}

function drawGirl(){
	 ctx.drawImage(girlPic,100,100,600,400);
}