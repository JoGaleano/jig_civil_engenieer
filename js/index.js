document.addEventListener('DOMContentLoaded', function() {
    var dynamicText = document.getElementById('dynamicText');
    var textOptions = ['SR BIM SPECIALIST', 'BIM TECHNICAL LEAD', 'BIM PROJECT MANAGER'];
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
