var can;
var ctx;

var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

var lastTime;
var detalTime;

var switchy = false;
var life = 0;

function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    w = can.width;
    h = can.height;

    document.getElementById("canvas").addEventListener("mousemove", mousemove);

    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";

    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        obj.init();
        stars.push(obj);
    }

    lastTime = Date.now();

    gameloop();
}

document.body.onload = init;

function gameloop() {

    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    detalTime = now - lastTime;
    lastTime = now;

    drawBackground();
    drawGirl();
    aliveUpdate();
    drawStar(detalTime);

}

function drawBackground() {

    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
    ctx.drawImage(girlPic, 100, 100, 600, 400);
}

function drawStar(detalTime) {
    ctx.save();
    ctx.globalAlpha = life;
    for (var i = 0; i < num; i++) {
        stars[i].update(detalTime);
    }
    ctx.restore();
}

function aliveUpdate() {
    if (switchy) {
        life += 0.03 * detalTime * 0.05;
        life = life > 1 ? 1 : life;
    } else {
        life -= 0.03 * detalTime * 0.05;
        life = life < 0 ? 0 : life;
    }
}

function mousemove(e) {
    if (e.offsetX || e.layerX) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;

        if (px >= 100 && px <= 700 && py >= 100 && py <= 500) {
            switchy = true;
        } else {
            switchy = false;
        }
    }
}