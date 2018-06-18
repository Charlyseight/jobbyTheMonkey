export const bird = {
    'spriteFrames': [],
    'x' : 0,
    'y' : 80,
    'game': null,
    'animationStep': 0,
    'width': 142,
    'height': 102,
    'dw' : 0,
    'dh': 0,
    'maxAnimationStep': 0,
    'speed' : 2,
    "delay": 0,

    init(game) {
        this.game = game;
        this.x = this.game.canvas.width;
        this.dw = this.width/2.5;
        this.dh = this.height/2.5;
        const sy = 157;
        this.spriteFrames = [
            {'sx': 35, sy},
            {'sx': 191, sy},
        ];
        this.maxAnimationStep = this.spriteFrames.length - 1;
    },

    update(){
        this.delay = this.delay + 1;
        if(this.delay === 8){
            this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0;
            this.delay = 0;
        }
        this.x-= this.speed;
        if((this.x + this.dw)<0){
            this.x = this.game.canvas.width;
        }
        this.game.drawImageFromSprite({
            'sx': this.spriteFrames[this.animationStep].sx,
            'sy': this.spriteFrames[this.animationStep].sy,
            'sw': this.width,
            'sh': this.height,
            'dx': this.x,
            'dy': this.y,
            'dw': this.dw,
            'dh': this.dh,
        });

    }
};