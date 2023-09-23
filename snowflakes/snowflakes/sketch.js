const CRYSTAL_SIZE = 500
const SIDES = 6

// layout
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 1
const ROWS = 1
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN

let PALETTE = []
ALL_CRYSTALS = []

function setup() {
  const totalX = START + GRIDBOX * COLUMNS
  const totalY = START + GRIDBOX * ROWS
  console.log(totalX,totalY);
  createCanvas(totalX, totalY , SVG)

  // PALETTE = [
  //   color(255, 52, 154), // pink
  //   color(4, 0, 152), // blue
  //   "#2e51ac",
  //   "#04c",
  //   "#6575",
  //   "#d5cec5",
  //   // "#f5f5f8",
  //   "black",

  // ]

  // indigo pallete
  PALETTE = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#8b00ff",
  ]

  noLoop()
  // frameRate(2.5);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  // go to a point on the screen and draw a crystal
  // continue to do this until we run out of room
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      // add random jitter to the starting position of the crystal
      
      // const crystal = makeCrystal({x: posX, y: posY})
      const crystal = makeCrystal({x: posX + random(-300,300), y: posY+random(-300,300)})

      console.log(crystal)
      ALL_CRYSTALS.push(crystal)
    }
  }

  ALL_CRYSTALS.forEach(crystal => {
    drawCrystal(crystal)
  })

  if (frameCount % 3 === 0) {
  clear();
  background(getRandomFromPalette());

  }
}












