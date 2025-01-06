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
    playerImg.src = "https://static.vecteezy.com/system/resources/previews/003/087/006/original/cartoon-spaceship-illustration-vector.jpg";

    var bullets = [];
    var bullet_width = 10;
    var bullet_height = 15;
    var bullet_speed = 8;

    var enemies = [];
    var enemyImg = new Image();
    enemyImg.src = "https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-cartoon-doodle-alien-spaceship-png-image_13150549.png";
    var enemy_width = 35;
    var enemy_height = 35;

    // let healthkits = [];
    // const healthkitImage = new Image();
    // healthkitImage.src = "https://image.ibb.co/gFvSEU/first_aid_kit.png";
    // const healthkitWidth = 36;
    // const healthkitHeight = 36;

    function player(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.draw = function(){
            c.beginPath();
            c.drawImage(playerImg, mouse.x-player_width, mouse.y-player_height);
        };

        this.update = function(){
            this.draw();
        };
    }

    function Bullet(x,y, width, height,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;

        this.draw = function(){
            c.beginPath();
            c.rect(this.x, this.y, this.width, this.height);
            c.fillStyle = "white";
            c.fill();
        };

        this.update = function(){
            this.y -= this.speed;
            this.draw();
        };
    }

    function Enemy(x,y,width,height,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;

        this.draw = function(){
            c.beginPath();
            c.drawImage(enemyImg, this.x, this.y);
        };

        this.update = function(){
            this.y += this.speed;
            this.draw();
        };
    }
    function healthKit(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;

        this.draw = function(){
            c.beginPath();
            c.drawImage(healthKitImg, this.x, this.y);
        };

        this.update = function(){
            this.y += this.speed;
            this.draw();
        };
    }

    var player = new player(mouse.x, mouse.y, player_width, player_height);

    function drawEnemies(){
        for (var _= 0; _<4; _++){
            var x = Math.random()*(innerWidth-enemy_width);
            var y = -enemy_height;
            var width = enemy_width;
            var height = enemy_height;
            var speed = Math.random()*2;
            var _enemy = new Enemy(x, y, width, height,speed);
            _enemy.push(_enemy);
        };
    }
    setInterval(drawEnemies, 1234);
    




}
}
