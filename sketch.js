let img;
let imgG;
let imgB;
let shares = [];
let pg;
let slider;

function preload(){
  //img = loadImage("img/naucoding.png");
  img = loadImage("img/fdt.png");
}

function setup() {
  let w = 1280;
  let h = 800;
  createCanvas(w,h);
  makeBW();
  let vc = new NaorShamir(imgB, 2,2, 20, SubPixel.drawPolka);
  for(let i=0;i<vc.shares.length;i++) vc.shares[i].initFbo();
  shares = vc.shares;

  slider = createSlider(0,shares[0].getRenderWidth()+100);
  slider.position(10,10);

  save(shares[0].pg, "fdt_polka_share0.png");
  save(shares[0].pg, "fdt_polka_share1.png");
}

function draw() {
  background(255);
  push();
  scale(1,1);
  shares[0].drawFbo(0,0);
  shares[1].drawFbo(slider.value(),0);
  pop();
}

function makeBW(){
  imgG = createImage(img.width, img.height);
  imgB = createImage(img.width, img.height);
  img.loadPixels();
  imgG.loadPixels();
  imgB.loadPixels();
  for(let y=0;y<img.height;y++){
    for(let x=0;x<img.width;x++){
      let rgb = img.get(x,y);
      let g = (rgb[0] + rgb[1] + rgb[2])/3;
      let b = g>140? 255:0;
      imgG.set(x,y,g);
      imgB.set(x,y,b);
    }
  }
  imgG.updatePixels();
  imgB.updatePixels();
}