// Typing Animation
const words = ["CYBER NEXUS", "SYSTEM READY", "HELLO USER"];
let wordIdx = 0, charIdx = 0;
const typingEl = document.getElementById("typing");

function type() {
    if (charIdx < words[wordIdx].length) {
        typingEl.textContent += words[wordIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIdx > 0) {
        typingEl.textContent = words[wordIdx].substring(0, charIdx - 1);
        charIdx--;
        setTimeout(erase, 50);
    } else {
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, 500);
    }
}
type();

// Live Clock
setInterval(() => {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}, 1000);

// Canvas Particles (Lightweight version for Mobile)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for(let i=0; i<60; i++) { // Mobile friendly count
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25,
            size: Math.random() * 2
        });
    }
}

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
    particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

window.addEventListener("resize", init);
init();
animate();
