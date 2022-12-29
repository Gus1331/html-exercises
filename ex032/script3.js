let screen = window.document.getElementById("screen");
let brush = screen.getContext("2d");
let circle = {
    x: 300,
    y: 225,
    r: 150,
    a: Math.PI / 2,
    b: Math.PI / 2,
    h: 0,
    color: "rgb(100, 149, 237)"
}

setInterval(loading, 1);

function loading() {
    if (circle.b < Math.PI * 2) {
        circle.b += 0.05;
        refresh(circle);
    }
    else {
        circle.b = 0;
    }
}
function refresh(c) {
    brush.beginPath();
    brush.rect(0, 0, 600, 450);
    brush.fillStyle = "rgb(242, 242, 247)";
    brush.fill();
    brush.beginPath();
    brush.arc(c.x, c.y, c.r, c.a, c.b, c.h);
    brush.stokeStyle = c.color;
    brush.stroke();
}