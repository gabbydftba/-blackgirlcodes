document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", isOpen);
    });
  }

  // CHANGE THIS TO YOUR REAL BUSINESS EMAIL.
  const bookingEmail = "YOUR-EMAIL@example.com";

  document.querySelectorAll("form[data-mailto]").forEach(form => {

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      if (bookingEmail === "YOUR-EMAIL@example.com") {
        alert("Please add your real email address in script.js first.");
        return;
      }

      const formData = new FormData(form);
      let message = "";

      for (const [key, value] of formData.entries()) {
        message += `${key}: ${value}\n`;
      }

      const subject = encodeURIComponent(
        form.dataset.subject || "Poux Productions Inquiry"
      );

      const body = encodeURIComponent(message);

      window.location.href =
        `mailto:${bookingEmail}?subject=${subject}&body=${body}`;
    });

  });

});
