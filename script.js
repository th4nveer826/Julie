function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Live Heart Drawing Effect
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();
}

let t = 0;
function animateHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 20; i++) {
        let x = canvas.width / 2 + Math.sin(t + i) * 100;
        let y = canvas.height / 2 + Math.cos(t + i) * 100;
        drawHeart(x, y, 20);
    }

    t += 0.05;
    requestAnimationFrame(animateHeart);
}

animateHeart();
