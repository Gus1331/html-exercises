let swt1 = false;
let swt2 = false;
let swt3 = false;
let swt4 = false;
let switchB;
let body = document.getElementsByTagName("body")[0];
let horiz = document.getElementsByTagName("hr")[0];
let title = document.getElementsByTagName("h1")[0];
let main = document.getElementsByTagName("main")[0];

function sswitch(x,swt) {

    if (swt==false) turnOn(x);
    else turnOff(x);
}

function turnOn(element){
    element[0].style.left = "52%";
    element[0].style.backgroundColor = "rgba(170, 170, 223 , 0.55)";
}
function turnOff(element){
    element[0].style.left = "-1px";
    element[0].style.backgroundColor = "rgb(54, 54, 56)";
}

function sswt1(){
    switch (swt1){
        case true:

            color1();
            swt1 = false;
            break;
        case false:

            color2();
            swt1 = true;
            break;
    }
}

function sswt2(){
    switch (swt2){
        case true:

            line1();
            swt2 = false;
            break;
        case false:
            
            line2();
            swt2 = true;
            break;
    }
}

function sswt3(){
    switch (swt3){
        case true:

            font1();
            swt3 = false;
            break;
        case false:
 
            font2();
            swt3 = true;
            break;
    }
}

function sswt4(){
    switch (swt4){
        case true:

            boxC1();
            swt4 = false;
            break;
        case false:
            

            boxC2();
            swt4 = true;
            break;
    }
}



function color1(){
    body.style = "background-color: rgb(173, 216, 230)";
}
function color2(){
    body.style = "background-color: rgb(013, 043, 053)";
}
function line1(){
    horiz.style = "background-color: rgb(000, 000, 000)";
}
function line2(){
    horiz.style = "background-color: rgb(173, 216, 230)";
}
function font1(){
    title.style.color = "rgb(000, 000, 000)";
}
function font2(){
    title.style.color = "rgb(173, 216, 230)";
}
function boxC1(){
    main.style.backgroundColor = "rgb(255, 255, 255)";
}
function boxC2(){
    main.style.backgroundColor = "rgb(134, 124, 145)";
}