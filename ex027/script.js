let swt1 = false
let swt2 = false
let swt3 = false
let swt4 = false
let switchB
let body = document.getElementById("body")

function sswitch(x,swt) {

    if (swt==false) turnOn(x);
    else turnOff(x);
}

function turnOn(element){
    element[0].style.left = "52%"
    element[0].style.backgroundColor = "rgb(170, 170, 223)"
}
function turnOff(element){
    element[0].style.left = "-1px"
    element[0].style.backgroundColor = "rgb(54, 54, 56)"
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

            swt2 = false;
            break;
        case false:
            
            swt2 = true;
            break;
    }
}

function sswt3(){
    switch (swt3){
        case true:

            swt3 = false;
            break;
        case false:
            
            swt3 = true;
            break;
    }
}

function sswt4(){
    switch (swt4){
        case true:

            swt4 = false;
            break;
        case false:
            
            swt4 = true;
            break;
    }
}



function color1(){
    body.style = "background-color: rgb(173, 216, 230)"
}
function color2(){
    body.style = "background-color:rgb(13, 43, 53)"
}