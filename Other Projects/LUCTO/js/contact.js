// LUCTO - Lhubiriha Conservation and Tourism Organisation
// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, this would send the form data to a server
      // For this demo, we'll just show a success message
      
      // Show success modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Add animation to social media links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 300 + (index * 150));
  });
  
  // Animate FAQ accordion items
  const animateAccordion = function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, 300 + (index * 150));
    });
  };
  
  // Run accordion animation on page load
  window.addEventListener('load', animateAccordion);
  
  // Handle subject selection to prefill message
  const subjectSelect = document.getElementById('subject');
  const messageTextarea = document.getElementById('message');
  
  if (subjectSelect && messageTextarea) {
    subjectSelect.addEventListener('change', function() {
      const selectedSubject = this.value;
      
      // Only prefill if message is empty
      if (messageTextarea.value.trim() === '') {
        let placeholderText = '';
        
        switch(selectedSubject) {
          case 'Tour Information':
            placeholderText = 'I would like more information about your tours, specifically...';
            break;
          case 'Booking Question':
            placeholderText = 'I have a question about booking a tour with LUCTO...';
            break;
          case 'Conservation Activities':
            placeholderText = 'I am interested in learning more about your conservation activities...';
            break;
          case 'SACCO Inquiry':
            placeholderText = 'I would like information about your SACCO and how I can get involved...';
            break;
          case 'Partnership Opportunity':
            placeholderText = 'I represent [Organization Name] and would like to discuss potential partnership opportunities...';
            break;
        }
        
        messageTextarea.placeholder = placeholderText;
      }
    });
  }
  
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  
  // Set subject based on URL parameter
  if (subjectParam && subjectSelect) {
    const option = Array.from(subjectSelect.options).find(opt => opt.value === subjectParam);
    if (option) {
      subjectSelect.value = subjectParam;
      
      // Trigger change event to update message placeholder
      const event = new Event('change');
      subjectSelect.dispatchEvent(event);
    }
  }
  
  // Add partner logo animation
  const partnerLogos = document.querySelectorAll('.partner-logo');
  
  partnerLogos.forEach((logo, index) => {
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      logo.style.opacity = '1';
      logo.style.transform = 'scale(1)';
    }, 300 + (index * 150));
  });
});