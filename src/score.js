export const score = {
    "delay": 0,
    "game": null,
    "score" : 0,
    "soundcounter" : 100,

    init(game){
        this.game = game;
        this.game.c.fillStyle = "black";
        this.game.c.font = "20px courier";
        this.game.c.fillText(`score: ${this.score}`, 20, 20)
    },

    update(){
        if(this.game.hasStarted){
            this.delay = this.delay + 1;
        }
        if(this.delay === 8){
            this.score += 1;
            this.delay = 0;
        }
        this.game.c.fillStyle = "black";
        this.game.c.font = "20px courier";
        this.game.c.fillText(`score: ${this.score}`, 20, 20);
        if(this.score === this.soundcounter){
            this.game.bruitage.volume = 0.1;
            this.game.bruitage.play();
            this.soundcounter += 100;

        }
    }
};