window.addEventListener("load", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    yesBtn.addEventListener("click", abrirContenido);
    noBtn.addEventListener("click", () =>
        alert("💔 Cuando quieras ser mi Valentín… aquí estaré.")
    );
});

function abrirContenido() {
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";

        const main = document.getElementById("main-content");
        main.style.display = "block";

        setTimeout(() => { main.style.transform = "scale(1)"; }, 50);

        iniciarPagina();
    }, 500);
}

function iniciarPagina() {

    /* CONTADOR */
    function calcularTiempo() {
        const inicio = new Date("2023-09-12T00:00:00-06:00"); // Ajusta la fecha
        const ahora = new Date();
        const diff = ahora - inicio;

        const dias = Math.floor(diff / 86400000);
        const horas = Math.floor((diff / 3600000) % 24);
        const minutos = Math.floor((diff / 60000) % 60);
        const segundos = Math.floor((diff / 1000) % 60);

        document.getElementById("timeTogether").textContent =
            `${dias} días • ${horas} h • ${minutos} m • ${segundos} s`;
    }

    setInterval(calcularTiempo, 1000);
    calcularTiempo();

    /* PARTICULAS */
    const contenedor = document.getElementById("particles");
    for (let i = 0; i < 70; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 10 + 5;

        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.animationDuration = (Math.random() * 5 + 4) + "s";

        contenedor.appendChild(p);
    }

    /* MÚSICA */
    const audio = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");

    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => { btn.textContent = "⏸"; })
            .catch(err => console.log("Error al reproducir:", err));
        } else {
            audio.pause();
            btn.textContent = "❤️";
        }
    });

    /* FLIP 3D */
    document.querySelectorAll(".photo-card").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
}
