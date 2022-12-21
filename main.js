var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function startt()
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
}
}
function speak(){
 
    synth= window.speechSynthesis;
    var speakData ="Tirando sua selfie em 5 segundos";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
    imgId="selfie";
      speakData="tirando sua selfie em 5 segundos"
        takeSelfie();
      utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
    },5000);
    setTimeout(function(){
    imgId="selfie1";
      speakData="tirando sua selfie em 5 segundos"
        takeSelfie();
      utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
    },10000);
    setTimeout(function(){
    imgId="selfie2"
        takeSelfie();
    },15000);
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
         document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
       }
       if(imgId=="selfie1"){
         document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
    }
      if(imgId=="selfie2"){
         document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';}
    });
}

