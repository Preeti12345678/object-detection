img="";
status="";
object_detector="";
objects=[];
function preload(){
    img=loadImage('laptop.jpeg');
}
function setup(){
    canvas=createCanvas(300,400);
    canvas.position(550,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="status =Detecting Objects ";
}
function draw(){
  image(img,0,0,300,400);
  if(status !=""){
    for(i=0; 0<objects.length; i++){
      fill("red")
      percent=floor(objects[i].confidence*100);
      objects[i].label;
      text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y);
      noFill();
      stroke("red")
      rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
      document.getElementById("status").innerHTML="Status= It detected 1 out of 3 objects in this image";
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