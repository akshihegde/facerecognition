Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="capture_image"src="'+ data_uri +'"/>';
});
console.log('ml5version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded);
}
function modelLoaded(){
console.log('modelLoaded');
}
function check(){
img=document.getElementById("capture_image");
classifier.classify(img,gotResult);
}
function gotResult(error,result){
if (error){
console.error(error);
}
else{
console.log(result)
document.getElementById("result_face_identity").innerHTML=result[0].label;
document.getElementById("result_face_accuracy").innerHTML=result[0].confidence;

}
}
