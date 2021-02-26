var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums = 2000;
var angle_scale = 2.9;
var grid_resolution =  25;
var points = [];

var x_grid_step;
var y_grid_step;

function setup(){
  createCanvas(3000, 3000);
	background(21, 8, 50);
	colorMode(HSB, 255);
  for(var i = 0; i < nums; i++){
    particles_a[i] = new Particle(random(0, width),random(0,height));
    particles_b[i] = new Particle(random(0, width),random(0,height));
    particles_c[i] = new Particle(random(0, width),random(0,height));
  }
  x_grid_step = width / grid_resolution;
  y_grid_step = height / grid_resolution;
  for(var i = 0; i < grid_resolution; i++){
    for(var j = 0; j < grid_resolution; j++){
      var idx = to_idx(i, j);
      points[idx] = [x_grid_step * (i + random(0, 1)), y_grid_step * (j + random(0, 1))]
    }
  }
}

function draw(){
  noStroke();
  smooth();
    for(var i = 0; i < nums; i++){
    var radius = map(i,0,nums,1,3);
    var alpha = map(i,0,nums,100,250);

    fill(i/nums*255, 200, 255, alpha);
    particles_a[i].move();
    particles_a[i].display(radius);

    fill(255 - i/nums*255, 200, 255, alpha);
    particles_b[i].move();
    particles_b[i].display(radius);

		fill(180,180,180,alpha);
    particles_c[i].move();
    particles_c[i].display(radius);
  }  
}

function to_idx(x_idx, y_idx) {
  return x_idx + y_idx * grid_resolution; 
}

function voronoi_noise(x, y) {
  var max_step = Math.max(x_grid_step, y_grid_step)
  var x_idx = Math.floor(x / x_grid_step);
  x_idx = Math.min(Math.max(0, x_idx), grid_resolution-1)
  var y_idx = Math.floor(y / y_grid_step);
  y_idx = Math.min(Math.max(0, y_idx), grid_resolution-1)
  var idx = to_idx(x_idx, y_idx);
  var min_dist = Math.hypot(points[idx][0] - x, points[idx][1] - y);
  var min_dist_idx = 0;
  var x_extent = Math.ceil(x_grid_step / max_step);
  var y_extent = Math.ceil(y_grid_step / max_step);
  for(var i = -x_extent; i <= x_extent; i++){
    for(var j = -y_extent; j <= y_extent; j++){
      var x1_idx = x_idx + i;      
      var y1_idx = y_idx + j;
      if(x1_idx < 0 || x1_idx >= grid_resolution || y1_idx < 0 || y1_idx >= grid_resolution){
        continue;
      }
      idx = to_idx(x1_idx, y1_idx);
      var dist = Math.hypot(points[idx][0] - x, points[idx][1] - y);
      if(dist < min_dist){
        min_dist = dist;
        min_dist_idx = idx;
      }
    }
  }
  return min_dist;
}


function Particle(x, y){
  this.dir = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.pos = createVector(x, y);
  this.speed = 1;

  this.move = function(){
    var angle = voronoi_noise(this.pos.x, this.pos.y)*TWO_PI/angle_scale;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  this.display = function(r){
    ellipse(this.pos.x, this.pos.y, r, r);
  }
}

let lapse = 0;    // mouse timer
function mousePressed(){
// prevents mouse press from registering twice
  if (millis() - lapse > 400){
    save(+ new Date()+'pix.png');
    lapse = millis();
  }
}