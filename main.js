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

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XurXVhQ6w/model.json",model_ready)

function model_ready()
{
    console.log("model_is_ready");

}

function check()
{
    img = document.getElementById("capture_image");
    
    classifier.classify(img, gotResult);
}
function gotResult(error , result){
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(result);
    document.getElementById("object_name").innerHTML = result[0].label
    document.getElementById("accuracy_name").innerHTML = (result[0].confidence * 100).toFixed(3)+"%";
    }
    }