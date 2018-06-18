export class Bananas{
    constructor(game){
        this.x = 0;
        this.y = 0;
        this.game = game;
        this.spriteFrame = {
            'sx' : 400,
            'sy' : 161,
            'sw' : 87,
            'sh' : 72,
            'dx' : 0,
            'dy' : 30,
            'dw' : 87/2.5,
            'dh' : 72/2.5,
        };
        this.speed = 5;
        this.delay = 0;
    }

    init(game){
        this.game = game;
        this.x = Math.random()*this.game.canvas.width;
        this.y = this.game.canvas.height - 60

    }

    update(){
        this.delay = this.delay + 1;
        if(this.delay === 50){
            this.speed += 0.05;
            this.delay = 0;
        }
        if((this.x + this.spriteFrame.dw)<0){
            this.x = this.game.canvas.width + Math.random()*600;
        }
        if(this.game.hasStarted){
            this.x-= this.speed;
        }

        if(!this.game.hasStarted){
            this.x = this.game.canvas.width;
        }
        if((this.x + this.dw)<0){
            this.x = this.game.canvas.width;
        }
        this.spriteFrame.dx = this.x;
        this.spriteFrame.dy = this.y;
        this.game.drawImageFromSprite(this.spriteFrame);

        if(this.spriteFrame.dx <= this.game.monkey.sprite.dx + this.game.monkey.sprite.dw - 30){
            this.speed+=0.1;
            this.game.ground.speed+=0.1;
            if(this.y <= this.game.monkey.sprite.dy + this.game.monkey.sprite.dh - 5 &&
            this.y + this.spriteFrame.dh >= this.game.monkey.sprite.dy){
                this.game.cancelAnimation();
            }
        }
    }
};
