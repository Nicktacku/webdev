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

async function save() {
  let illness_button = document.querySelectorAll("input[name='fruit']:checked");
  console.log("hello, "illness_button);

  await fetch(`http://127.0.0.1:5000/save`),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "name",
        student_no: "student_no",
        home_address: "home_address",
        school_year: "school_year",
        age: "age",
        sex: "sex",
        civil_status: civil_status,
        course_college: course_college,
        blodd_type: blood_type,
        email_address: email_address,
        parent_name: parent_name,
        landline: landline,
        cellphone: cellphone,
        has_medical_illness: has_medical_illness,
        diseases: diseases,
        food: food,
        no_known_allergies: no_known_allergies,
        medicines: medicines,
        cigarette: cigarette,
        alcohol: alcohol,
      }),
    };
}
