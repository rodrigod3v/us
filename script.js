let slideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    slideIndex += direction;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');

    // Tente reproduzir o áudio manualmente em resposta a uma interação do usuário
    document.body.addEventListener('click', function() {
        if (music.paused) {
            music.play().catch(function(error) {
                console.log('Erro ao tentar reproduzir o áudio:', error);
            });
        }
    });

    music.addEventListener('error', function() {
        console.log('Erro ao carregar o arquivo de áudio.');
    });
});