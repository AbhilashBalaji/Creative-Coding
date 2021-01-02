let seedNum = [];
let bg;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < 100; i++){
		seedNum.push(int(random(1000)));
	}
	bg = createGraphics(width + 10, height + 10);
  bg.noStroke();
	bg.fill(255,50);
  for (let i = 0; i < 500000; i++) {
    let x = random(bg.width);
    let y = random(bg.height);
    let s = noise(x*0.01, y*0.01) + 1;
    bg.rect(x, y, s, s);
  } 
	//noLoop();
}

function draw() {
	randomSeed(seedNum[floor(frameCount / 90) % seedNum.length]);
	background("#A6FCE9");
	noStroke();

	let s = min(width, height) * 0.9;
	divRect(width/2 - s/2, height/2 - s/2, s, s);
	
	image(bg,0,0);
}

function divRect(x,y,w,h){
	let rn = random(0.1,0.9);
	if(w > h){
		let w1 = rn * w;
		drawRect(x, y, w1, h);
		drawRect(x + w1, y, w - w1, h);
	}else{
		let h1 = rn * w;
		drawRect(x, y, w, h1);
		drawRect(x, y + h1, w , h - h1);
	}
	
}

function drawRect(x,y,w,h)
{
	const margine = 10;
	const lenThresh = 200;
	 const rnThresh = 0.2;
	let rn = random();
	if(min(w, h) > lenThresh && rn > rnThresh)divRect(x,y,w,h);
	else{
		fill(0);
		randomStripe(x + margine / 2, y + margine / 2,w - margine, h - margine);
	}
}

function randomStripe(x,y,w,h){
  let isAxisX = random() > 0.5 ? true : false;
  // let isAxisX = true;
	let divNum = int(random(4,50));
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
		fill("#C00414");
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
	
	points = getNoisedPos(points, random(0.01,0.2), random(0.01,0.2), 0.01, xOff, yOff);
	
	beginShape();
	for(let p of points){
	vertex(p.x, p.y);
	}
	endShape(CLOSE);
}


function getNoisedPos(posArr, nscX, nscY,nscZ, maxOffX, maxOffY)
{
	for(let p of posArr){
		let nvX = noise(p.x * nscX, p.y * nscX , frameCount * nscZ) - 0.5;
		let nvY = noise(p.x * nscY, p.y * nscY, frameCount * nscZ) - 0.5;
    p.add(createVector(-nvX * maxOffX , nvY * maxOffY));
		// p.add(createVector(vX * maxOffX , -nvY * maxOffY));
    
	}
	return posArr;
}