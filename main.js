Webcam.set({
    width:450,
    height:350,
    image_format:"png",
    png_quality:100
});
camera = document.getElementById("camera");
Webcam.attach("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src = '"+data_uri+"' id='capture_image'>;"
    })

}
console.log("ml5 version" , ml5.version)

clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XurXVhQ6w/model.json")

function model_ready()
{
    console.log("model_is_ready");
}

function check()
{
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}