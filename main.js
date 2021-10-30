//Variables

var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

//Functions
function start() {
    document.getElementById('voice').innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById('voice').innerHTML = content;
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById('voice').value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    var speech = new SpeechSynthesisUtterance('Taking your selfie in 5 seconds')
    if (speak_data == 'take my selfie') {
        synth.speak(speech);
        Webcam.attach(camera);
        setTimeout(function () {
            take_snapshot()
            save()
        }, 5000
        );
    }
    else {
        synth.speak(utterThis);
    }
}
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = "<img id='selfie' src='" + data_uri + "'>";
    });
}
function save(){
    link = document.getElementById('link');
    image = document.getElementById('selfie').src;
    link.href = image;
    link.click();
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById('camera');