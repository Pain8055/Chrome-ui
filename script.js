// ==========================
// Typing Animation
// ==========================

const words = [
    "CYBER NEXUS",
        "WELCOME PLAYER",
            "SYSTEM ONLINE",
                "ENTER THE FUTURE"
                ];

                let wordIndex = 0;
                let charIndex = 0;

                const typingElement = document.getElementById("typing");

                function typeEffect() {

                    if (charIndex < words[wordIndex].length) {

                            typingElement.textContent += words[wordIndex].charAt(charIndex);

                                    charIndex++;

                                            setTimeout(typeEffect, 100);

                                                } else {

                                                        setTimeout(eraseEffect, 1500);
                                                            }
                                                            }

                                                            function eraseEffect() {

                                                                if (charIndex > 0) {

                                                                        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);

                                                                                charIndex--;

                                                                                        setTimeout(eraseEffect, 50);

                                                                                            } else {

                                                                                                    wordIndex = (wordIndex + 1) % words.length;

                                                                                                            setTimeout(typeEffect, 300);
                                                                                                                }
                                                                                                                }

                                                                                                                typeEffect();


                                                                                                                // ==========================
                                                                                                                // Live Clock
                                                                                                                // ==========================

                                                                                                                function updateClock() {

                                                                                                                    const now = new Date();

                                                                                                                        const time = now.toLocaleTimeString();

                                                                                                                            document.getElementById("clock").innerHTML = time;
                                                                                                                            }

                                                                                                                            setInterval(updateClock, 1000);

                                                                                                                            updateClock();


                                                                                                                            // ==========================
                                                                                                                            // Mouse Tilt Effect
                                                                                                                            // ==========================

                                                                                                                            const card = document.querySelector(".glass-card");

                                                                                                                            document.addEventListener("mousemove", (e) => {

                                                                                                                                const x = (window.innerWidth / 2 - e.pageX) / 25;
                                                                                                                                    const y = (window.innerHeight / 2 - e.pageY) / 25;

                                                                                                                                        card.style.transform = `
                                                                                                                                                rotateY(${x}deg)
                                                                                                                                                        rotateX(${-y}deg)
                                                                                                                                                            `;
                                                                                                                                                            });


                                                                                                                                                            // ==========================
                                                                                                                                                            // Button Pulse Effect
                                                                                                                                                            // ==========================

                                                                                                                                                            const pulseBtn = document.getElementById("pulseBtn");

                                                                                                                                                            setInterval(() => {

                                                                                                                                                                pulseBtn.animate(
                                                                                                                                                                        [
                                                                                                                                                                                    { transform: "scale(1)" },
                                                                                                                                                                                                { transform: "scale(1.08)" },
                                                                                                                                                                                                            { transform: "scale(1)" }
                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                        duration: 1000
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                    }, 2000);


                                                                                                                                                                                                                                                    // ==========================
                                                                                                                                                                                                                                                    // Particles Animation
                                                                                                                                                                                                                                                    // ==========================

                                                                                                                                                                                                                                                    const canvas = document.getElementById("particles");

                                                                                                                                                                                                                                                    const ctx = canvas.getContext("2d");

                                                                                                                                                                                                                                                    canvas.width = window.innerWidth;
                                                                                                                                                                                                                                                    canvas.height = window.innerHeight;

                                                                                                                                                                                                                                                    let particles = [];

                                                                                                                                                                                                                                                    class Particle {

                                                                                                                                                                                                                                                        constructor() {

                                                                                                                                                                                                                                                                this.x = Math.random() * canvas.width;
                                                                                                                                                                                                                                                                        this.y = Math.random() * canvas.height;

                                                                                                                                                                                                                                                                                this.radius = Math.random() * 2;

                                                                                                                                                                                                                                                                                        this.dx = (Math.random() - 0.5);
                                                                                                                                                                                                                                                                                                this.dy = (Math.random() - 0.5);
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                        draw() {

                                                                                                                                                                                                                                                                                                                ctx.beginPath();

                                                                                                                                                                                                                                                                                                                        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

                                                                                                                                                                                                                                                                                                                                ctx.fillStyle = "rgba(0,255,255,0.7)";

                                                                                                                                                                                                                                                                                                                                        ctx.fill();
                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                update() {

                                                                                                                                                                                                                                                                                                                                                        this.x += this.dx;
                                                                                                                                                                                                                                                                                                                                                                this.y += this.dy;

                                                                                                                                                                                                                                                                                                                                                                        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;

                                                                                                                                                                                                                                                                                                                                                                                if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

                                                                                                                                                                                                                                                                                                                                                                                        this.draw();
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                            function initParticles() {

                                                                                                                                                                                                                                                                                                                                                                                                particles = [];

                                                                                                                                                                                                                                                                                                                                                                                                    for (let i = 0; i < 120; i++) {

                                                                                                                                                                                                                                                                                                                                                                                                            particles.push(new Particle());
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                function animateParticles() {

                                                                                                                                                                                                                                                                                                                                                                                                                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                                                                                                                                                                                                                                                                                                                                                                                                                        particles.forEach((particle) => {

                                                                                                                                                                                                                                                                                                                                                                                                                                particle.update();
                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                        requestAnimationFrame(animateParticles);
                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                        initParticles();

                                                                                                                                                                                                                                                                                                                                                                                                                                        animateParticles();


                                                                                                                                                                                                                                                                                                                                                                                                                                        // ==========================
                                                                                                                                                                                                                                                                                                                                                                                                                                        // Resize
                                                                                                                                                                                                                                                                                                                                                                                                                                        // ==========================

                                                                                                                                                                                                                                                                                                                                                                                                                                        window.addEventListener("resize", () => {

                                                                                                                                                                                                                                                                                                                                                                                                                                            canvas.width = window.innerWidth;
                                                                                                                                                                                                                                                                                                                                                                                                                                                canvas.height = window.innerHeight;

                                                                                                                                                                                                                                                                                                                                                                                                                                                    initParticles();
                                                                                                                                                                                                                                                                                                                                                                                                                                                    });