window.onload = function(){
    var c = document.querySelector("canvas");
    var canvas = document.querySelector("canvas");
    c.width = innerWidth;
    c.height = innerHeight;
    c = c.getContext("2d");

    function startGame(){
    mouse = {
        x: innerWidth/2,
        y: innerHeight-33
    };

    touch = {
        x: innerWidth/2,
        y: innerHeight-33
    };

    canvas.addEventListener("mousemove", function(event){
       mouse.x = event.clientX;    
    });
    canvas.addEventListener("touchmove", function(event){
        var rect = canvas.getBoundingClientRect();
        var root = document.documentElement;
        var touch = event.changedTouches[0];
        var touchX = parseInt(touch.clientX);
        var touchY = parseInt(touch.clientY) - rect.top - root.scrollTop;
        event.preventDefault();
        mouse.x = touchX;
        mouse.y = touchY;
    });

    var player_width = 40;
    var player_width = 40;
    var playerImg = new Image();
    var score = 0;
    var healthpoints = 100;
    playerImg.src = "https://static.vecteezy.com/system/resources/previews/003/087/006/original/cartoon-spaceship-illustration-vector.jpg"

    var bullets = [];
    var bullet_width = 10;
    var bullet_height = 15;
    var bullet_speed = 8;

}
}