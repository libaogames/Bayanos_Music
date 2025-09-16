let currentAudio = null;
let currentCard = null;

document.querySelectorAll('.topoDoSite .card-body, .fundoDoSite .card-custom').forEach(card => {
    card.addEventListener('click', () => {
        const musicPath = card.dataset.music;
        if (!musicPath) return;

        // Se clicar no mesmo card, pausa
        if (currentCard === card) {
            currentAudio.pause();
            currentCard.style.filter = 'brightness(1)';
            currentCard.style.transform = 'scale(1)';
            currentAudio = null;
            currentCard = null;
            return;
        }

        // Para música anterior
        if (currentAudio) {
            currentAudio.pause();
            currentCard.style.filter = 'brightness(1)';
            currentCard.style.transform = 'scale(1)';
        }

        // Toca a nova música
        currentAudio = new Audio(musicPath);
        currentAudio.play();
        currentCard = card;

        // Aplica efeitos visuais
        card.style.transform = 'scale(1.05)';
        card.style.filter = 'brightness(0.7)';

        // Quando a música acabar, remove efeito
        currentAudio.onended = () => {
            card.style.transform = 'scale(1)';
            card.style.filter = 'brightness(1)';
            currentAudio = null;
            currentCard = null;
        };
    });
});
