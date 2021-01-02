let phtos = [
	"kodomo.jpeg"
];

let skeTex = [];
const TEXNUM = 6;
let imgs = [],img;


function preload(){
	for(let i = 0; i < TEXNUM; i++){
		skeTex[i] = loadImage("suketchTex_" + i + ".jpg");
	}
	for(let i = 0; i < 5; i++){
		imgs[i] = loadImage(phtos[i]);
	}
	img = imgs[3];
	img = random(imgs);
}

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
	
	noStroke();	
	rectMode(CENTER);
	
	//shader
	sh = createShader(vert,frag);
	this.shader(sh);
	pixelDensity(1);
	sh.setUniform("u_imgResolution", [img.width,img.height]);
	sh.setUniform("u_img",img);
	for(let i = 0; i < skeTex.length; i++)sh.setUniform("u_tex_" + i, skeTex[i]);
	
}

function draw() {
	background(0);
	let ratio = min(width/img.width, height/img.height) * 0.9;
	rect(0,0, img.width * ratio, img.height * ratio);
}