let shares = [];
let sharesPolka = [];
let sharesText = [];
let slider;

function preload(){
  shares.push(loadImage("img/fdt_share0.png"));
  shares.push(loadImage("img/fdt_share1.png"));
  sharesPolka.push(loadImage("img/fdt_polka_share0.png"));
  sharesPolka.push(loadImage("img/fdt_polka_share1.png"));
  sharesText.push(loadImage("img/fdt_text_share0.png"));
  sharesText.push(loadImage("img/fdt_text_share1.png"));
}

function setup() {
  let w = 600;
  let h = 800;
  createCanvas(w,h);
  
  let maxSlider = shares[0].width+100;
  slider = createSlider(0,maxSlider,maxSlider);
  slider.position(10,10);
  slider.size(500);
}

function draw() {
  background(255);
  text("drag me around",20,10);
  push();
  translate(10,55);
  scale(1.2,1.2);
  image(shares[0],0,0);
  image(shares[1],slider.value(),0);
  translate(0,220);
  image(sharesPolka[0],0,0, shares[0].width, shares[0].height);
  image(sharesPolka[1],slider.value(),0, shares[0].width, shares[0].height);
  translate(0,220);
  image(sharesText[0],0,0, shares[0].width, shares[0].height);
  image(sharesText[1],slider.value(),0, shares[0].width, shares[0].height);
  pop();
}
