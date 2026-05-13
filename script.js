// Optimized Typing Effect
const words = ["CYBER NEXUS", "SYSTEM ONLINE"];
let wordIdx = 0, charIdx = 0;
const typingEl = document.getElementById("typing");

function type() {
    if (charIdx < words[wordIdx].length) {
        typingEl.textContent += words[wordIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            typingEl.textContent = "";
            charIdx = 0;
            wordIdx = (wordIdx + 1) % words.length;
            type();
        }, 2000);
    }
}
type();

// Clock
setInterval(() => {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}, 1000);

// Simple Mobile Particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Add simple particle logic here if needed
    requestAnimationFrame(animate);
}
animate();
