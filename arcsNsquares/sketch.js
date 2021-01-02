var colors = "4d5057-4e6e5d-4da167-3bc14a-cfcfcf-78c0e0".split("-").map(a=>"#"+a)
let overAllTexture

// function mousePressed(){
// 	save()
// }

function setup() {
	createCanvas(2000,2000);
	background(200);
	fill(20)
	rect(0,0,width,height)
	
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	// noStroke()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
		}
	}
	
	overAllTexture.updatePixels()
	
	push()
		// blendMode(SCREEN)
		divideSq(0,0,width,height,5)
	pop()
	
	push()
	resetMatrix()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()
	
	
}

function divideSq(x,y,w,h,d){
	push()
		translate(x,y)
		rotate(PI/1000+random(0.01))
		shearX(0.02)
		scale(random(1,1.01),1)
		// noFill()
		noStroke()
		fill(random(colors))
		let sp=0.9
		rect(w*(1-sp)/2,h*(1-sp)/2,
				 w*sp*random(0.5),h*sp*random(0.5),5)
	
		noStroke()
		fill(random(colors))
		for(var i=0;i<30;i++){
			ellipse(w/2+random(-w,w)*random(0.5),
							h/2+random(-w,w)*random(0.5),
						 random(sqrt(w)/5))
		}
	
		push()

			strokeWeight(2)
			noFill()
			let deltaAng = random([1,2])*PI
			for(var i=0;i<5;i++){
				let rr = random(w)*random()*random()
				let cc = random(colors)
				stroke(cc)
				noFill()
				arc(w/2,h/2,rr*2,rr*2,PI+deltaAng,deltaAng)
				
				noStroke()
				fill(cc)
				ellipse(w/2-rr,h/2,6)
				ellipse(w/2+rr,h/2,6)
			}
		pop()

		// if (random()<0.1 && d<3){
		// 	return
		// }
	
		strokeWeight(4)
		let ratio = random(0.4,0.6)
		if (d>0){
			if (random()<0.5){
				divideSq(0,0,w*ratio,h,d-1)
				divideSq(0+w*ratio,0,w*(1-ratio),h,d-1)
			}else  {
				divideSq(0,0,w,h*ratio,d-1)
				divideSq(0,0+h*ratio,w,h*(1-ratio),d-1)
			}
		}
	pop()
}
function draw() {
	
	// ellipse(mouseX, mouseY, 20, 20);
}