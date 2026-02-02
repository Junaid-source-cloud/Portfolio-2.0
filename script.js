(function () {
  emailjs.init("VfqC-mZlhRJJkN-KZ"); // 🔑 Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Sending message...";

    emailjs.sendForm(
      "service_tnq7ddi",   // 🧩 Service ID
      "template_jttr218",  // 🧾 Template ID
      this
    ).then(
      function () {
        status.style.color = "lime";
        status.innerText = "Message sent successfully 🚀";
        form.reset();
      },
      function (error) {
        status.style.color = "red";
        status.innerText = "Failed to send message ❌";
        console.error("EmailJS Error:", error);
      }
    );
  });
});



