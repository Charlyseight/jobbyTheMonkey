export const controller = {

    'activeKeys': [],

    init(game) {
        this.game = game;
        window.addEventListener('keydown', (e) => {
            if(!this.activeKeys.includes(e.keyCode)){
                this.activeKeys.push(e.keyCode)
            }
        });
        window.addEventListener('keyup', (e) => {
            this.activeKeys.splice(this.activeKeys.indexOf(e.keyCode), 1)
        })

    }
};