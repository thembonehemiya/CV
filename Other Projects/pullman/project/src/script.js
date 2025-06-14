// Main JavaScript file for Pullman Safaris Website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initializeMobileMenu();
    
    // Service tabs functionality
    initializeServiceTabs();
    
    // FAQ accordion functionality
    initializeFAQAccordion();
    
    // Rating stars functionality
    initializeRatingStars();
    
    // Form validation
    initializeFormValidation();
    
    // Smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Initialize animations on scroll
    initializeScrollAnimations();
    
    // Video testimonial functionality
    initializeVideoTestimonials();
});

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between hamburger and X
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
            }
        });
        
        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
            });
        });
    }
}

// Service Tabs Functionality (for booking page)
function initializeServiceTabs() {
    const serviceTabs = document.querySelectorAll('.service-tab');
    const safariForm = document.getElementById('safari-form');
    const rentalForm = document.getElementById('rental-form');
    
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const service = this.dataset.service;
            
            // Remove active class from all tabs
            serviceTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show/hide forms based on selection
            if (service === 'safari') {
                if (safariForm) safariForm.classList.remove('hidden');
                if (rentalForm) rentalForm.classList.add('hidden');
            } else if (service === 'rental') {
                if (safariForm) safariForm.classList.add('hidden');
                if (rentalForm) rentalForm.classList.remove('hidden');
            }
        });
    });
}

// FAQ Accordion Functionality
function initializeFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close all other open answers
                faqQuestions.forEach(q => {
                    const a = q.nextElementSibling;
                    const i = q.querySelector('i');
                    a.style.display = 'none';
                    i.style.transform = 'rotate(0deg)';
                });
                
                // Open clicked answer
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Rating Stars Functionality
function initializeRatingStars() {
    const ratingStars = document.querySelectorAll('.rating-star');
    let selectedRating = 0;
    
    ratingStars.forEach((star, index) => {
        star.addEventListener('mouseover', function() {
            highlightStars(index + 1);
        });
        
        star.addEventListener('mouseout', function() {
            highlightStars(selectedRating);
        });
        
        star.addEventListener('click', function() {
            selectedRating = index + 1;
            highlightStars(selectedRating);
            
            // Store rating value in a hidden input or variable
            const ratingInput = document.createElement('input');
            ratingInput.type = 'hidden';
            ratingInput.name = 'rating';
            ratingInput.value = selectedRating;
            
            // Remove existing rating input if present
            const existingInput = document.querySelector('input[name="rating"]');
            if (existingInput) {
                existingInput.remove();
            }
            
            // Add new rating input to form
            const form = star.closest('form');
            if (form) {
                form.appendChild(ratingInput);
            }
        });
    });
    
    function highlightStars(rating) {
        ratingStars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
}

// Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const formType = getFormType(form);
            
            // Basic validation
            if (validateForm(form)) {
                // Show success message
                showNotification('Thank you! Your ' + formType + ' has been submitted successfully. We will contact you soon.', 'success');
                
                // Reset form
                form.reset();
                
                // Reset rating stars if present
                const ratingStars = form.querySelectorAll('.rating-star');
                ratingStars.forEach(star => star.classList.remove('active'));
                
                // In a real application, you would send the data to a server
                console.log('Form submitted:', Object.fromEntries(formData));
            } else {
                showNotification('Please fill in all required fields correctly.', 'error');
            }
        });
    });
}

function getFormType(form) {
    if (form.closest('#safari-form')) return 'safari booking request';
    if (form.closest('#rental-form')) return 'car rental request';
    if (form.querySelector('textarea[placeholder*="review"]')) return 'review';
    return 'message';
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = '#e5e7eb';
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.style.borderColor = '#ef4444';
                isValid = false;
            }
        }
        
        // Phone validation (basic)
        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(field.value)) {
                field.style.borderColor = '#ef4444';
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform translate-x-full`;
    
    // Set notification style based on type
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
        notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
        notification.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
        notification.innerHTML = `<i class="fas fa-info-circle mr-2"></i>${message}`;
    }
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times ml-2"></i>';
    closeBtn.className = 'float-right';
    closeBtn.onclick = () => hideNotification(notification);
    notification.appendChild(closeBtn);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
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
    
    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.service-card, .destination-card, .vehicle-card, .team-card, .testimonial-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Video Testimonials
function initializeVideoTestimonials() {
    const videoTestimonials = document.querySelectorAll('.video-testimonial');
    
    videoTestimonials.forEach(video => {
        video.addEventListener('click', function() {
            // In a real application, this would open a video modal or player
            showNotification('Video testimonials coming soon! Contact us to see more customer stories.', 'info');
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize date inputs with minimum date (today)
function initializeDateInputs() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });
}

// Call date initialization
initializeDateInputs();

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (mobileMenu && mobileMenuBtn) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars text-xl';
        }
    }
}, 250));

// Handle scroll events
window.addEventListener('scroll', debounce(() => {
    const header = document.querySelector('nav');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(31, 78, 60, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'rgb(31, 78, 60)';
        header.style.backdropFilter = 'none';
    }
}, 10));

// Console welcome message
console.log('%c🦁 Welcome to Pullman Safaris! 🦁', 'color: #059669; font-size: 16px; font-weight: bold;');
console.log('%cExplore Africa with Confidence', 'color: #d97706; font-size: 14px;');
console.log('%cFor technical support, contact: info@pullmansafaris.com', 'color: #6b7280; font-size: 12px;');