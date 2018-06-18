import {controller} from './controller';
import {bird} from "./bird";
import {score} from "./score";
import {Bananas} from "./Bananas";
import {monkey} from "./monkey";
import {Cloud} from './Cloud';
import {ground} from './ground';



const game = {
    'sprite' : new Image(),
    "spriteSheetSrc": './ressources/monkey.png',
    "canvas": document.querySelector('canvas'),
    "c": null,
    "bananas" : [],
    "banana": Bananas,
    "monkey": monkey,
    "controller" : controller,
    "clouds":[],
    "score" : score,
    "bird" : bird,
    "ground" : ground,
    "hasStarted": false,
    "requestid" : 0,
    "bruitage" : document.querySelector('.bruitage'),

init() {
    this.c = this.canvas.getContext('2d');
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.addEventListener('load', (e) => {
        this.ground.init(this);
        this.bird.init(this);
        this.score.init(this);
        this.controller.init(this);
        this.animate();
        window.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.hasStarted = true;

            }
        })
    });
    for (let i = 0; i < 3; i++) {
        const cloud = new Cloud();
        cloud.init(this);
        this.clouds.push(cloud);
    }
    for (let i = 0; i < 1; i++) {
        const banana = new Bananas();
        banana.init(this);
        this.bananas.push(banana);
    }
    this.monkey.init(this);
},

    drawImageFromSprite(coordinates){
        this.c.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh)
    },

    animate(){
        this.requestid = window.requestAnimationFrame(()=> {
            this.animate()
        });
        this.c.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.clouds.forEach(cloud=>{
            cloud.update()
        });
        this.ground.update();
        this.score.update();
        this.bird.update();
        this.bananas.forEach(banana=>{
            banana.update()
        });
        this.monkey.update();
    },
    cancelAnimation(){
        window.cancelAnimationFrame(this.requestid);
        this.c.fillStyle = "black";
        this.c.font = "50px courier";
        this.c.fillText('Vous avez perdu !', this.canvas.width/2 -250, this.canvas.height - 150);
        document.querySelector('.replay').style.display = 'block';

    },
};
game.init();