class CompositePixel{
    constructor(cols, rows, width, height, draw0){
        this.width = width;
        this.height = height;
        this.subPixelW = this.width / cols;
        this.subPixelH = this.height / rows;
        this.SubPixels = this.initSubPixels(cols, rows, draw0);
    }

    getNumRows(){return this.SubPixels.length;}
    getNumCols(){return this.SubPixels[0].length;}

    setFromArray(ptn){
        for(let y=0;y<this.getNumRows();y++){
            for(let x=0;x<this.getNumCols();x++){
                this.SubPixels[y][x].value = ptn[y*this.getNumCols()+x];
            }
        }
    }

    drawFbo(pg){
        pg.push();
        for(let y=0;y<this.getNumRows();y++){
            pg.push();
            pg.translate(0, y*this.subPixelH);
            for(let x=0;x<this.getNumCols();x++){
                pg.push();
                pg.translate(x*this.subPixelW,0);
                this.SubPixels[y][x].drawFbo(pg);
                pg.pop();
            }
            pg.pop();
        }
        pg.pop();
    }

    initSubPixels(cols, rows, draw0){
        const sp = [];
        for(let r=0;r<rows;r++){
            const row = [];
            for(let c=0;c<cols;c++){
                row.push(new SubPixel(0, this.subPixelW, this.subPixelH, draw0));
            }
            sp.push(row);
        }
        return sp;
    }
}