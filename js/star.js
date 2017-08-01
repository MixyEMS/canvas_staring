var starObj = function() {
    this.x;
    this.y;
    this.picNo;
    this.timer;

    this.xSpd;
    this.ySpd;
}

starObj.prototype.init = function() {
    this.x = Math.random() * 600 + 100;
    this.y = Math.random() * 400 + 100;
    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;
    this.xSpd = Math.random() * 0.6 - 0.3;
    this.ySpd = Math.random() * 0.6 - 0.3;
}

starObj.prototype.update = function(detalTime) {

    this.timer += detalTime;
    if (this.timer > 50) {
        this.picNo = (this.picNo+1)%7;
        this.timer = 0;
        this.x += this.xSpd;
        this.y += this.ySpd;

        if (this.x >= 700-7 || this.y >= 500-7 || this.x <= 100 || this.y <= 100) {
            this.init();
            return;
        }
    }

    this.draw();

}

starObj.prototype.draw = function() {
    ctx.drawImage(starPic, 7 * this.picNo, 0, 7, 7, this.x, this.y, 7, 7);
}