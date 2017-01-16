// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
}

function draw(){
  background(201,244,252);
  noStroke();

  for(var i = 100; i<800; i+=200){
    for(var j = 50; j<250; j+=150){
      drawEgg(i,j);
    }
  }

  for(var i = 200; i<800; i+=200){
    for(var j = 125; j<150; j+=75){
      drawEgg(i,j);
    }
  }
}

function drawEgg(x, y){
  if((mouseX>=x-25) && (mouseX<=x+25) && (mouseY>=y-25) && (mouseY<=y+25)){
    //yolk
    fill(255,234,0);
    ellipse(x, y+5, 40,20);
    fill(255,100);
    ellipse(x, y+3, 70,30);
    fill(255);//broken egg
    arc(x-20, y, 40,40, radians(45),radians(45+180));
    arc(x+20, y, 40,40, 7*PI/4, 11*PI/4);
    beginShape();
    vertex(x-36, y-13);
    vertex(x-25, y-15);
    vertex(x-25, y-4);
    vertex(x-12, y-4);
    vertex(x-15, y+6);
    vertex(x-5, y+6);
    vertex(x-5, y+15);
    endShape();
    beginShape();
    vertex(x+36, y-13);
    vertex(x+27, y-15);
    vertex(x+25, y-4);
    vertex(x+13, y-4);
    vertex(x+15, y+6);
    vertex(x+5, y+6);
    vertex(x+5, y+15);
    endShape();
  }
  else{
    fill(255);
      ellipse(x, y, 50,50);
      ellipse(x, y-5, 50,60);}
}
