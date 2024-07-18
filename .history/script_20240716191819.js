function section1() {
  section_1 = document.getElementById("section-1");
  section_2 = document.getElementById("section-2");
  section_3 = document.getElementById("section-3");

  section_2.setAttribute("style", "display: none;");
  section_1.setAttribute("style", "display: block;");
  section_3.setAttribute("style", "display: none;");
  console.log("hemlo");
}

function section2() {
  section_1 = document.getElementById("section-1");
  section_2 = document.getElementById("section-2");
  section_3 = document.getElementById("section-3");

  section_1.setAttribute("style", "display: none;");
  section_2.setAttribute("style", "display: block;");
  section_3.setAttribute("style", "display: none;");
}

function section3() {
  section_1 = document.getElementById("section-1");
  section_2 = document.getElementById("section-2");
  section_3 = document.getElementById("section-3");

  section_1.setAttribute("style", "display: none;");
  section_2.setAttribute("style", "display: none;");
  section_3.setAttribute("style", "display: block;");
  console.log("hemlo");
}

let illness_buttons = document.querySelectorAll("input[name='illness']");
let illness_button = "";

let find_illness = () => {
  let illness_button = document.querySelector(
    "input[name='illness']:checked"
  ).value;

  if (illness_button === "yes") {
    illnessess = document.getElementById("illnessess");

    illnessess.setAttribute("style", "display: block;");
  } else if (illness_button === "no") {
    illnessess = document.getElementById("illnessess");

    illnessess.setAttribute("style", "display: none;");
  }
};

illness_buttons.forEach((illness_button) => {
  illness_button.addEventListener("change", find_illness);
});

async function save() {
  student_name = document.getElementById("name");
  student_no = document.getElementById("student_no");
  home_address = document.getElementById("home_address");
  school_year = document.getElementById("school_year");
  age = document.getElementById("age");
  sex = document.getElementById("sex");
  civil_status = document.getElementById("civil_status");
  course_college = document.getElementById("course_college");
  blood_type = document.getElementById("blood_type");
  email = document.getElementById("email");
  parent_name = document.getElementById("parent_name");
  landline = document.getElementById("landline");
  cellphone = document.getElementById("cellphone");
  food = document.getElementById("food");
  allergy = document.getElementById("allergy");

  let illnesses = [];
  // Creates array into which skills will be pushed if checked
  document.querySelectorAll('[name="illness_name"]').forEach((item) => {
    // Iterates through all checkbox elements
    if (item.checked === true) {
      if (item.value === "Others") {
        other_content = document.getElementById("other-illness-input");
        illnesses.push(other_content.value);
      } else {
        illnesses.push(item.value);
      }

      // Pushes checkbox value into skills array if checked
    }
  });

  let medicines = [];

  // Creates array into which skills will be pushed if checked
  document.querySelectorAll('[name="medicine_name"]').forEach((item) => {
    // Iterates through all checkbox elements
    if (item.checked === true) {
      if (item.value === "Others") {
        other_content = document.getElementById("other-illness-input");
        medicines.push(other_content_medicine.value);
      } else {
        medicines.push(item.value);
      }
    }

    // Pushes checkbox value into skills array if checked
  });

  let cig_selected = document.querySelector("input[name='cig']:checked").value;

  let alc_selected = document.querySelector("input[name='alc']:checked").value;

  await fetch(`http://127.0.0.1:5000/save`),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: student_name,
        student_no: student_no,
        home_address: home_address,
        school_year: school_year,
        age: age,
        sex: sex,
        civil_status: civil_status,
        course_college: course_college,
        blood_type: blood_type,
        email_address: email_address,
        parent_name: parent_name,
        landline: landline,
        cellphone: cellphone,
        has_medical_illness: illness_button,
        diseases: illnesses,
        food: food,
        no_known_allergies: no_known_allergies,
        medicines: medicines,
        cigarette: cig_selected,
        alcohol: alc_selected,
      }),
    };
}
