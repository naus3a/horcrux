class SubPixel{

    constructor(val, w, h){
        this.value = val;
        this.width = w?w:1;
        this.height = h?h:1;
        this.alphabet = ['🌮','💩','a'];
    }

    draw(){
        if(this.value==0){
            fill(0,0,0,255);
            rect(0,0, this.width, this.height);
        }
    }

    drawFbo(pg){
        if(this.value==0){
            pg.textSize(11);
            pg.fill(0,0,0,255);
            let r = random(0,10);
            
            pg.rect(0,0, this.width, this.height);
            
        }
    }
}