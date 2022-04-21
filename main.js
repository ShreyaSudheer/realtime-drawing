noseX = 0;
noseY = 0;
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
    background('#987ef7');
    fill('#77e4f2');
    stroke('#262aff');
    square(noseX, noseY, 100);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY =  results[0].pose.nose.y;
        console.log(" noseX = " +noseX+ " noseY = " +noseY);
    }
}