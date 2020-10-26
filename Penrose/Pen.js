let a ;
let phi = 50 + 50 *Math.sqrt(5);
let one = 100;

function setup() {
    createCanvas(400, 400);
    pg = createGraphics(400, 400);
    image(pg, 0, 0, width, height);
    pg.background(0)
    background(0)
    // noFill()
}

function draw() {
    pg.background(0)
    background(0)
    translate(100,height-100);
  for(let a = 0 ; a<10;a++)
  {
    stroke(0,200,0);

  //KITE
  beginShape();
    vertex(0,0);
    vertex(phi,0);
    vertex(phi*cos(-radians(36)),phi*sin(-radians(36)));
    vertex(phi*cos(-radians(72)),phi*sin(-radians(72)));
  endShape(CLOSE);

  translate(5,-5);
  //DART
  stroke(0,0,200);
  beginShape();
    vertex(phi,0);
    vertex(phi*cos(-radians(36)),phi*sin(-radians(36)));
    vertex(phi*cos(-radians(72)),phi*sin(-radians(72)));
    vertex((phi+one)*cos(-radians(36)),(phi+one)*sin(-radians(36)));
  endShape(CLOSE);
  }

}
function update() {

}

// float a;
// float phi = 50 + 50 * sqrt(5.0);
// float one = 100;

// void setup() {
//   size(400, 400);
//   noFill();
// }

// void draw() {
//   background(0);

//   translate(30, height-30);

//   stroke(0,200,0);
//   beginShape();
//     vertex(0,0);
//     vertex(phi,0);
//     vertex(phi*cos(-radians(36)),phi*sin(-radians(36)));
//     vertex(phi*cos(-radians(72)),phi*sin(-radians(72)));
//   endShape(CLOSE);

//   translate(5,-5);

//   stroke(0,0,200);
//   beginShape();
//     vertex(phi,0);
//     vertex(phi*cos(-radians(36)),phi*sin(-radians(36)));
//     vertex(phi*cos(-radians(72)),phi*sin(-radians(72)));
//     vertex((phi+one)*cos(-radians(36)),(phi+one)*sin(-radians(36)));
//   endShape(CLOSE);

// }


function keyPressed(){
    if(keyCode == ENTER)
    {
    var d = new Date();
    pg.save("pg"+String(d.getTime())+".png")
    }
  
  }