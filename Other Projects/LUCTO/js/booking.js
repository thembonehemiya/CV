// LUCTO - Lhubiriha Conservation and Tourism Organisation
// Booking Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission
  const bookingForm = document.getElementById('bookingForm');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, this would send the form data to a server
      // For this demo, we'll just show a success message
      
      // Show success modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      
      // Reset form
      bookingForm.reset();
    });
  }
  
  // Handle tour type change
  const tourTypeSelect = document.getElementById('tourType');
  const destinationSelect = document.getElementById('destination');
  
  if (tourTypeSelect && destinationSelect) {
    tourTypeSelect.addEventListener('change', function() {
      const selectedType = this.value;
      
      if (selectedType === 'destination') {
        // Enable destination select
        destinationSelect.disabled = false;
        destinationSelect.required = true;
      } else {
        // Disable destination select for package tours
        destinationSelect.disabled = true;
        destinationSelect.required = false;
        destinationSelect.value = '';
      }
    });
  }
  
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const destinationParam = urlParams.get('destination');
  const packageParam = urlParams.get('package');
  
  // Set form values based on URL parameters
  if (destinationParam) {
    if (tourTypeSelect) {
      tourTypeSelect.value = 'destination';
      destinationSelect.disabled = false;
      destinationSelect.required = true;
    }
    
    if (destinationSelect) {
      destinationSelect.value = destinationParam;
    }
  } else if (packageParam) {
    if (tourTypeSelect) {
      tourTypeSelect.value = packageParam;
      destinationSelect.disabled = true;
      destinationSelect.required = false;
    }
  }
  
  // Set minimum date for tour date input
  const tourDateInput = document.getElementById('tourDate');
  if (tourDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    tourDateInput.min = tomorrowFormatted;
  }
  
  // Calculate and display estimated price
  const calculateEstimatedPrice = function() {
    const tourType = tourTypeSelect ? tourTypeSelect.value : '';
    const destination = destinationSelect ? destinationSelect.value : '';
    const groupSize = document.getElementById('groupSize') ? parseInt(document.getElementById('groupSize').value) : 1;
    
    let basePrice = 0;
    
    // Set base price based on tour type or destination
    if (tourType === 'day-explorer') {
      basePrice = 45;
    } else if (tourType === 'overnight-adventure') {
      basePrice = 95;
    } else if (tourType === 'rwenzori-explorer') {
      basePrice = 250;
    } else if (tourType === 'destination') {
      // Set price based on destination
      switch(destination) {
        case 'swing-bridge':
          basePrice = 15;
          break;
        case 'kamirima-cultural-stones':
          basePrice = 20;
          break;
        case 'ibwelyakyona-stone':
          basePrice = 18;
          break;
        case 'kabira-waterfall':
          basePrice = 25;
          break;
        case 'kasalhalha-waterfalls':
          basePrice = 22;
          break;
        case 'kithakakisa-campsite':
          basePrice = 35;
          break;
        case 'kabira-fish-ponds':
          basePrice = 12;
          break;
        case 'mbayirwe-black-smith':
          basePrice = 15;
          break;
        case 'rwamasunga-rock':
          basePrice = 18;
          break;
        case 'tsurunga-cave':
          basePrice = 20;
          break;
        case 'buralya-rock':
          basePrice = 22;
          break;
        case 'park-trail':
          basePrice = 30;
          break;
        default:
          basePrice = 15;
      }
    }
    
    // Calculate total price
    const totalPrice = basePrice * groupSize;
    
    // Display estimated price if price display element exists
    const priceDisplay = document.getElementById('estimatedPrice');
    if (priceDisplay) {
      priceDisplay.textContent = `$${totalPrice}`;
    }
  };
  
  // Add event listeners for price calculation
  if (tourTypeSelect) {
    tourTypeSelect.addEventListener('change', calculateEstimatedPrice);
  }
  
  if (destinationSelect) {
    destinationSelect.addEventListener('change', calculateEstimatedPrice);
  }
  
  const groupSizeInput = document.getElementById('groupSize');
  if (groupSizeInput) {
    groupSizeInput.addEventListener('input', calculateEstimatedPrice);
  }
  
  // Initial price calculation
  calculateEstimatedPrice();
});