function section2() {
  section1 = document.getElementById("section-1");
  section2 = document.getElementById("section-2");
  console.log(section1);
  section1.setAttribute("style", "display: none;");
  section2.setAttribute("style", "display: block;");
}
