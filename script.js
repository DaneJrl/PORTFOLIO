// Helper functions
const $ = (q, ctx=document) => ctx.querySelector(q);
const $$ = (q, ctx=document) => [...ctx.querySelectorAll(q)];

// --- LAB TASK 4: Theme Toggle Functionality ---
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // 1. Toggle the CSS class
    body.classList.toggle('light-mode');
    
    // 2. (Optional) Check current state for console debugging
    if (body.classList.contains('light-mode')) {
        console.log("Switched to Light Mode");
    } else {
        console.log("Switched to Dark Mode");
    }
});

// --- Mobile Menu ---
const menuBtn = $('#menuBtn');
const nav = $('#nav');

menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
});

// --- Footer Year ---
$('#year').textContent = new Date().getFullYear();

// --- Project Filter Logic ---
const filters = $$('.filter-btn');
const projects = $$('.project');

filters.forEach(btn => {
    btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.dataset.filter;
        
        projects.forEach(project => {
            if (filterValue === 'all' || project.dataset.type === filterValue) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });
    });
});