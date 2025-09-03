
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submit button");

    form.addEventListener("click", function (e) {
      e.preventDefault(); // prevent actual form submission
      alert("Your request has been submitted successfully!");
      console.log("Submitted")
      form.reset(); // clears form inputs

    setTimeout(() => {
    window.location.href = "";
    }, 2000);
    })
  });