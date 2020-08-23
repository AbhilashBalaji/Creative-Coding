let ds ;
function setup() {
    createCanvas(1920, 1080);
    pg = createGraphics(1920, 1080);
    image(pg, 0, 0, width, height);
    pg.background(0)
    background(0)


    ds = new Penrose()
    ds.simulate(10)


}

function draw() {
    pg.background(0)
    background(0)
    ds.render()

}
function update() {

}

// function mousePressed() {
//     pg.save("pg.png");
// }




class Penrose {
    constructor() {
        this.steps = 0;

        //these are axiom and rules for the penrose rhombus l-system
        //a reference would be cool, but I couldn't find a good one
        this.axiom = "[X]++[X]++[X]++[X]++[X]";
        this.ruleW = "YF++ZF----XF[-YF----WF]++";
        this.ruleX = "+YF--ZF[---WF--XF]+";
        this.ruleY = "-WF++XF[+++YF++ZX]-";
        this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

        //please play around with the following two lines
        this.startLength = 200;
        this.theta = TWO_PI / 6.0; //36 degrees, try TWO_PI / 6.0, ...
        this.reset();

    }

    simulate(gen) {
        while (this.getAge() < gen) {
            this.iterate(this.production);
        }
    }
    reset() {
        this.production = this.axiom;
        this.drawLength = this.startLength;
        this.generations = 0;
    }

    getAge() {
        return this.generations
    }

    iterate() {
        let newProduction = "";

        for (let i = 0; i < this.production.length; ++i) {
            let step = this.production.charAt(i);
            //if current character is 'W', replace current character
            //by corresponding rule
            if (step == 'W') {
                newProduction = newProduction + this.ruleW;
            }
            else if (step == 'X') {
                newProduction = newProduction + this.ruleX;
            }
            else if (step == 'Y') {
                newProduction = newProduction + this.ruleY;
            }
            else if (step == 'Z') {
                newProduction = newProduction + this.ruleZ;
            }
            else {
                //drop all 'F' characters, don't touch other
                //characters (i.e. '+', '-', '[', ']'
                if (step != 'F') {
                    newProduction = newProduction + step;
                }
            }
        }

        this.drawLength = this.drawLength * 0.8;
        this.generations++;
        this.production = newProduction;
    }

    render() {
        translate(width / 2, height/ 2);

        this.steps += 20;
        if (this.steps > this.production.length) {
            this.steps = this.production.length;
        }

        for (let i = 0; i < this.steps; ++i) {
            let step = this.production.charAt(i);

            //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
            if (step == 'F') {
                stroke(255, 100);
                for (let j = 0; j < this.repeats; j++) {
                    line(0, 0, 0, -this.drawLength);
                    noFill();
                    translate(0, -this.drawLength);
                }
                this.repeats = 1;
            }
            else if (step == '+') {
                rotate(this.theta);
            }
            else if (step == '-') {
                rotate(-this.theta);
            }
            else if (step == '[') {
                push();
            }
            else if (step == ']') {
                pop();
            }
        }
    }
}
