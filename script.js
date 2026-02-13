function initHearts() {
    const container = document.getElementById('heart-container');
    const heartCount = 30;
    const emojis = ['❤️', '💖', '💗', '💕', '✨'];

    for (let i = 0; i < heartCount; i++) {
        createHeart(container, emojis);
    }
}

function createHeart(container, emojis) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    const startX = Math.random() * 100;
    const size = Math.random() * (25 - 10) + 10;
    const duration = Math.random() * (8 - 4) + 4;
    const delay = Math.random() * 5;

    heart.style.left = `${startX}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;

    container.appendChild(heart);

    heart.addEventListener('animationiteration', () => {
        heart.style.left = `${Math.random() * 100}%`;
    });
}

function updateProgressBar(pageNumber) {
    const totalPages = 5;
    const progress = (pageNumber / totalPages) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = `${progress}%`;
}

function initSparkles() {
    const container = document.getElementById('sparkles-container');
    if (!container) return;

    setInterval(() => {
        createSparkle(container);
    }, 150);
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const driftX = (Math.random() - 0.5) * 100;
    const driftY = (Math.random() - 0.5) * 100;

    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${startX}px`;
    sparkle.style.top = `${startY}px`;
    sparkle.style.setProperty('--drift-x', `${driftX}px`);
    sparkle.style.setProperty('--drift-y', `${driftY}px`);

    const duration = Math.random() * 3 + 2;
    sparkle.style.animationDuration = `${duration}s`;

    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, duration * 1000);
}

function createHeartExplosion() {
    const container = document.body;
    const heartCount = 40;
    const emojis = ['❤️', '💖', '💗', '💕', '🥰'];

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.position = 'fixed';
        heart.style.zIndex = '2000';
        heart.style.pointerEvents = 'none';

        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;

        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;

        container.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 15 + 10;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let posX = startX;
        let posY = startY;
        let opacity = 1;

        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.015;

            heart.style.left = `${posX}px`;
            heart.style.top = `${posY}px`;
            heart.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };

        requestAnimationFrame(animate);
    }
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
}

function initCountdown() {
    const targetDate = new Date('February 14, 2026 00:00:00').getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            const container = document.getElementById('countdown-container');
            if (container) container.innerHTML = "<p class='countdown-label'>¡FELIZ SAN VALENTÍN! ❤️</p>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEl = document.getElementById('minutes');
        const secsEl = document.getElementById('seconds');

        if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
        if (minsEl) minsEl.innerText = minutes.toString().padStart(2, '0');
        if (secsEl) secsEl.innerText = seconds.toString().padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);
}

function initRosePetals() {
    const container = document.body;
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = '🌹';

        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 5;
        const driftX = (Math.random() - 0.5) * 200;
        const rotation = Math.random() * 360 + 360;

        petal.style.left = `${startX}px`;
        petal.style.setProperty('--drift-x', `${driftX}px`);
        petal.style.setProperty('--rotation', `${rotation}deg`);
        petal.style.animationDuration = `${duration}s`;

        container.appendChild(petal);
        setTimeout(() => petal.remove(), duration * 1000);
    }, 1200);
}

function initMagicCursor() {
    document.addEventListener('mousemove', (e) => {
        const dust = document.createElement('div');
        dust.className = 'magic-dust';
        dust.style.left = `${e.clientX}px`;
        dust.style.top = `${e.clientY}px`;
        document.body.appendChild(dust);
        setTimeout(() => dust.remove(), 800);
    });
}

function typewriterEffect(element, text, speed = 40) {
    element.innerHTML = '';
    element.classList.add('typewriter-cursor');
    let i = 0;

    return new Promise(resolve => {
        function type() {
            if (i < text.length) {
                if (text.charAt(i) === '<') {
                    const closingBracket = text.indexOf('>', i);
                    if (closingBracket !== -1) {
                        element.innerHTML += text.substring(i, closingBracket + 1);
                        i = closingBracket + 1;
                    } else {
                        element.innerHTML += text.charAt(i);
                        i++;
                    }
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(type, speed);
            } else {
                element.classList.remove('typewriter-cursor');
                resolve();
            }
        }
        type();
    });
}

async function nextPage(pageNumber) {
    const currentPage = document.querySelector('.page.active');
    const nextPageEl = document.getElementById(`page-${pageNumber}`);

    if (currentPage) {
        currentPage.classList.remove('active');
        setTimeout(async () => {
            currentPage.style.display = 'none';
            if (nextPageEl) {
                nextPageEl.style.display = 'block';
                nextPageEl.offsetHeight;
                nextPageEl.classList.add('active');

                // Aplicar efecto typewriter a los títulos y párrafos de las páginas de historia
                if (pageNumber > 1) {
                    const elements = nextPageEl.querySelectorAll('.story-text h2, .story-text p');
                    for (const el of elements) {
                        const originalContent = el.getAttribute('data-text') || el.innerHTML;
                        if (!el.getAttribute('data-text')) el.setAttribute('data-text', originalContent);
                        await typewriterEffect(el, originalContent);
                    }
                }
            }
        }, 600);
    }
    updateProgressBar(pageNumber);
}

document.addEventListener('DOMContentLoaded', () => {
    initHearts();
    initSparkles();
    initScrollReveal();
    initCountdown();
    initRosePetals();
    initMagicCursor();
    initInkSignature();
    updateProgressBar(1);

    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const errorMsg = document.getElementById('error-msg');
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicHint = document.getElementById('music-hint');

    if (musicToggle && bgMusic) {
        bgMusic.volume = 0.2;
        musicToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(_ => {
                    musicToggle.innerHTML = "🔊 Música";
                    if (musicHint) musicHint.style.opacity = '0';
                });
            } else {
                bgMusic.pause();
                musicToggle.innerHTML = "🔇 Música";
            }
        });
    }

    if (btnYes) {
        btnYes.addEventListener('click', () => {
            createHeartExplosion();
            setTimeout(() => nextPage(2), 1000);
        });
    }

    if (btnNo) {
        btnNo.addEventListener('click', () => {
            if (errorMsg) {
                errorMsg.textContent = "Error 404: tu corazón dijo que sí 💖😏";
                errorMsg.classList.remove('hidden');
            }
            const x = Math.random() * 40 - 20;
            const y = Math.random() * 40 - 20;
            btnNo.style.transform = `translate(${x}px, ${y}px)`;
            if (btnYes) {
                const currentScale = btnYes.style.transform ? parseFloat(btnYes.style.transform.replace('scale(', '').replace(')', '')) : 1;
                btnYes.style.transform = `scale(${currentScale + 0.1})`;
            }
        });
    }
});

function closeApp() {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.close();
        document.body.innerHTML = `
            <div style="height: 100vh; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Playfair Display', serif; text-align: center; padding: 20px;">
                <h1>Gracias por ser mi San Valentín ❤️<br><br><span style="font-size: 0.8rem; opacity: 0.6;">( Ya puedes cerrar esta pestaña )</span></h1>
            </div>
        `;
        document.body.style.opacity = "1";
    }, 1000);
}

function initInkSignature() {
    const signature = document.getElementById('signature-ink');
    if (!signature) return;

    const text = "BENNI BU";
    signature.innerHTML = text.split('').map(char =>
        `<span>${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const spans = signature.querySelectorAll('span');

    // Iniciar animación con un pequeño delay
    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('written');
                // Efecto de flujo de tinta
                span.style.animation = `inkFlow 0.5s ease forwards`;
            }, index * 150); // Velocidad de escritura natural
        });
    }, 1500);
}
