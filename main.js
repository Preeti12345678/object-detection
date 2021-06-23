img="";
status="";

function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(350,150);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting objects";
}
function draw(){
  image(img, 0, 0, 640, 420);
  fill("red");
  text("Dog",150,60);
  noFill();
  stroke("red");
  rect(140,40,300,350);

  fill("red");
  text("Cat",320,150);
  noFill();
  stroke("red");
  rect(300,100,300,300);
}
function modelLoaded(){
  console.log("Model Loaded");
  status=true;
  object_detector.detect(img, gotResults);
}
function gotResults(error,results){
  if(error){
    console.log(error);
  }
  console.log(results);

}

