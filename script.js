const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// Função para tocar a música automaticamente após a interação do menu
window.onload = function() {
    var audio = document.getElementById('background-audio');
    audio.play(); // Força a reprodução do áudio
};