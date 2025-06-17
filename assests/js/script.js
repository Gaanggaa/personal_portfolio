document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor effect
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .editable, .skill-card, .project-card, .hobby-card, .social-link, .contact-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });
    
    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    
    // Move to slide function
    const moveToSlide = (track, currentSlide, targetIndex) => {
        track.style.transform = 'translateX(-' + (slideWidth * targetIndex) + 'px)';
        currentSlide.classList.remove('current-slide');
        slides[targetIndex].classList.add('current-slide');
        currentIndex = targetIndex;
    };
    
    // Next slide
    nextButton.addEventListener('click', () => {
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        moveToSlide(carouselTrack, slides[currentIndex], nextIndex);
    });
    
    // Previous slide
    prevButton.addEventListener('click', () => {
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        moveToSlide(carouselTrack, slides[currentIndex], prevIndex);
    });
    
    // Auto-advance carousel
    setInterval(() => {
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        moveToSlide(carouselTrack, slides[currentIndex], nextIndex);
    }, 5000);
    
    // Scroll animations
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition > sectionTop - windowHeight + sectionHeight / 3) {
                section.classList.add('visible');
            }
        });
    };
    
    // Initial check on load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Color palette changer
    const colorPalettes = [
        { primary: '#6C63FF', secondary: '#4D44DB', accent: '#FF6584' },
        { primary: '#FF6584', secondary: '#E04F6A', accent: '#6C63FF' },
        { primary: '#4CAF50', secondary: '#388E3C', accent: '#FFC107' },
        { primary: '#2196F3', secondary: '#1976D2', accent: '#FF9800' },
        { primary: '#9C27B0', secondary: '#7B1FA2', accent: '#FFEB3B' }
    ];
    
    // Create palette switcher
    const paletteSwitcher = document.createElement('div');
    paletteSwitcher.className = 'palette-switcher';
    paletteSwitcher.style.position = 'fixed';
    paletteSwitcher.style.bottom = '20px';
    paletteSwitcher.style.right = '20px';
    paletteSwitcher.style.zIndex = '1000';
    paletteSwitcher.style.display = 'flex';
    paletteSwitcher.style.gap = '10px';
    
    colorPalettes.forEach((palette, index) => {
        const colorButton = document.createElement('button');
        colorButton.style.width = '30px';
        colorButton.style.height = '30px';
        colorButton.style.borderRadius = '50%';
        colorButton.style.border = '2px solid white';
        colorButton.style.cursor = 'pointer';
        colorButton.style.backgroundColor = palette.primary;
        colorButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        colorButton.style.transition = 'transform 0.3s ease';
        
        colorButton.addEventListener('mouseenter', () => {
            colorButton.style.transform = 'scale(1.1)';
        });
        
        colorButton.addEventListener('mouseleave', () => {
            colorButton.style.transform = 'scale(1)';
        });
        
        colorButton.addEventListener('click', () => {
            document.documentElement.style.setProperty('--primary-color', palette.primary);
            document.documentElement.style.setProperty('--secondary-color', palette.secondary);
            document.documentElement.style.setProperty('--accent-color', palette.accent);
        });
        
        paletteSwitcher.appendChild(colorButton);
    });
    
    document.body.appendChild(paletteSwitcher);
    
    // Text animation for the profile section
    const profileText = document.querySelector('.animated-text');
    const text = profileText.textContent;
    profileText.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            profileText.textContent += text[i];
        }, i * 100);
    }
    
    // Save editable content to localStorage
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        const storageKey = `editable_${el.className}_${Array.from(el.parentNode.children).indexOf(el)}`;
        
        // Load saved content
        if (localStorage.getItem(storageKey)) {
            el.innerHTML = localStorage.getItem(storageKey);
        }
        
        // Save on change
        el.addEventListener('input', () => {
            localStorage.setItem(storageKey, el.innerHTML);
        });
    });
});