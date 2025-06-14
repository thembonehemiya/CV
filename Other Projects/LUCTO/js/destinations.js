// LUCTO - Lhubiriha Conservation and Tourism Organisation
// Destinations Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Destination filtering
  const filterButtons = document.querySelectorAll('.btn-filter');
  const destinationItems = document.querySelectorAll('.destination-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Show/hide destinations based on filter
      destinationItems.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'block';
        } else {
          if (item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
  
  // Check URL parameters to see if we need to auto-filter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  if (categoryParam) {
    const matchingButton = document.querySelector(`.btn-filter[data-filter="${categoryParam}"]`);
    if (matchingButton) {
      matchingButton.click();
    }
  }
  
  // Image Gallery Lightbox (using Bootstrap modal)
  const destinationImages = document.querySelectorAll('.destination-image img');
  
  destinationImages.forEach(image => {
    image.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create modal elements if they don't exist
      if (!document.getElementById('imageModal')) {
        const modalHTML = `
          <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="imageModalLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                  <img src="" id="modalImage" class="img-fluid rounded" alt="">
                </div>
              </div>
            </div>
          </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
      }
      
      // Set modal image and title
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      const modalTitle = document.getElementById('imageModalLabel');
      
      const destinationTitle = this.closest('.destination-card').querySelector('h3').textContent;
      
      modalImage.src = this.src;
      modalTitle.textContent = destinationTitle;
      
      // Show modal
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    });
  });
  
  // Highlight destinations mentioned in URL hash
  const highlightDestination = function() {
    const hash = window.location.hash;
    if (hash) {
      const destinationElement = document.getElementById(hash.substring(1));
      if (destinationElement) {
        // Scroll to the element
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = destinationElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Add highlight effect
          destinationElement.classList.add('highlight-destination');
          setTimeout(() => {
            destinationElement.classList.remove('highlight-destination');
          }, 2000);
        }, 500);
      }
    }
  };
  
  // Add CSS for highlight effect
  const style = document.createElement('style');
  style.textContent = `
    .highlight-destination {
      animation: highlightDestination 2s;
    }
    
    @keyframes highlightDestination {
      0% { box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(46, 125, 50, 0); }
      100% { box-shadow: 0 0 0 0 rgba(46, 125, 50, 0); }
    }
  `;
  document.head.appendChild(style);
  
  // Run highlight on page load and hash change
  window.addEventListener('load', highlightDestination);
  window.addEventListener('hashchange', highlightDestination);
});