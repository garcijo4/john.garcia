document.addEventListener('DOMContentLoaded', () => {
    // Select all sections that have an ID and all nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-open');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('is-open');
            });
        });
    }

    // Options for the Intersection Observer
    // The margin offsets the sticky header height so it triggers at the right visual spot
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the id of the intersecting section
                const targetId = entry.target.getAttribute('id');

                // Remove active state from all links
                navLinks.forEach(link => {
                    link.removeAttribute('aria-current');
                });

                // Add active state to the corresponding nav link
                const activeLink = document.querySelector(`.main-nav a[href="#${targetId}"]`);
                if (activeLink) {
                    activeLink.setAttribute('aria-current', 'page');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});
