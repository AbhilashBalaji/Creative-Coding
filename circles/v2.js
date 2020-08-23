let pg;
let circs = [];
let colors = ["#f887ff", "#de004e", "#860029", "#321450", "#29132e"]
let bg;
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight);
    bg = random(colors)
    pg.background(bg);
    background(0);
   
    // drawCircle(width * 2 / 4, height * 3 / 4, width / 4);


    image(pg, 0, 0, width, height);
    frameRate(10);
    drawCircle(width / 2, height / 2, width / 4);

    // noLoop()
}

function draw() {
    // drawCircle(width * 3 / 4, height / 2, width / 4);
    if(frameCount %30 ==0)
    {
    drawCircle(width / 2, height / 2, width / 4);
        return;
    }

    circs.forEach(circle => {
        var r = random()
        // if (frameCount % 1 == 0) {
            if (r > 0.2) {
                circle.update(null, null, random(colors), random([circle.radius - circle.radius / 10, circle.radius + circle.radius / 10]));

                //   print(circle)
            }
            else {
                circle.update(null, null, random(colors), random([circle.radius - circle.radius / 10, circle.radius + circle.radius / 10]));

            }
        
        var r1 = random()
        {
            if (r1 > 0.7)
                circle.draw();
            else {
                circle.delete()
            }
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
        this.delete()
        // print()
    }

    draw() {
        pg.stroke(this.stroke);
        pg.noFill();
        noFill();
        stroke(this.stroke)
        pg.ellipse(this.x, this.y, min(this.radius, 500), min(this.radius, 500));
        ellipse(this.x, this.y, min(this.radius, 500), min(this.radius, 500));
    }

    delete() {
        noFill()
        stroke(bg)
        pg.ellipse(this.x, this.y, this.radius,this.radius);
        ellipse(this.x, this.y, this.radius,this.radius);
    }
}
// function mousePressed() {
//     pg.save("pg.png");
// }

