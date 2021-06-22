var SpeechRecognition=window.webkitSpeechRecognition;
var recogintion=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recogintion.start();


}
recogintion.onresult=function run(event) {
    
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if (Content == "take my selfie" ) {
    
        speak();
    }
   
}
function speak() {
    var synth=window.speechSynthesis;
    speakdata="taking your selfie in 5 seconds";
    utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(cam);
    setTimeout(function () {
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:365,
    height:250,
    image_format:'png',
    png_quality:100

});
cam=document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="selfie_image" src=' + data_uri + ">";
    });
    
}
function save() {
    links=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    links.href=image;
    link.click();

}