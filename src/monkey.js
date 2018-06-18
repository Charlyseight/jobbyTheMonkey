export const monkey = {
    "spriteFrame" : [],
    "x": 0,
    "y" : 250,
    "game": null,
    'animationStep': 0,
    'maxAnimationStep': 0,
    "boost": -20,
    "width" : 128,
    "height" : 122,
    'fallSpeed': 0,
    "currentSpriteFrame": "static",
    "delay" : 0,
    "gravity": 4,
    "sprite" : {},
    "onGround":0,


    init(game) {
        this.game = game;
        const sy = 0;
        this.spriteFrame = {
            "static": [
                {'sx': 0, sy,
                'sw' : this.width,
                'sh' : this.height,
                },
            ],
            "moving": [
                {'sx': 157, sy,
                'sw' : this.width,
                'sh' : this.height,
                },
                {'sx': 316, sy,
                'sw' : this.width,
                'sh' : this.height,
                }
            ],
        }
    },
    update(){
        if(this.game.controller.activeKeys.includes(32) && this.onGround){
            this.onGround=0;
            this.fallSpeed+=7;
            console.log("SAUT");
        }
        this.y-= this.fallSpeed>0?this.fallSpeed--:0;
        console.log(this.y);
        this.y+=this.gravity;
        this.gravity*=1.0001;
        const step = this.spriteFrame[this.currentSpriteFrame];
        this.maxAnimationStep = step.length - 1;
        this.delay = this.delay + 1;
        if(this.delay === 8){
            this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0;
            this.delay = 0;
        }
        const frame = step[this.animationStep];
        const sprite = {sx : frame.sx, sy: frame.sy, sw: frame.sw, sh: frame.sh, dx: this.x, dy : this.y, dw: frame.sw/1.5, dh: frame.sh/1.5};
        this.sprite = sprite;
        if (sprite.dy + sprite.sw >= this.game.canvas.height - this.game.ground.spriteFrame.dh) {
            sprite.dy = this.game.canvas.height - sprite.sh + 8;
            this.y = this.game.canvas.height - sprite.sh + 8;
            this.onGround = 1;
        }
        if(sprite.dy < this.game.canvas.height/2 || this.y < this.game.canvas.height/2){
            sprite.dy = this.game.canvas.height/2;
            this.y = this.game.canvas.height/2;
        }
        if(this.game.hasStarted){
            this.currentSpriteFrame = 'moving';
        }
        this.game.drawImageFromSprite(sprite);
    }

};
