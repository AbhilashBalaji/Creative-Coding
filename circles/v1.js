let pg;
let circs = [];
function setup() {
  // put setup code here
  createCanvas(2000, 2000);
  pg = createGraphics(2000, 2000);
  pg.background("#38236d");
  background(0);
  drawCircle(width / 2, height / 2, 1000);
  image(pg, 0, 0, width, height);
  noLoop();
  frameRate(2)
}

function draw() {


  circs.forEach(circle => {
    var r = random()
    if (r > 0.7)
      circle.update(null,null,"#060607",null);
    r = random()
    if (r < 0.6)
      circle.update(circle.x+circle.radius/2,circle.y-circle.radius/2,null,null)
    r = random()

    if (r >= 0.6)
    circle.update(circle.x-circle.radius/2,circle.y+circle.radius/2,null,null)
    r = random()

    if (r >= 0.6)
      circle.update(circle.x-circle.radius/2,circle.y+circle.radius/2,null,null)
    r = random()

    if (r < 0.6)
    circle.update(circle.x+circle.radius/2,circle.y-circle.radius/2,null,null)

    // r = random()
    // if(r > 0.99)
    // circle.update(null,null,"#f1692b",null)

    r = random()
    if(r < 0.70)
    circle.update(null,null,"#236d38",null)

    r = random()


    if (r > 0.9)
    circle.draw()
  });
// wait
// setTimeout(location.reload(true),5000)
// clear();
}

function drawCircle(x, y, radius) {
  if (frameCount == 30){
    background(0)
  }
  circs.push(new ellipseSk(x, y, radius, "#2844c1"))
  if (radius > 15) {
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
      if(!Object.is(x,null))
      this.x = x
      if(!Object.is(y,null))
      this.y = y
      if(!Object.is(stroke,null))
      this.stroke = stroke
      if(!Object.is(radius,null))
      this.radius = radius

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


function keyPressed(){
  if(keyCode == ENTER)
  {
  var d = new Date();
  pg.save("pg"+String(d.getTime())+".png")
  }

}
