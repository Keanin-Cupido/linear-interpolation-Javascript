let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let x = width / 2;
let ballX = x;

let y = height / 2;
let ballY = y;

window.addEventListener('mousemove', (e)=>{
    x = e.clientX;
    y = e.clientY;
})

function moveBall(){
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle ='black';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();

    requestAnimationFrame(moveBall);
}

moveBall()