// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .partner-card, .stat-item');
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handling (optional enhancement)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
}

// Mobile menu toggle (if you want to add a hamburger menu)
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav-container');
        const menu = document.querySelector('.nav-menu');
        
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                color: var(--text-primary);
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
            `;
            
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
            
            nav.appendChild(toggle);
            
            // Style the mobile menu
            menu.style.cssText = `
                position: fixed;
                top: 70px;
                right: -100%;
                background: var(--bg-secondary);
                flex-direction: column;
                padding: 40px;
                border-left: 1px solid var(--border-color);
                transition: right 0.3s ease;
                height: 100vh;
            `;
            
            menu.classList.add('mobile-menu');
        }
    }
}

// Call on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);
