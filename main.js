function preload(){
}
function setup(){
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(500, 450);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#c360fc');
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}