let circs = [];
let noiseScale = 3.00005;
function setup() {
    createCanvas(1000, 1000);
    pg = createGraphics(1000, 1000);
    image(pg, 0, 0, width, height);
    pg.background("white")
    background(0)
    c2 = color("#ffff3f")
    c1 = color("#007f5f")
    for (i = 0; i < width; i+=2) {
        for (j = 0; j < height; j+=2) { 
            circs.push(new circle(i,j,lerpColor(c1,c2,Math.sqrt(i*i+j*j)/Math.sqrt(width*width+height*height)),noise(i,j)*noiseScale))
        }
    }
    noLoop()
}



function draw() {
    background("black")
    pg.background("black")

    circs.forEach(circle => {
        circle.draw()
    });

}

function update() {

}

class circle {
    constructor(x, y, stroke, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.stroke = stroke
    }

    draw() {
        stroke(this.stroke)
        pg.stroke(this.stroke)
        ellipse(this.x, this.y, this.radius)
        pg.ellipse(this.x, this.y, this.radius)

    }
}

function keyPressed(){
    if(keyCode == ENTER)
    {
    var d = new Date();
    pg.save("pg"+String(d.getTime())+".png")
    }
  
  }