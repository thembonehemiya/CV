// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
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
    
    // Initialize any sliders or carousels
    // This would be expanded based on specific library used (e.g., Swiper, Glide, etc.)
    
    // Form validation for booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            // If validation passes, you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
            this.reset();
        });
    }
    
    // Image gallery functionality for safari/car pages
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');
    if (galleryThumbs.length > 0) {
        const mainImage = document.getElementById('main-image');
        
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const newSrc = this.getAttribute('data-full');
                mainImage.src = newSrc;
                
                // Update active thumbnail
                document.querySelector('.gallery-thumb.active').classList.remove('active');
                this.classList.add('active');
            });
        });
    }
    
    // Date picker initialization for booking form
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length > 0) {
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }
});