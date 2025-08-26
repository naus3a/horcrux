class SubPixel{

    constructor(val, w, h, draw0){
        this.value = val;
        this.width = w?w:1;
        this.height = h?h:1;
        this.drawDraw0 = draw0?draw0:(pg)=>{
            pg.fill(0,0,0,255);
            pg.rect(0,0, this.width, this.height);
        };
        this.alphabet = ["F","D","T", "#", "0"];//['🌮','💩','🤡'];
    }

    drawFbo(pg){
        if(this.value==0){
            this.drawDraw0(pg);
        }
    }

    static drawPolka(pg){
        pg.fill(0,0,0,255);
        pg.ellipse(0,0, this.width, this.height);
    }

    static drawText(pg){
        pg.push();
        pg.textStyle(BOLD);
        pg.text(random(this.alphabet),0,0);
        pg.pop();
    }
}

