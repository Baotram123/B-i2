
let activeImageIndex = 0; 
const images = document.querySelectorAll('.image'); 


function enlargeActiveImage() {
  images[activeImageIndex].classList.add('active');
  setTimeout(shrinkActiveImage, 1000); 
}


function shrinkActiveImage() {
  images[activeImageIndex].classList.remove('active');
  setTimeout(nextImage, 1000); 
}


function nextImage() {
  activeImageIndex = (activeImageIndex + 1) % images.length; 
  enlargeActiveImage(); 
}


enlargeActiveImage(); 