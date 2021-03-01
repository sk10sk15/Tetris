class Block {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){
        push();
        let s = 25; 
        rect(s*this.x, s*this.y, s, s);
        pop();
    }
}

class Mino {
    constructor(x, y, rot, shape) {
        this.x = x;
        this.y = y;
        this.rot = rot;
        this.shape = shape;
    }

    clacBlocks(){
        let blocks = [
            
        ]
    }
    draw(){

    }
}

class Field {
    constructor() {
        this.title = [
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
        ];
    }
    tileAt(x,y) {
        return this.tiles[y][x];
    }
    draw(){
        for(let y=0; y<21; y++){
            for(let x=0; x<12; x++){
                if(this.tileAt(x,y) === 0) continue;
                new Block(x,y).draw();
            }
        }
    }
}

function setup(){
    createCanvas(400, 600);
    background(64);
}
function draw(){

}