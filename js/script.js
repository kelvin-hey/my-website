document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.scroll-inicio');

    // Evento de clique no botão
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Evento de rolagem da janela
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});