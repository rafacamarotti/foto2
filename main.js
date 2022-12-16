var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;
Textbox.innerHTML= Content;
console.log(Content);
if(Content == "tire minha selfie"){
    console.log("tirando selfie --- ");
    speak();
    speakk();
    speeak();
}
}
function speak(){
    imgId="selfie";
    imgid="selfie1";
    Imgid="selfie2";
    synth= window.SpeechSynthesis;
    var speakData ="Tirando sua selfie em 5 segundos";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save()
    },5000);
}
function speakk(){
    
    imgid="selfie1";
    
    synth= window.SpeechSynthesis;
    
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save()
    },5500);
}
function speeak(){
    
    Imgid="selfie2";
    synth= window.SpeechSynthesis;
    
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save()
    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function takeSelfie(){
    Webcam.snap(function(data_uri){
       if(imgId=="selfie"){
         document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
       }
       if(imgid=="selfie1"){
         document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
    }if(Imgid=="selfie2"){
         document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';}
    });

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href=image;
    link.click();
}