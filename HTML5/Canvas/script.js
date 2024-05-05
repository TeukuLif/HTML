// menyiap canvas
const mycanvas = document.getElementById('mycanvas');

// atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// tentukan context
const c = mycanvas.getContext('2d');

// // membuat rectangle
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(50, 50, 300, 400);
// c.fill();
// c.stroke();

// membuat animasi

let x = 300;
let y = 200;
let speedX = 5;
let speedY = 5;
let radius = 150;

function draw() {

    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = 'red';
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        speedX = -speedX;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        speedY = -speedY;
    }

    x += speedX;
    y += speedY;

}

draw();