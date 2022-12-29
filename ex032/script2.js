let screen = document.getElementById("screen");
let brush = screen.getContext("2d");
let circle = {
    x : 300, //posicão x d do centro do arco
    y : 225, //posição y
    r : 150, //tamanho do raio
    a : 0, //angulo em rad onde começa o arco
    b : 0, //angulo final
    h : false //antihorario falso
}

setInterval(loading,1);

function loading(){
    if(circle.b < 2 * Math.PI) {
        circle.b += 0.05;
        refresh(circle);
    }
    else{
        circle.b = 0
        switch(circle.h){
            case true:
                brush.fillStyle = "rgb(102, 206, 206)";
                brush.rect(0 , 0 , 600 , 450);
                brush.fill();
                circle.h = false;
                break;
            case false:
                circle.h = true;
                break;
        }
    }
}

function refresh(c){
    brush.beginPath();
    brush.rect(0 , 0 , 600 , 450);
    brush.fillStyle = "rgba(102, 206, 206, 0.123)";
    brush.fill();

    brush.beginPath();
    brush.arc(c.x , c.y , c.r , c.a, c.b , c.h);
    brush.strokeStyle = "rgb(78, 30, 189)";
    brush.fillStyle = "rgb(56, 56, 202)";
    brush.stroke();
    brush.fill();
}