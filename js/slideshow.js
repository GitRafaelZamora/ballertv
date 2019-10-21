let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(`showSlides(${n})`);
    // Get an array of slides.
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        // Then wrap to the beginning of slides.
        slideIndex = 1
    }
    if (n < 1) {
        console.log("N < 1");
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}