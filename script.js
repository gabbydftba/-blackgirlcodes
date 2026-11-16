// POUX PRODUCTIONS JAVASCRIPT

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Pre-shoot questionnaire
const questionnaire = document.getElementById("shootForm");

if (questionnaire) {
  questionnaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(questionnaire);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const shootType = formData.get("shootType");
    const phone = formData.get("phone");
    const makeup = formData.get("makeup");
    const location = formData.get("location");
    const sessionPeople = formData.get("sessionPeople");
    const dates = formData.get("dates");
    const notes = formData.get("notes");
    const vibe = formData.get("vibe");

    const message = `
NEW POUX PRODUCTIONS SHOOT INQUIRY

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Type of Shoot: ${shootType}
Makeup: ${makeup}
Preferred Location: ${location}
Who Is in the Session: ${sessionPeople}
Possible Dates: ${dates}
Vibe / Atmosphere: ${vibe}

Additional Notes:
${notes}
    `;

    // CHANGE THIS TO YOUR BUSINESS EMAIL
    const businessEmail = "YOUR-EMAIL@example.com";

    const subject = encodeURIComponent("New Photography Inquiry");
    const body = encodeURIComponent(message);

    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;

    const messageElement = document.getElementById("formMessage");

    if (messageElement) {
      messageElement.textContent =
        "Your email app should open with your inquiry ready to send.";
    }
  });
}
