function section1() {
  section_1 = document.getElementById("section-1");
  section_2 = document.getElementById("section-2");
  section_3 = document.getElementById("section-3");

  section2.setAttribute("style", "display: none;");
  section1.setAttribute("style", "display: block;");
  section3.setAttribute("style", "display: none;");
  console.log("hemlo");
}

function section2() {
  section_1 = document.getElementById("section-1");
  section_2 = document.getElementById("section-2");
  section_3 = document.getElementById("section-3");

  section1.setAttribute("style", "display: none;");
  section2.setAttribute("style", "display: block;");
  section3.setAttribute("style", "display: none;");
}

function section3() {
  section_1 = document.getElementById("section-1");
  section_2 = document.getElementById("section-2");
  section_3 = document.getElementById("section-3");

  section1.setAttribute("style", "display: none;");
  section2.setAttribute("style", "display: none;");
  section3.setAttribute("style", "display: block;");
  console.log("hemlo");
}
