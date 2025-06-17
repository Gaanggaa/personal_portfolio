<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ganga Gireesh - Portfolio</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=The+Seasons:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <!-- Header Section with Portfolio Text and Avatar -->
        <header class="header">
            <div class="portfolio-text">PORTFOLIO</div>
            <div class="avatar-overlay">
                <img src="assets/images/firstimage.jpg" alt="Avatar" class="avatar-img">
            </div>
        </header>

        <!-- Introduction Section -->
        <section class="intro-section">
            <div class="intro-image">
                <img src="assets/images/secondimage.jpg" alt="Profile Image">
            </div>
            <div class="intro-text">
                <h1>Hello, I'm <span>Ganga Gireesh</span></h1>
                <p class="tagline">Designer & Developer</p>
            </div>
        </section>

        <!-- About Me Section -->
        <section class="about-section">
            <h2>About Me</h2>
            <div class="about-content" contenteditable="true">
                I'm a passionate designer and developer with expertise in creating beautiful, functional digital experiences. 
                My background combines technical skills with creative vision, allowing me to bridge the gap between design 
                and development. I specialize in user-centered design and clean, efficient code.
            </div>
        </section>

        <!-- Skills Section -->
        <section class="skills-section">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <img src="assets/images/figma.png" alt="Figma">
                    <p>Figma</p>
                </div>
                <div class="skill-item">
                    <img src="assets/images/canva.png" alt="Canva">
                    <p>Canva</p>
                </div>
                <div class="skill-item">
                    <img src="assets/images/flutter.png" alt="Flutter">
                    <p>Flutter</p>
                </div>
                <div class="skill-item">
                    <img src="assets/images/python.png" alt="Python">
                    <p>Python</p>
                </div>
                <div class="skill-item">
                    <img src="assets/images/htmlcss.png" alt="HTML/CSS">
                    <p>HTML/CSS</p>
                </div>
            </div>
        </section>

        <!-- Education & Experience Section -->
        <section class="timeline-section">
            <div class="timeline-column">
                <h2>Education</h2>
                <div class="timeline-item" contenteditable="true">
                    <h3>Degree Name</h3>
                    <p class="date">2018 - 2022</p>
                    <p class="description">University Name, Location. Description of your degree and achievements.</p>
                </div>
                <div class="timeline-item" contenteditable="true">
                    <h3>Degree Name</h3>
                    <p class="date">2016 - 2018</p>
                    <p class="description">Institution Name, Location. Description of your studies.</p>
                </div>
            </div>
            <div class="timeline-column">
                <h2>Experience</h2>
                <div class="timeline-item" contenteditable="true">
                    <h3>Job Title</h3>
                    <p class="date">2021 - Present</p>
                    <p class="description">Company Name, Location. Description of your role and responsibilities.</p>
                </div>
                <div class="timeline-item" contenteditable="true">
                    <h3>Job Title</h3>
                    <p class="date">2019 - 2021</p>
                    <p class="description">Company Name, Location. Description of your role and achievements.</p>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="projects-section">
            <h2>Projects</h2>
            <div class="project">
                <div class="project-image">
                    <img src="https://via.placeholder.com/400x300" alt="Project 1">
                </div>
                <div class="project-details" contenteditable="true">
                    <h3>Project Title</h3>
                    <p>Project description goes here. Explain what the project is about, your role, technologies used, and outcomes.</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
            <div class="project">
                <div class="project-image">
                    <img src="https://via.placeholder.com/400x300" alt="Project 2">
                </div>
                <div class="project-details" contenteditable="true">
                    <h3>Project Title</h3>
                    <p>Project description goes here. Explain what the project is about, your role, technologies used, and outcomes.</p>
                    <a href="#" class="project-link">View Project →</a>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section class="gallery-section">
            <h2>Gallery</h2>
            <div class="gallery-container">
                <button class="gallery-arrow left-arrow">&lt;</button>
                <div class="gallery-carousel">
                    <div class="gallery-slide active">
                        <img src="https://via.placeholder.com/600x400" alt="Design 1">
                    </div>
                    <div class="gallery-slide">
                        <img src="https://via.placeholder.com/600x400" alt="Design 2">
                    </div>
                    <div class="gallery-slide">
                        <img src="https://via.placeholder.com/600x400" alt="Design 3">
                    </div>
                </div>
                <button class="gallery-arrow right-arrow">&gt;</button>
            </div>
        </section>

        <!-- Hobbies Section -->
        <section class="hobbies-section">
            <h2>Hobbies</h2>
            <div class="hobbies-grid">
                <div class="hobby-item">
                    <div class="hobby-circle">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <p>Drawing</p>
                </div>
                <div class="hobby-item">
                    <div class="hobby-circle">
                        <i class="fas fa-film"></i>
                    </div>
                    <p>Movies</p>
                </div>
                <div class="hobby-item">
                    <div class="hobby-circle">
                        <i class="fas fa-baseball-ball"></i>
                    </div>
                    <p>Cricket</p>
                </div>
                <div class="hobby-item">
                    <div class="hobby-circle">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <p>Designing</p>
                </div>
            </div>
        </section>

        <!-- Certification Section -->
        <section class="certification-section">
            <h2>Certifications</h2>
            <div class="certification-item" contenteditable="true">
                <h3>Certification Title</h3>
                <p class="date">Issued Month 2023</p>
            </div>
            <div class="certification-item" contenteditable="true">
                <h3>Certification Title</h3>
                <p class="date">Issued Month 2022</p>
            </div>
        </section>

        <!-- Social Media Section -->
        <section class="social-section">
            <h2>Connect With Me</h2>
            <div class="social-links">
                <a href="https://linkedin.com" target="_blank" class="social-link">
                    <img src="assets/images/linkedin.png" alt="LinkedIn">
                    <span contenteditable="true">linkedin.com/yourprofile</span>
                </a>
                <a href="https://github.com" target="_blank" class="social-link">
                    <img src="assets/images/github.png" alt="GitHub">
                    <span contenteditable="true">github.com/yourusername</span>
                </a>
                <a href="https://instagram.com" target="_blank" class="social-link">
                    <img src="assets/images/instagram.png" alt="Instagram">
                    <span contenteditable="true">instagram.com/yourhandle</span>
                </a>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section">
            <h2>Contact</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <img src="assets/images/phone.png" alt="Phone">
                    <span contenteditable="true">+1 (123) 456-7890</span>
                </div>
                <div class="contact-item">
                    <img src="assets/images/email.png" alt="Email">
                    <span contenteditable="true">primary@example.com</span>
                </div>
                <div class="contact-item">
                    <img src="assets/images/email.png" alt="Email">
                    <span contenteditable="true">secondary@example.com</span>
                </div>
            </div>
        </section>
    </div>

    <script src="assets/js/script.js"></script>
</body>
</html>