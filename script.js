document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const nav = document.querySelector('nav');
            const offset = nav ? nav.offsetHeight : 0;

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Contact Form Submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        from_name: document.getElementById('name').value.trim(),
        from_email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            console.log('Email sent!', response.status, response.text);
            contactForm.reset();
            showToast();
        }, function(error) {
            console.error('Email failed:', error);
        });
});


    // Fade-in on scroll using Intersection Observer
    const faders = document.querySelectorAll('.glass-card, .home-content');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    
});
