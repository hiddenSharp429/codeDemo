function custom2()
{
    document.getElementById("demo").innerHTML="现代风俗";
}
function custom1()
{
    document.getElementById("demo").innerHTML="传统风俗";
}
var canvas=document.getElementById("canvas")

var w=window.innerWidth
var h=window.innerHeight
canvas.Width=w
canvas.height=h
var count=200
var snows=[]
for(var i=0;1<count;i++){
    snows.push(
        {
            x:Math.random() * w,
            y:Math.random() * h,
            r:Math.random() * snows,
        }
    )
}
function draw(){
    context.clearRect(0,0,w,h)
    context.beginPath()
    for(var i = 0; i<count ; i++){
        var snow=snows[i]
        context.fillstyle="rgba(255,255,255,1)"
        context.moveTo(snow.x , snow.y)
        context.arc(snow.x , snow.y , snow.r , 0 , Math.PI*2)
    }
    context.fill()
    move()
}
function move(){
    for(var i = 0 ;i<count ; i++){
        var snow = snows[i]
        snow.y +=(7 - snow.r) / 10
        if (snow.y > h){
            snows[i]={x:Math.random()*w,y:0,r:snow.r}
        }
    }
}
draw()
setInterval(draw,1)