// Initialize the starting slide.
let slideIndex = 1;
showSlide(slideIndex);

// onclick event for Next / Previous controls
function updateSlide(n) {
    showSlide(slideIndex += n);
}

// Toggle the display for the current slide.
function showSlide(currentSlide) {
    // Get an array of slides.
    let slides = document.getElementsByClassName("slide");

    // Wrap to the beginning of slides.
    if (currentSlide > slides.length) slideIndex = 1;

    // Wrap to the end of slides.
    if (currentSlide < 1) slideIndex = 3;

    // Go through all the slides and hide them.
    for (let slide of slides) slide.style.display = "none";

    // Display the current slide.
    slides[slideIndex-1].style.display = "block";
}