document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    new Glide('.glide', {
        type: 'carousel',
        perView: 2,
        gap: 20,
        breakpoints: {
            768: {
                perView: 1
            }
        }
    }).mount();

    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
