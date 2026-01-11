// Terminal Portfolio - Interactive Elements

(function() {
    'use strict';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Console easter egg
    console.log('%c> Welcome to my terminal portfolio!', 'color: #00ff88; font-family: monospace; font-size: 14px;');
    console.log('%c> Built with vanilla HTML, CSS, and JS', 'color: #888; font-family: monospace;');

})();
