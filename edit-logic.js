document.addEventListener('DOMContentLoaded', () => {

    // --- Logique pour les animations à l'apparition ---
    const observerOptions = {
        root: null, // observe par rapport au viewport
        rootMargin: '0px',
        threshold: 0.1 // se déclenche quand 10% de l'élément est visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Cesser d'observer une fois l'animation jouée
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- Logique pour le bouton "Retour en Haut" ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Afficher le bouton après 300px de défilement
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});