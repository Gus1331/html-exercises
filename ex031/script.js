let video = document.getElementById("video");
let mainBtn = document.getElementById("mainBtn");
let controlBar = document.getElementById("controlBar");
let muteBtn = document.getElementById("muteBtn");

function control(x){
    switch(x){
        case true:
            controlBar.style.right = "0";
            break;
            case false:
            controlBar.style.right = "-30%";
            break;
    }
}

function play(){
    mainBtn.setAttribute("onclick","pause();");
    mainBtn.innerText = "Pause";
    video.play();
}
function pause(){
    mainBtn.setAttribute("onclick","play();");
    mainBtn.innerText = "Play";
    video.pause();
}
function stop(){
    video.pause();
    mainBtn.setAttribute("onclick","play();");
    mainBtn.innerText = "Play";
    video.currentTime = 0;
}
function skip10(x){
    switch(x){
        case true:
            video.currentTime += 10;
            break;
            case false:
            video.currentTime -= 10;
            break;
    }
}
function speed(x){
    switch(x){
        case true:
            video.playbackRate += 0.1;
            break;
            case false:
            video.playbackRate -= 0.1;
            break;
    }
}
function volume(x){
    switch(x){
        case true:
            video.volume += 0.2;
            break;
            case false:
            video.volume -= 0.2;
            break;
    }
}
function mute(x){
    switch(x){
        case true:
            muteBtn.innerText = "Desmutar"
            muteBtn.setAttribute("onclick","mute(false);")
            video.muted = true;
            break;
        case false:
            muteBtn.innerText = "Mutar"
            muteBtn.setAttribute("onclick","mute(true);")
            video.muted = false;
            break;
    }
}