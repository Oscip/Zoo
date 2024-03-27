document.addEventListener('DOMContentLoaded', function () {
    const recently = document.getElementById('recently');

    // Trigger animations on scroll
    window.addEventListener('scroll', () => {
        if (isOneQuarterInViewport(recently)) {
            recently.classList.add('show');
        }
    });

    // Check if element is 1/4 in the viewport
    function isOneQuarterInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.bottom >= (windowHeight / 4) && rect.top <= windowHeight;
    }
});
