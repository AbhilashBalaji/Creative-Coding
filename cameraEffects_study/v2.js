/*
PImage img;
PImage img2;

void setup() {
  size(700, 700);
  img = loadImage("murakami3.jpg");
  img2 = loadImage("murakami2.jpg");
  imageMode(CENTER);
  noStroke();
  background(255);
}

void draw() { 



  int i = 0;
  while (i <= 25) {
    drawPoint();
    i = i +1;
  }
}

void drawPoint() {

  
  int x = int(random(img.width));
  int y = int(random(img.height));
  color pix = img.get(x, y);

  float value = brightness (pix);
  int i = round( map (value, 0, 255, 0, 700*700-1) );
  color c2 = img2.pixels[i];


  fill(c2, 128);
  rect(x, y, random(0,15), random(0,15));
}
*/

let img1
let img2

function preload(){
    img1 = loadImage("test2.jpeg");
    img2 = loadImage("test2.jpeg");
    // img2.filter(GRAY);
}

function setup(){
    img2.loadPixels();
	let canvasSize = min(windowWidth, windowHeight);
	createCanvas(canvasSize, canvasSize);
    imageMode(CENTER);
    noStroke();
    background(255);
}

function draw(){

    for(let i = 0;i<=25; i++)
    {
        drawPoint();
    }
}

function drawPoint() {
    let x = int(random(img1.width));
    let y = int(random(img1.height));
    let pix = img1.get(x,y);

    let val = brightness(pix);
    let i = round(map(val,0,255,0,700*700-1));
    let c2 = img2.pixels[i];
    // console.log(img2.pixels);

    fill(img2.pixels[i],img2.pixels[i+1],img2.pixels[i+2],img2.pixels[i+3]);
    rect(x,y,random(0,15),random(0,15));
}