export class Cloud{
    constructor(game){
        this.x = 0;
        this.y = 0;
        this.game = game;
        this.spriteFrame = {
            'sx': 555,
            'sy': 166,
            'sw': 121,
            'sh': 64,
            'dx': 0,
            'dy': 0,
            'dw': 121 / 2.5,
            'dh': 64 / 2.5,
        };
        this.speed = 1;
    }
    init(game){
        this.game = game;
        const h = this.game.canvas.height;
        this.x = Math.random()*this.game.canvas.width;
        this.y = Math.floor(Math.random()*(h/3))+(h/10);
    }
    update(){
        if((this.x + this.spriteFrame.dw)<0){
            this.x = this.game.canvas.width + Math.random()*200;
        }
        this.x-= this.speed;
        this.spriteFrame.dx = this.x;
        this.spriteFrame.dy = this.y;
        this.game.drawImageFromSprite(this.spriteFrame);
    }
}














/*export const cloud = {
    "spriteFrame": {
        'sx' : 555,
        'sy' : 166,
        'sw' : 121,
        'sh' : 64,
        'dx' : 0,
        'dy' : 0,
        'dw' : 121/2,
        'dh' : 64/2,
    },
    "game" : null,
    "speed" : 1,

    init(game){
        this.game = game;
        this.spriteFrame.dx = this.game.canvas.width;
        //this.spriteFrame.dy = this.game.canvas.height - this.spriteFrame.dh - 210;
        this.game.drawImageFromSprite(this.spriteFrame);
    },

    update(){

        if (this.spriteFrame.dx < 0 - this.spriteFrame.sw) {
            this.init(this.game);
        }

        this.spriteFrame.dx = this.spriteFrame.dx - this.speed;
        this.game.drawImageFromSprite(this.spriteFrame);
    }
};*/
