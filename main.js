x = "0";
y = "0";
draw_circle = "";
draw_rect = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is now listening, please speak"; 
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "You said " + content;

    if (content == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        draw_circle = "set";
        document.getElementById("status").innerHTML = "Circle is being drawn ";
    }

    if (content == "rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        draw_rect = "set";
        document.getElementById("status").innerHTML = "Rectangle is being drawn ";
    }

}

function setup()
{
    canvas = createCanvas(900,600);
}

function draw()
{
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if(draw_rect == "set")
    {
        radius = Math.floor(Math.random() * 100);
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}