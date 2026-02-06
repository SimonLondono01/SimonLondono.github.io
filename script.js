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

    const emailButton = document.querySelector('.contact-email');

    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text);
        }

        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        return Promise.resolve();
    }

    if (emailButton) {
        emailButton.addEventListener('click', (event) => {
            const email = emailButton.getAttribute('data-email');
            const copyTarget = event.target.closest('.contact-email-copy');

            if (!email) {
                return;
            }

            if (!emailButton.classList.contains('is-open')) {
                emailButton.classList.add('is-open');
                emailButton.setAttribute('aria-expanded', 'true');
                emailButton.querySelector('.contact-email-value')?.setAttribute('aria-hidden', 'false');
                emailButton.querySelector('.contact-email-copy')?.setAttribute('aria-hidden', 'false');
                return;
            }

            if (copyTarget) {
                copyToClipboard(email).then(() => {
                    emailButton.classList.add('is-copied');
                    const copyLabel = emailButton.querySelector('.contact-email-copy');
                    if (copyLabel) {
                        copyLabel.textContent = 'Copied';
                    }

                    window.setTimeout(() => {
                        emailButton.classList.remove('is-copied', 'is-open');
                        emailButton.setAttribute('aria-expanded', 'false');
                        emailButton.querySelector('.contact-email-value')?.setAttribute('aria-hidden', 'true');
                        emailButton.querySelector('.contact-email-copy')?.setAttribute('aria-hidden', 'true');
                        if (copyLabel) {
                            copyLabel.textContent = 'Copy';
                        }
                    }, 1500);
                });
            }
        });
    }

    // Console easter egg
    console.log('%c> Welcome to my terminal portfolio!', 'color: #00ff88; font-family: monospace; font-size: 14px;');
    console.log('%c> Built with vanilla HTML, CSS, and JS', 'color: #888; font-family: monospace;');

})();
