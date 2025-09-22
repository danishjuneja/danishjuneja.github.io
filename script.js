// Social buttons reveal functionality
const socialButtons = document.querySelectorAll('.social-btn');
const socialReveals = document.querySelectorAll('.social-reveal');

socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetReveal = button.getAttribute('data-reveal');
        const revealElement = document.getElementById(`${targetReveal}-reveal`);
        
        // Remove active class from all buttons and reveals
        socialButtons.forEach(btn => btn.classList.remove('active'));
        socialReveals.forEach(reveal => reveal.classList.remove('active'));
        
        // Add active class to clicked button and corresponding reveal
        button.classList.add('active');
        revealElement.classList.add('active');
        
        // Add a subtle pulse effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    });
});

// Smooth scroll-triggered animations
const observeElements = () => {
    const workItems = document.querySelectorAll('.work-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    workItems.forEach(item => observer.observe(item));
};

// Organic mouse interactions
document.addEventListener('mousemove', (e) => {
    const floats = document.querySelectorAll('.float-item');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    floats.forEach((float, index) => {
        const speed = (index + 1) * 0.3;
        const offsetX = (x - 0.5) * speed * 30;
        const offsetY = (y - 0.5) * speed * 30;
        
        float.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Enhanced hover effects for work items
const workContents = document.querySelectorAll('.work-content');
workContents.forEach(content => {
    content.addEventListener('mouseenter', () => {
        content.style.filter = 'brightness(1.05)';
        
        // Add ripple effect on hover
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        content.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
    
    content.addEventListener('mouseleave', () => {
        content.style.filter = 'brightness(1)';
    });
});

// Add parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.float-item');
    
    parallax.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform += ` translateY(${scrolled * speed}px)`;
    });
});

// Add typing effect to hero text
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Enhanced skill tag interactions
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.boxShadow = '0 8px 25px rgba(255,107,107,0.4)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.boxShadow = '0 5px 15px rgba(255,107,107,0.2)';
    });
});

// Add smooth reveal animation for contact section
const contactArea = document.querySelector('.contact-area');
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'workSlide 1s ease-out forwards';
        }
    });
}, { threshold: 0.3 });

if (contactArea) {
    contactObserver.observe(contactArea);
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .work-content {
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Initialize all animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    
    // Add entrance animation delay to hero elements
    const heroElements = document.querySelectorAll('.hero h1, .hero .subtitle, .hero .tagline');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${0.3 + (index * 0.3)}s`;
    });
});

// Add email button interaction
const emailButton = document.querySelector('.email-button');
if (emailButton) {
    emailButton.addEventListener('click', (e) => {
        // Create a subtle flash effect
        emailButton.style.background = 'rgba(255, 255, 255, 0.5)';
        setTimeout(() => {
            emailButton.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 150);
    });
}
