// Shared page behaviour: copyright year, navigation, scroll animations
(() => {
    // Copyright year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Mobile navigation toggle
    const siteNav = document.querySelector('.site-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        const isMenuOpen = () => navLinks.classList.contains('open');

        const closeMenu = () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        };

        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('open');
        });

        for (const link of navLinks.querySelectorAll('a')) {
            link.addEventListener('click', closeMenu);
        }

        // Close on Escape and return focus to the toggle
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen()) {
                closeMenu();
                navToggle.focus();
            }
        });

        // Close when tapping or clicking outside the navigation
        document.addEventListener('click', (e) => {
            if (isMenuOpen() && siteNav && !siteNav.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Sticky nav background on scroll
    if (siteNav) {
        window.addEventListener('scroll', () => {
            siteNav.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            }
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        for (const el of revealElements) {
            observer.observe(el);
        }
    } else {
        for (const el of revealElements) {
            el.classList.add('visible');
        }
    }
})();
