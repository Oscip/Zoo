document.addEventListener('DOMContentLoaded', function () {
    const historySection = document.getElementById('history');
    const descriptionSection = document.getElementById('description');

    // Trigger animations on page load
    descriptionSection.classList.add('show');


    // Trigger animations on scroll
    window.addEventListener('scroll', () => {
        if (isElementInViewport(historySection)) {
            historySection.classList.add('show');
        }
    });

    // Check if element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

