// JavaScript function to change slides
function changeSlide(n) {
  const myslides = document.getElementsByClassName("slides");

  // Hide all slides
  for (let i = 0; i < myslides.length; i++) {
    myslides[i].style.display = "none";
  }

  // Calculate the next slide index
  const currentIndex = Array.from(myslides).findIndex((slide) => {
    return window.getComputedStyle(slide).display !== "none";
  });
  let nextIndex = currentIndex + n;

  // Wrap around if reaching the last or first slide
  if (nextIndex >= myslides.length) {
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextIndex = myslides.length - 1;
  }

  // Show the next slide
  myslides[nextIndex].style.display = "block";
}

// Show the first slide (sectionHome) initially
changeSlide(1);
// gap
function ScrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
//linear-gradient(to bottom, LightSlateGray, white);
function refreshPage() {
  history.go(0);
}
//onClick="refreshPage()"