nose_x = 0
nose_y = 0

function preload()
{
    mustache_img = loadImage("m.png")
}

function setup()
{
    canvas = createCanvas(600,500)
    canvas.center()
    cam = createCapture(VIDEO)
    cam.size(600,500)
    cam.hide()


    poseNet = ml5.poseNet(cam,modelLoaded)
    poseNet.on('pose',gotResults)
}
function modelLoaded()
{
    console.log("Model has been loaded")
}
function gotResults(r)
{
    if(r.length > 0)
    {
        console.log(r)
        nose_x = r[0].pose.nose.x-30
        nose_y = r[0].pose.nose.y+0
    }

}
function draw()
{
    image(cam, 0,0,600,500)
    image(mustache_img, nose_x,nose_y,70,50)
}

function snapshot()
{
    save("m.png")
}