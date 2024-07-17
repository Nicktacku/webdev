function section1() {
  section1 = document.getElementById("section-1");
  section2 = document.getElementById("section-2");
  section3 = document.getElementById("section-3");

  section2.setAttribute("style", "display: none;");
  section1.setAttribute("style", "display: block;");
  section3.setAttribute("style", "display: none;");
}

function section2() {
  section1 = document.getElementById("section-1");
  section2 = document.getElementById("section-2");
  section3 = document.getElementById("section-3");

  section1.setAttribute("style", "display: none;");
  section2.setAttribute("style", "display: block;");
  section3.setAttribute("style", "display: none;");
}

function section3() {
  section1 = document.getElementById("section-1");
  section2 = document.getElementById("section-2");
  section3 = document.getElementById("section-3");

  section1.setAttribute("style", "display: none;");
  section2.setAttribute("style", "display: none;");
  section3.setAttribute("style", "display: block;");
}
