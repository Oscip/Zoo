document.addEventListener('DOMContentLoaded', function () {
    const animalsLine1 = document.getElementById('animalsline1');
    const animalsLine2 = document.getElementById('animalsline2');
    const animalsLine3 = document.getElementById('animalsline3');

    // Trigger animations on page load
    animalsLine1.classList.add('show');

    // Trigger animations on scroll
    window.addEventListener('scroll', () => {
        if (isOneQuarterInViewport(animalsLine2)) {
            animalsLine2.classList.add('show');
        }
        if (isOneQuarterInViewport(animalsLine3)) {
            animalsLine3.classList.add('show');
        }
    });

    // Check if element is 1/4 in the viewport
    function isOneQuarterInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.bottom >= (windowHeight / 3) && rect.top <= windowHeight;
    }
});
