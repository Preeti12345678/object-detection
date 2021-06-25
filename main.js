img="";
status="";
objects="";
percent="";
function preload(){
    img=loadImage('dog_cat2.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(450,150);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting objects";
}
function draw(){
  image(img, 0, 0, 640, 420);
  if(status !=""){
    for(i=0; 0<objects.length; i++){
      document.getElementById("status").innerHTML="Status=Objects Detected";
      fill("red")
      percent=floor(objects[i].confidence*100);
      objects[i].label;
      text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y);
      noFill();
      stroke("red")
      rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
    }
  }
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
  objects=results;
}

