noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

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
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Width and Height of square is " + difference;

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

                
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist = " + leftWrist + " rightWrist = " + rightWrist + " Difference = " + difference);
    }
}