

  //start of contact.html 
  function validateForm() {
    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("ratingError").innerHTML = "";

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var rating = document.getElementById("rating").value;

    // Validate Name
    if (name === "" || name.length < 3 || /^[a-z]/.test(name)) {
      document.getElementById("nameError").innerHTML =
        "Please enter a valid name (at least 3 characters and should not start with a lowercase letter).";
      return;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML =
        "Please enter a valid email address.";
      return;
    }

    // Validate Message
    if (message === "") {
      document.getElementById("messageError").innerHTML =
        "Message field is required.";
      return;
    } else if (message.length > 300) {
      document.getElementById("messageError").innerHTML =
        "Please limit your message to 300 characters.";
      return;
    }

    // Validate Rating 
    if (rating === "") {
      document.getElementById("ratingError").innerHTML =
        "Please select a rating.";
      return;
    }

    document.getElementById("successMessage").innerHTML =
      "Form successfully sent!";

  }




  // $(document).ready(function () {
  //   // Inicijalizacija jQuery Validation plugin-a za formu
  //   $("#reservationForm").validate({
  //     rules: {
  //       name: "required",
  //       email: {
  //         required: true,
  //         email: true
  //       },
  //       service: "required",
  //       message: "required"
  //     },
  //     messages: {
  //       name: "Please enter your name",
  //       email: {
  //         required: "Please enter your email",
  //         email: "Please enter a valid email address"
  //       },
  //       service: "Please select a service",
  //       message: "Please enter your message"
  //     },
  //     submitHandler: function (form) {
        
  //       $("#successMessage").html("Form submitted successfully!");
        
  //     }
  //   });
  // });
  






  
