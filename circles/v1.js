let pg;
let circs = [];
function setup() {
  // put setup code here
  createCanvas(1080, 2400);
  pg = createGraphics(1080, 2400);
  pg.background("black");
  background(0);
  drawCircle(width / 2, height / 2, 500);
  image(pg, 0, 0, width, height);
  frameRate(60);
}

function draw() {


  circs.forEach(circle => {
    var r = random()
    if (r > 0.5){
      circle.update(null,null,"grey");
    } 
    circle.draw()
  });


}

function drawCircle(x, y, radius) {
  if (frameCount == 30){
    background(0)
  }
  circs.push(new ellipseSk(x, y, radius, "white"))
  if (radius > 10) {
    drawCircle(x + radius / 2, y, radius / 2);
    drawCircle(x - radius / 2, y, radius / 2);
    drawCircle(x, y + radius / 2, radius / 2);
    drawCircle(x, y - radius / 2, radius / 2);
  }
}

class ellipseSk {
  constructor(x, y, radius, stroke) {
    this.x = x
    this.y = y
    this.radius = radius
    this.stroke = stroke

  }

  update(x, y, stroke,radius) {
    // this.x = (typeof x !== 'undefined') ? x : this.x;
    // this.y = (typeof y !== 'undefined') ? y : this.y;
    // this.stroke = (typeof stroke !== 'undefined') ? stroke : this.stroke;
    // this.radius = (typeof radius !== 'undefined') ? radius : this.radius;
  //   if (radius !== null)
  //           this.radius = radius
  }

  draw() {
    pg.stroke(this.stroke);
    pg.noFill();
    noFill();
    stroke(this.stroke)
    pg.ellipse(this.x, this.y, this.radius, this.radius);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
// function mousePressed() {
//   pg.save("pg.png");
// }

