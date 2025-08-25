class CompositePixel{
    constructor(cols, rows, width, height){
        this.width = width;
        this.height = height;
        this.subPixelW = this.width / cols;
        this.subPixelH = this.height / rows;
        this.SubPixels = this.initSubPixels(cols, rows);
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

    draw(){
        push();
        for(let y=0;y<this.getNumRows();y++){
            push();
            translate(0, y*this.subPixelH);
            for(let x=0;x<this.getNumCols();x++){
                push();
                translate(x*this.subPixelW,0);
                this.SubPixels[y][x].draw();
                pop();
            }
            pop();
        }
        pop();
    }

    initSubPixels(cols, rows){
        const sp = [];
        for(let r=0;r<rows;r++){
            const row = [];
            for(let c=0;c<cols;c++){
                row.push(new SubPixel(0, this.subPixelW, this.subPixelH));
            }
            sp.push(row);
        }
        return sp;
    }
}