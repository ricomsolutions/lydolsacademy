document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close');
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    };

    hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        closeBtn.classList.add('active');
        overlay.classList.add('active');
        disableScroll();
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        closeBtn.classList.remove('active');
        overlay.classList.remove('active');
        enableScroll();
    });

    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        closeBtn.classList.remove('active');
        overlay.classList.remove('active');
        enableScroll();
    });
});

// Button Navigation
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get the Modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".column img");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Global variable to keep track of the current image index
var currentImageIndex = 0;

/// Global variable to keep track of the current image index
var currentImageIndex = 0;

// Function to display previous image
function prevImage() {
    // Implementation to display previous image
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    modalImg.src = images[currentImageIndex].src;
}

// Function to display next image
function nextImage() {
    // Implementation to display next image
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    modalImg.src = images[currentImageIndex].src;
  }
