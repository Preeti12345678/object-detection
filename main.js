img="";
status="";
objects="";
percent="";
function preload(){
    img=loadImage('dog_cat2.jpg');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.position(450,150);
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting objects";
}
function modelLoaded(){
  console.log("Model Loaded");
  status=true;

}
function gotResults(error,results){
  if(error){
    console.log(error);
  }
  console.log(results);
  objects=results;
}
function draw(){
  image(video, 0, 0, 380, 380);
  if(status !=""){
    r=random(255);
g=random(255);
b=random(255);
    object_detector.detect(video, gotResults);
    for(i=0; i<objects.length; i++){
      document.getElementById("status").innerHTML="Status=Objects Detected";
      document.getElementById("objects_detected").innerHTML="Number of objects detect: "+objects.length;
      fill(r,g,b);
      percent=floor(objects[i].confidence*100);
      text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y);
      noFill();
      stroke(r,g,b);
      rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
    }
  }
}

