var starObj = function(){
	this.x;
	this.y;
}

starObj.prototype.init = function(){
	 this.x = Math.random()*600 + 100;
	 this.y = Math.random()*400 + 100;
}

starObj.prototype.draw = function(){
	ctx.drawImage(starPic,this.y,this.y);
}
function drawStar(){
	for(var i = 0 ; i < num ; i++){
		 stars[i].draw();
	}
}