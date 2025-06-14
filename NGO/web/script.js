document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // FAQ Toggles
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      // Toggle active class
      this.classList.toggle('active');
      
      // Toggle content visibility
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
  
  // Donation Amount Buttons
  const donationButtons = document.querySelectorAll('.donation-amount-btn');
  const customAmountDiv = document.querySelector('.custom-amount');
  
  if (donationButtons.length > 0) {
    donationButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        donationButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show/hide custom amount input
        if (this.textContent.trim() === 'Other' && customAmountDiv) {
          customAmountDiv.classList.remove('hidden');
        } else if (customAmountDiv) {
          customAmountDiv.classList.add('hidden');
        }
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});