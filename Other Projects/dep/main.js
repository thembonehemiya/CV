// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.add('hidden');
    });
    
    testimonials[index].classList.remove('hidden');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

// Initialize testimonial slider if on testimonials page
if (testimonials.length > 0) {
    showTestimonial(0);
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
    
    // Add event listeners for next/prev buttons
    document.getElementById('testimonial-next').addEventListener('click', nextTestimonial);
    document.getElementById('testimonial-prev').addEventListener('click', prevTestimonial);
}

// Form Validation
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        if (!name || !email || !phone) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // If validation passes, you would typically submit the form to a server
        // For this example, we'll just show a success message
        alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
        this.reset();
    });
}

// Safari Package Filter
const safariFilter = document.getElementById('safari-filter');
if (safariFilter) {
    safariFilter.addEventListener('change', function() {
        const filterValue = this.value.toLowerCase();
        const safariItems = document.querySelectorAll('.safari-item');
        
        safariItems.forEach(item => {
            const duration = item.getAttribute('data-duration').toLowerCase();
            const price = parseFloat(item.getAttribute('data-price'));
            
            if (filterValue === 'all' || 
                (filterValue === 'short' && duration.includes('day') && !duration.includes('week')) ||
                (filterValue === 'long' && (duration.includes('week') || duration.includes('+'))) ||
                (filterValue === 'budget' && price < 1000) ||
                (filterValue === 'luxury' && price >= 1000)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}

// Image Gallery Modal
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

if (galleryImages.length > 0 && modal) {
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}