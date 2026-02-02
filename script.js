(function(){
  emailjs.init("VfqC-mZlhRJJkN-KZ"); // 👈 yahan apna key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_tnq7ddi",   // 👈 service id
    "template_jttr218",  // 👈 template id
    this
  ).then(() => {
      document.getElementById("status").innerText =
        "Message sent successfully 🚀";
      this.reset();
  }, () => {
      document.getElementById("status").innerText =
        "Failed to send message ❌";
  });
});
