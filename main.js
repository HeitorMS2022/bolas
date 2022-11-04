canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var cor = "cyan";
var raio = "";
var width = "2";
var altura = "10";
var largura = "10";


function circulo(mouseX , mouseY)
{
ctx.beginPath();
ctx.strokeStyle = cor;
ctx.lineWidth = width;
ctx.lenght = largura;
ctx.height = altura;
ctx.arc(mouseX, mouseY, altura, 0, raio);
ctx.stroke();
}

canvas.addEventListener("mousedown" , desenhar);

function desenhar(e)
{
    cor = document.getElementById("color").value;
    raio = document.getElementById("radius").value;
    width = document.getElementById("comprimento").value;
    altura = document.getElementById("height").value;
    largura = document.getElementById("lenght").value;
    mouseEvent = "mousedown";
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    circulo(mouseX , mouseY);
}

function clearArea()
{
    ctx.clearRect(0 , 0 , 750 , 550);
}

var mouseEvent = "empty";
var mouselastpositionX , mouselastpositionY;
var lineWidth = 2;
canvas.addEventListener("mousedown" , verificar1);

/*function verificar1(e)
{
    cor = document.getElementById("color").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup" , verificar2);

function verificar2(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave" , verificar3);

function verificar3(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove" , verificar4);

function verificar4(e)
{

    current_position_mouseX = e.clientX - canvas.offsetLeft;
    current_position_mouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = lineWidth;

        console.log("Últimas posicões x e y = ");
        console.log("x = " + mouselastpositionX + "y = " + mouselastpositionY);
        ctx.moveTo(mouselastpositionX , mouselastpositionY);

        console.log("Posicões x e y atuais = "); 
        console.log("x = " + current_position_mouseX + "y = " + current_position_mouseY);
        ctx.lineTo(current_position_mouseX , current_position_mouseY);
        ctx.stroke();
    }
    mouselastpositionX = current_position_mouseX;
    mouselastpositionY = current_position_mouseY;
}*/