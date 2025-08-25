class CompositeFrame{
    constructor(w,h, pixelRows,pixelCols, pixelW, pixelH){
        this.width = w;
        this.height = h;
        this.pixelRows = pixelRows;
        this.pixelCols = pixelCols;
        this.pixelWidth = pixelW;
        this.pixelHeight = pixelH;
        this.CompositePixels = this.initCompositePixels();
        this.pg;
    }

    getRenderWidth(){return this.width*this.pixelWidth;}
    getRenderHeight(){return this.height*this.pixelHeight;}

    CompositePixelAt(x,y){
        return this.CompositePixels[y*this.width+x];
    }

    setCompositePixel(x,y, ptn){
        this.CompositePixelAt(x,y).setFromArray(ptn);
    }

    
    draw(x,y){
        push();
        translate(x,y);
        for(let r=0;r<this.height;r++){
            push();
            for(let c=0;c<this.width;c++){
                let idx = r*this.width+c;
                this.CompositePixels[idx].draw();
                translate(this.pixelWidth, 0);
            }
            pop();
            translate(0, this.pixelHeight);
        }
        pop();
    }

    drawFbo(x,y){
        image(this.pg, x,y);
    }

    initCompositePixels(){
        let p = [];
        for(let i=0;i<(this.width*this.height);i++){
            p.push(new CompositePixel(this.pixelCols, this.pixelRows, this.pixelWidth, this.pixelHeight));
        }
        return p;
    }

    initFbo(){
        this.pg = createGraphics(this.getRenderWidth(), this.getRenderHeight());
        this.pg.background(255,255,255,0);
        this.pg.noStroke();
        this.pg.fill(0);
        for(let r=0;r<this.height;r++){
            this.pg.push();
            for(let c=0;c<this.width;c++){
                let idx = r*this.width+c;
                this.CompositePixels[idx].drawFbo(this.pg);
                this.pg.translate(this.pixelWidth, 0);
            }
            this.pg.pop();
            this.pg.translate(0, this.pixelHeight);
        }
        
    }
}