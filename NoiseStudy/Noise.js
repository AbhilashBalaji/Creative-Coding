let circs = [];
let noiseScale = 0.00005;
function setup() {
    createCanvas(1000, 1000);
    pg = createGraphics(1000, 1000);
    image(pg, 0, 0, width, height);
    pg.background(0)
    background(0)
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) { 
            if(noise(i,j) > 0.5)
            circs.push(new circle(i,j,"black",noise(i,j)*noiseScale))
            else
            circs.push(new circle(i,j,"green",noise(i,j)*noiseScale))

        }
    }
    noLoop()
}



function draw() {
    background(0)
    pg.background(0)

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

function mousePressed() {
    pg.save("pg.png");
}
