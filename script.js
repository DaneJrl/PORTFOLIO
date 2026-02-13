const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveNote = document.getElementById("loveNote");
const buttonsDiv = document.querySelector(".buttons");
const noText = document.getElementById("noText");
const music = document.getElementById("bgMusic");

let size = 20;

/* YES BUTTON */
yesBtn.onclick = function () {
    buttonsDiv.classList.add("hidden");
    noText.classList.add("hidden");
    loveNote.classList.remove("hidden");
    music.play();
    startConfetti();
};

/* NO BUTTON */
noBtn.onclick = function () {
    size += 8;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (size * 0.8) + "px " + (size * 1.5) + "px";

    noText.classList.remove("hidden");
    noText.innerText = "Please? 🥺💔";

    moveNoButton();
};

/* MAKE NO BUTTON RUN */
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* CONFETTI EFFECT */
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 6 + 4,
            dx: Math.random() - 0.5,
            dy: Math.random() + 2
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.y > canvas.height) {
                p.y = 0;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}
