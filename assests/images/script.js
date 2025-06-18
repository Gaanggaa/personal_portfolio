document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('project-link')) return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-left, .animate-right, .project-card, .experience-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Scroll down arrows functionality
    document.querySelectorAll('.scroll-down').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const nextSection = this.parentElement.nextElementSibling;
            
            if (nextSection) {
                window.scrollTo({
                    top: nextSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Show more buttons functionality
    document.querySelectorAll('.show-more').forEach(button => {
        button.addEventListener('click', function() {
            const container = this.previousElementSibling;
            const hiddenItems = container.querySelectorAll('.hidden-item');
            
            hiddenItems.forEach(item => {
                item.style.display = item.style.display === 'block' ? 'none' : 'block';
            });
            
            this.textContent = this.textContent === 'Show More' ? 'Show Less' : 'Show More';
        });
    });
    
    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (carousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 50) {
            header.style.background = 'rgba(248, 247, 244, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'var(--color3)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Skill hover effects
    document.querySelectorAll('.skill-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const fill = this.querySelector('.liquid-fill');
            if (fill) {
                fill.style.transition = 'height 0.5s ease';
            }
        });
    });
    
    // Project card hover effect for touch devices
    if ('ontouchstart' in window) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.toggle('hover-effect');
            });
        });
    }
});