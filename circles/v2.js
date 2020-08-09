let pg;
let circs = [];
let colors = ["#f887ff","#de004e","#860029","#321450","#29132e"]
function setup() {
    // put setup code here
    createCanvas(2880, 1800);
    pg = createGraphics(2880, 1800);
    pg.background(random(colors));
    background(0);
    drawCircle(width / 2, height / 2, 700);
    image(pg, 0, 0, width, height);
      frameRate(60);
    noLoop()
}

function draw() {


    circs.forEach(circle => {
        var r = random()
        if (frameCount % 5 == 0){
        if (r > 0.2) {
            circle.update(null, null, random(colors), random([circle.radius + circle.radius / 2,circle.radius - circle.radius / 2]));

            //   print(circle)
        }
        else {
            circle.update( null, null,random(colors), random([circle.radius + circle.radius / 2,circle.radius - circle.radius / 2]));

        }
        }
        var r1 = random()
        {
            if(r1>0.7)
        circle.draw();
        }
    


    });


}

function drawCircle(x, y, radius) {

    circs.push(new ellipseSk(x, y, radius, random(colors)))
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

    update(x, y, stroke, radius) {
        if (x !== null)
            this.x = x
        if (y !== null)
            this.y = y
        if (stroke !== null)
            this.stroke = stroke
        if (radius !== null)
            this.radius = radius

        // print()
    }

    draw() {
        pg.stroke(this.stroke);
        pg.noFill();
        noFill();
        stroke(this.stroke)
        pg.ellipse(this.x, this.y, min(this.radius,500), min(this.radius,500));
        ellipse(this.x, this.y, min(this.radius,500), min(this.radius,500));
    }
}
function mousePressed() {
    pg.save("pg.png");
}

