/* ===================== */
/* Helper Functions */
const $ = (q, ctx = document) => ctx.querySelector(q);
const $$ = (q, ctx = document) => [...ctx.querySelectorAll(q)];

/* ===================== */
/* Theme Toggle (Dark / Light Mode) */
const themeToggle = $('#theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Optional: Visual feedback in console (safe for lab)
    console.log(
        body.classList.contains('light-mode')
            ? 'Light mode enabled'
            : 'Dark mode enabled'
    );
});

/* ===================== */
/* Mobile Navigation Toggle */
const menuBtn = $('#menuBtn');
const nav = $('#nav');

menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
});

/* Close menu when a link is clicked (UX improvement) */
$$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
    });
});

/* ===================== */
/* Footer Year */
$('#year').textContent = new Date().getFullYear();

/* ===================== */
/* Project Filter Logic */
const filterButtons = $$('.filter-btn');
const projects = $$('.project');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projects.forEach(project => {
            const type = project.dataset.type;

            if (filter === 'all' || filter === type) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

/* ===================== */
/* Scroll Reveal Animation */
const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

/* Observe all cards and sections */
$$('.box, .project').forEach(el => {
    el.classList.add('hidden');
    revealObserver.observe(el);
});

/* ===================== */
/* Optional Enhancement: Keyboard Accessibility */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
    }
});
