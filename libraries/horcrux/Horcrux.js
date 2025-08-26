class NaorShamir{
    constructor(img, n, k, pixelSz, draw0){
        this.img = img;
        this.n = n; //number of shares
        this.k = k; //min n of shares to decrypt
        this.m = 0; //the number of pixels in a share. This represents the loss in resolution from the original picture to the shared one. We would like m to be as small as possible
        this.a = 0; //the relative difference in weight between combined shares that come from a white pixel and a black pixel in the original picture. This represents the loss in contrast. We would like a to be as large as possible. 
        this.r = 0; //the size of the collections Co and C1 (they need not be the same size, but in all of our constructions they are). log r represents the number of random bits needed to generate the shares and does not effect the quality of the picture
        this.c0 = [
            [
                1,1,
                0,0
            ],
            [
                0,0,
                1,1
            ],
            [
                1,0,
                1,0
            ],
            [
                0,1,
                0,1
            ],
            [
                1,0,
                0,1
            ],
            [
                0,1,
                1,0
            ],
        ];
        this.c1 = this.initAntiPatterns();
        this.shares = this.createShares(pixelSz, draw0);
    }

    createShares(pixelSz, draw0){
        let frames = [];
        for(let i=0;i<2;i++){
            frames.push(new CompositeFrame(
                this.img.width, this.img.height,
                2,2,
                pixelSz,pixelSz,
                draw0
            ));
        }
        this.img.loadPixels();
        for(let y=0;y<this.img.height;y++){
            for(let x=0;x<this.img.width;x++){
                let c = this.img.get(x,y);
                let rndPtn = Math.floor(random(0, this.c0.length-1));
                
                frames[0].setCompositePixel(x,y, this.c0[rndPtn]);
                frames[1].setCompositePixel(x,y, c[0]==0?this.c1[rndPtn]:this.c0[rndPtn]);
                
            }
        }
        return frames;        
    }

    initAntiPatterns(){
        let p = [];
        for(let i=0;i<this.c0.length;i++){
            let pp = [];
            for(let j=0;j<this.c0[i].length;j++){
                pp.push(1-this.c0[i][j]);
            }
            p.push(pp);
        }
        return p;
    }
}