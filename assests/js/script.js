document.addEventListener('DOMContentLoaded', function() {
    // Color palette interactivity
document.addEventListener('mousemove', (e) => {
    const xRatio = e.clientX / window.innerWidth;
    const yRatio = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--primary-hue', 210 + (xRatio * 60 - 30));
    document.documentElement.style.setProperty('--secondary-hue', 30 + (yRatio * 60 - 30));
    document.documentElement.style.setProperty('--accent-hue', 330 + ((xRatio + yRatio) * 60 - 60));
});

// Add color shift on scroll
window.addEventListener('scroll', () => {
    const scrollRatio = window.scrollY / document.body.scrollHeight;
    document.documentElement.style.setProperty('--primary-hue', 210 + scrollRatio * 30);
});
    // In the gallery carousel initialization
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Update active class
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Adjust image positioning
    const activeSlide = slides[currentIndex];
    const img = activeSlide.querySelector('img');
    const slideAspect = 1350/1080;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    
    if (imgAspect > slideAspect) {
        img.style.width = '100%';
        img.style.height = 'auto';
    } else {
        img.style.height = '100%';
        img.style.width = 'auto';
    }
}


    // Auto-rotate carousel
    let carouselInterval = setInterval(() => {
        currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 5000);
    });

    // Particle Animation (from the Codepen example)
    const canvas = document.createElement('canvas');
    canvas.className = 'particles';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 50;
    
    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.weight = Math.random() * 2 + 1;
            this.directionX = (Math.random() * 2) - 1;
            this.color = `hsl(${Math.random() * 90 + 180}, 50%, 50%)`;
        }
        
        update() {
            if (this.y > canvas.height) {
                this.y = 0 - this.size;
                this.x = Math.random() * canvas.width;
            }
            this.weight += 0.01;
            this.y += this.weight;
            this.x += this.directionX;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }
    
    // Initialize particles
    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particlesArray.push(new Particle(x, y));
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contenteditable save functionality (basic)
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(element => {
        element.addEventListener('blur', function() {
            localStorage.setItem(this.id || this.className, this.innerHTML);
        });
        
        // Load saved content if available
        const savedContent = localStorage.getItem(this.id || this.className);
        if (savedContent) {
            this.innerHTML = savedContent;
        }
    });
});