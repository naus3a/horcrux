let img;
let imgG;
let imgB;
let f;

function preload(){
  img = loadImage("img/naucoding.png");
}

function setup() {
  let w = 1280;
  let h = 800;
  createCanvas(w,h);
  makeBW();
  let vc = new NaorShamir(imgB, 2, 2);
  f = vc.shares[0];
}

function draw() {
  background(255);
  f.draw(0,0);
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