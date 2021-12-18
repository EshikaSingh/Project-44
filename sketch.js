var bg ,bg2 ,form ,system ,code ,security;
var Score = 0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen.
  fill("white");
  textSize(25);
  text("Score: "  + Score, 500, 35);


  // Add code to display the end screen

  if(Score === 3){
    clear();
    background(bg2);
    fill("white");
    textSize(40);
    text("TREASURE UNLOCKED", 250, 200);
  }


  drawSprites()
}