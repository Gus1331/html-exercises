let screen = document.getElementById("screen");
let pincel = screen.getContext("2d");

function step1(){
    setTimeout(step2,500);
    pincel.moveTo(0,0);
    pincel.lineTo(75,100)
    pincel.lineWidth = 2;
    pincel.strokeStyle = "rgb(108, 66, 175)";
    pincel.stroke();
}
function step2(){
    setTimeout(step3,500);
    pincel.moveTo(75,100);
    pincel.lineTo(150,0)
    pincel.lineWidth = 1;
    pincel.strokeStyle = "rgb(77, 42, 143)";
    pincel.stroke();
}
function step3(){
    setTimeout(step4,500);
    pincel.moveTo(150,0);
    pincel.lineTo(235,100)
    pincel.lineWidth = 2;
    pincel.strokeStyle = "rgb(108, 66, 175)";
    pincel.stroke();
}
function step4(){
    pincel.moveTo(235,100);
    pincel.lineTo(300,0)
    pincel.lineWidth = 1;
    pincel.strokeStyle = "rgb(77, 42, 143)";
    pincel.stroke();
}