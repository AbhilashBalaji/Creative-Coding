var w = 700;
var csize=9000;
var Phi= 1.618033988749895;
var lim = 1;

function Point(x,y) {
    this.x = x;
    this.y = y;
}

function pVertex(p) {
    vertex(p.x,p.y);
    pg.vertex(p.x,p.y)
}

function golden(a,b) {
    return new Point(a.x+(b.x-a.x)*(Phi-1),a.y+(b.y-a.y)*(Phi-1));
}

function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}


function Skinny(a,b,c) {
    Triangle.call(this,a,b,c);
    // random darker color pallette
    this.color = random(['#361134','#B0228C','#EA3788','#E56B70','#F391A0','#F39130']);
}

Skinny.prototype = Object.create(Triangle.prototype)

function Fat(a,b,c) {
    Triangle.call(this,a,b,c);
    this.color = random(['#22577A','#38A3A5','#57CC99','#80ED99','#00FFFF','##C7F9CC']);

}
Fat.prototype = Object.create(Triangle.prototype)

Skinny.prototype.cut = function() {
    var p = golden(this.b,this.a);
    return [new Skinny(p,this.c,this.a),new Fat(this.c,p,this.b)];
}

Fat.prototype.cut = function() {
    var p = golden(this.a,this.c);
    var q = golden(this.a,this.b);
    return [new Fat(p,q,this.a),new Skinny(q,p,this.b),new Fat(this.c,p,this.b)];
}

Triangle.prototype.draw = function() {
    fill(this.color);
    pg.fill(this.color)
    noStroke();
    beginShape();
    pVertex(this.a);
    pVertex(this.b);
    pVertex(this.c);
    endShape(CLOSE);

    stroke('black');
    
    beginShape();
    pVertex(this.a);
    pVertex(this.b);
    pVertex(this.c);
    endShape();
    
}


function mousePressed() {
    lim +=1;
}


function setup() {
    csize = windowWidth;
    w = 2*csize;
    createCanvas(csize,csize);
    pg = createGraphics(csize, csize);
    image(pg, 0, 0, csize, csize);
    pg.background("black");


}


function draw() {
    var s = new Skinny(new Point(-w,0),new Point(0,w*Math.tan(Math.PI*2/5)),new Point(w,0));
    var newList = [];
    var oldList = s.cut();
    for(var i=0;i<lim;i++){
        for(var t of oldList){
            var p = t.cut();
            for(var s of p){
                newList.push(s);
            }
        }
        oldList = newList;
        newList=[];
    }
    for(var t of oldList){
      
        t.draw();
    }

}

function keyPressed(){
  if(keyCode == ENTER)
  {
  var d = new Date();
  pg.save("pg"+String(d.getTime())+".png")
  }

}