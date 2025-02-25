document.addEventListener('DOMContentLoaded', function() {
    var dynamicText = document.getElementById('dynamicText');
    var textOptions = ['CIVIL ENGINEER', 'BIM TECHNICAL LEAD', 'BIM PROJECT MANAGER'];
    var currentIndex = 0;
    var typingSpeed = 150; // velocidad en milisegundos por letra

    function typeWriter(text, i) {
        if (i < text.length) {
            dynamicText.textContent = text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, i + 1), typingSpeed);
        } else {
            setTimeout(() => updateText(), 2000); // espera antes de comenzar a escribir el siguiente texto
        }
    }

    function updateText() {
        currentIndex = (currentIndex + 1) % textOptions.length;
        typeWriter(textOptions[currentIndex], 0);
    }

    typeWriter(textOptions[currentIndex], 0);
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2, // Hace el movimiento más fluido
            ease: "power2.out"
        });
    });
});

const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(".custom-cursor", { scale: 2, duration: 0.2 });
    });

    link.addEventListener("mouseleave", () => {
        gsap.to(".custom-cursor", { scale: 1, duration: 0.2 });
    });
});