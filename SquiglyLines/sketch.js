
let c =["#232737","#3eabbd","#639cb8","#3761B4","#2881b2","#f7eed7"];
let seedNum = [];
let bg;

function setup() {//grains
	createCanvas(1080,1250);
	for(let i = 0; i < 100; i++){
		seedNum.push(int(random(1000)));
	}
	bg = createGraphics(width, height );
  bg.noStroke();
	bg.fill(255,20);
  for (let i = 0; i < 500000; i++) {
    let x = random(bg.width);
    let y = random(bg.height);
    let s = noise(x*0.01, y*0.01) + 1;
    bg.rect(x, y, s, s);
  } 
//   noLoop();
}

function draw() { //background
	randomSeed(seedNum[floor(frameCount / 100) % seedNum.length]);
	background("#f7eed7");
	noStroke();``

	let s = min(width, height) * 0.95;
	divRect(width/2 - s/2, height/2 - s/2, s, s);
	
	image(bg,0,0);
}

function divRect(x,y,w,h){
	let rn = random(0.3,1);
	
	if(w > h){
		let w1 = rn * w;
		drawRect(x, y, w1, h);
		drawRect(x + w1, y, w - w1, h);
	}else{
		let h1 = rn * w;
		drawRect(x, y, w, h1);
		drawRect(x, y+ h1 , w , h );
	}
	
}

function drawRect(x,y,w,h)
{
	const margine =random(-60,60);
	const lenThresh = min(width,height)/2;
	 const rnThresh = 0.2;
	let rn = random();
	if(min(w, h) > lenThresh && rn > rnThresh)divRect(x,y,w,h);
	else{
		fill(random(c));
		randomStripe(x + margine / 2, y + margine / 2,w - margine, h - margine);
	}
}

function randomStripe(x,y,w,h){
	let isAxisX = random() > 0.5 ? true : false;
	let divNum = int(random(3,8));
	let span = isAxisX ? w / divNum : h / divNum;
	let rectSize = random() > 0.6 ? span * random(0.15, 0.35) : span * random(0.65, 0.9);
	for(let i = 0; i < divNum; i++){
		let offset = i / (divNum - 1) * (span - rectSize);
		let dx, dy, dw, dh;
		if(isAxisX){
			dx = x + i * span + offset;
			dy = y;
			dw = rectSize;
			dh = h; 
		}else{
			dx =x;
			dy = y + i * span + offset;
			dw = w;
			dh = rectSize; 
		}
		fill(random(c));
		suitableRect(dx, dy, dw,dh, dw / 20, dh / 20, 100,100);
	}
}


function suitableRect(x,y,w,h, dw = 1,dh = 1)
{
	let points = [];
	let spanX = w/dw;
	let spanY = h/dh;
	for(let i = 0; i < dw; i ++)points.push(createVector(x + i * spanX, y));
	for(let i = 0; i < dh; i ++)points.push(createVector(x + w, y + i * spanY));
	for(let i = 0; i < dw; i ++)points.push(createVector(x + w - i *spanX , y + h));
	for(let i = 0; i < dh; i ++)points.push(createVector(x, y + h - i * spanY));
	
	let xOff = h > w ? 0.4 * w : 0.5 * h;
	let yOff = w > h ? 0.3 * h : 0.5 * w;
	let maxOff = 15;
	let minOff = 5;
	xOff = max(minOff, min(xOff,maxOff));
	yOff = max(minOff, min(yOff,maxOff));
	
	points = getNoisedPos(points, random(0.01,0.5), random(0.01,0.5), 0.01, xOff, yOff);
	
	beginShape();
	for(let p of points){
	vertex(p.x, p.y);
	}
	endShape(CLOSE);
}


function getNoisedPos(posArr, nscX, nscY,nscZ, maxOffX, maxOffY)
{
	for(let p of posArr){
		let nvX = noise(p.x * nscX, p.y * nscX , frameCount * nscZ*20) ;
		let nvY = noise(p.x * nscY, p.y * nscY, frameCount * nscZ*10) ;
		p.add(createVector(nvX * maxOffX , nvY * maxOffY));
	}
	return posArr;
}