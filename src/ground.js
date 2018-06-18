export const ground  = {
    "spriteFrame" : {
        'sx': 21,
        'sy': 429,
        'sw': 766,
        'sh': 18,
        'dx': 0,
        'dy': 0,
        'dw': 766,
        'dh': 18
    },
    "game": null,
    "speed" : 5,
    "maxOffset" : 0,
    "delay" : 0,

    init(game) {
        this.game = game;
        this.spriteFrame.dy = this.game.canvas.height - this.spriteFrame.dh - 30;
        this.maxOffset = this.spriteFrame.sw - this.game.canvas.width;
        this.game.drawImageFromSprite(this.spriteFrame);

    },

    update(){
        this.delay = this.delay + 1;
        if(this.delay === 50){
            this.speed += 0.05;
            this.delay = 0;
        }
        if(this.spriteFrame.dx <= -this.maxOffset){
            this.spriteFrame.dx = 0;
        }
        if(this.game.hasStarted){
            this.spriteFrame.dx = this.spriteFrame.dx - this.speed;
        }
        this.game.drawImageFromSprite(this.spriteFrame);
    }
};
