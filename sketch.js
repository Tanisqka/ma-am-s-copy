var bg,bg1,form,system,code,security,system_one,Code_one,security_one;
var score=0;
var score1=0
var gameState="level1"


function preload() {
  bg1 = loadImage("background.jpg");
  bg2 = loadImage("maths.jpg") 
  bg3 = loadImage("maths(1).jpg") 
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  //system1=new SystemOne()
  
  //security1= new SecurityOne()
  //system1=new SystemOne()

  button2=createSprite(450,220)
  button2.visible=false
  button1=createSprite(450,220)
  button1.visible=false
}

function draw() {
  if(gameState=="level1"){
  background(bg2);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg1)
    fill("white")
    textSize(40);
    text("Level 2  UNLOCKED",260, 200);

    button2.visible=true

    if(mousePressedOver(button2)){
      gameState="level2"
  
    }
  }
  if(gameState=="level2" && score == 3){
   
   
    button2.visible=false
   // score1=0
    background(bg3)
    clues1();
    //security1= new SecurityOne()
    //security1.display();
     system1=new SystemOne()
    //system1.display()


    access4 = createInput("Type your answer here")
    access4.position(100,90);
    access4.style('background', 'white');  


    button4=createSprite(100,120)
    if(mousePressedOver(button4)){
      if(system1.authenticate(accessCode4,this.access4.value())){
        button4.hide();
        access4.hide();
        score++;
    }
    }
    /*button4 = createButton('Check');
    button4.position(100,120);
    button4.style('background', 'lightgrey');  
    button4.mousePressed(() => {
      if(system1.authenticate(accessCode4,this.access4.value())){
          button4.hide();
          access4.hide();
          score++;
      }
  });
*/
    textSize(20);
    fill("white");
    text("Score: " + score, 450, 50);
   
    
  }
}
   
  drawSprites()
}
