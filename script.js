// Terminal Portfolio - Interactive Elements

(function() {
    'use strict';

    const pages = Array.from(document.querySelectorAll('.page'));
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const defaultRoute = '#home';

    function setActiveRoute(hash) {
        const targetHash = hash && hash !== '#' ? hash : defaultRoute;
        const targetId = targetHash.replace('#', '');
        const page = document.getElementById(targetId);

        pages.forEach(section => section.classList.remove('is-active'));
        navLinks.forEach(link => link.classList.remove('is-active'));

        if (page) {
            page.classList.add('is-active');
            page.scrollTop = 0;
        }

        const activeLink = navLinks.find(link => link.getAttribute('href') === `#${targetId}`);
        if (activeLink) {
            activeLink.classList.add('is-active');
        }
    }

    window.addEventListener('hashchange', () => {
        setActiveRoute(window.location.hash);
    });

    setActiveRoute(window.location.hash);

    // Console easter egg
    console.log('%c> Welcome to my terminal portfolio!', 'color: #00ff88; font-family: monospace; font-size: 14px;');
    console.log('%c> Built with vanilla HTML, CSS, and JS', 'color: #888; font-family: monospace;');

})();
