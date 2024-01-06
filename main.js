noseX="";
noseY="";
GameStatus="";
function startGame(){
  GameStatus="start";
  document.getElementById("status").innerHTML= "Game is Loading"; 
}

function game()
{
  console.log("noseX="+ noseX+", noseY= "+noseY);
}
 function preload(){
  world_start= loadSound("world_start.wav");
  setSprites();
  MarioAnimation();
  
 }
 function draw(){
  if(game_status=="start"){
    
  }
 }

function setup() {
  createCanvas(600, 400);
  video= createCapture(VIDEO);
  video.size(600, 300);
  poseNet= ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses); 
}

function modelLoaded(){
  console.log('Model Loaded!')
}

function draw() {
  background('#D3D3D3');
  if(noseX< 300)
  {
    marioX= marioX-1;
  }
   if(noseX>300)
  {
    marioX= marioX+1;
  }
   if(noseY< 150)
  {
    marioY= marioY-1
  }
 image(img,marioX,marioY, 40,70);
}

function gotPoses(){
if(results.length > 0)
  {
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log( "noseX="+ noseX+ "noseY="+ noseY)
  }
}