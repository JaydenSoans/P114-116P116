noseX = 0;
noseY = 0;
function preload(){
    mush_img = loadImage("https://i.postimg.cc/sXcKpZn5/mustache-transparent-background-19.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 40;
        noseY = results[0].pose.nose.y -5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video,0,0,400,400);
    image(mush_img,noseX,noseY,70,70);
}

function take_snapshot(){
    save('student_mush.png');
}