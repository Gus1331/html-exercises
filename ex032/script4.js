let screen = document.getElementById("screen");
let brush = screen.getContext("2d");
let img1 = document.getElementById("img");

let img2 = new Image();
img2.src = "pidgeon.png";
img2.onload = draw;


function draw(){
    brush.drawImage(this, 190, 190, 150, 150);
    brush.drawImage(img1, 40, 40, 150, 150);
}
