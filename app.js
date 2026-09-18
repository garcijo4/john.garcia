document.addEventListener('DOMContentLoaded', () => {
    // Select all sections that have an ID and all nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (menuToggle && mainNav) {
        const navigation = mainNav.closest('nav');
        const mobileLayout = window.matchMedia('(max-width: 1100px)');
        navigation.classList.add('is-enhanced');

        const setMenuOpen = (open) => {
            menuToggle.setAttribute('aria-expanded', String(open));
            menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
            mainNav.classList.toggle('is-open', open);
        };

        menuToggle.addEventListener('click', () => {
            setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
        });
        navLinks.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.site-header')) setMenuOpen(false);
        });
        mobileLayout.addEventListener('change', () => setMenuOpen(false));
    }

    // Track the section at the reading position, including very long sections.
    const header = document.querySelector('.site-header');
    let scrollUpdatePending = false;
    const updateActiveSection = () => {
        const readingLine = (header?.getBoundingClientRect().height || 0) + 80;
        let current = sections[0];
        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= readingLine) current = section;
        });
        navLinks.forEach(link => {
            if (current && link.hash === `#${current.id}`) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
        scrollUpdatePending = false;
    };
    const scheduleSectionUpdate = () => {
        if (!scrollUpdatePending) {
            scrollUpdatePending = true;
            window.requestAnimationFrame(updateActiveSection);
        }
    };
    window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
    window.addEventListener('resize', scheduleSectionUpdate);
    updateActiveSection();

    // Expand all <details> (accordions, abstracts) before printing so the
    // full content appears in the PDF, then restore the original state after.
    window.addEventListener('beforeprint', () => {
        document.querySelectorAll('details:not([open])').forEach(d => {
            d.dataset.wasClosed = 'true';
            d.open = true;
        });
    });

    window.addEventListener('afterprint', () => {
        document.querySelectorAll('details[data-was-closed="true"]').forEach(d => {
            d.open = false;
            delete d.dataset.wasClosed;
        });
    });
});
