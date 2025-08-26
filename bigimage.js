let shares = [];
let slider;

function preload(){
  shares.push(loadImage("img/naucoding_share0.png"));
  shares.push(loadImage("img/naucoding_share1.png"));
}

function setup() {
  let w = 600;
  let h = 450;
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
  scale(0.25,0.25);
  image(shares[0],0,0);
  image(shares[1],slider.value(),0);
  pop();
}
