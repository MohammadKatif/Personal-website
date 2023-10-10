// JS function for navigation bar 
function ScrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
//linear-gradient(to bottom, LightSlateGray, white);
function refreshPage() {
  history.go(0);
}
//onClick="refreshPage()"