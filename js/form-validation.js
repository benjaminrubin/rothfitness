function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$(document).ready(function () {


  $('#contactform').on('submit', function (e) {


    if (!isFormValid()) {
      alert("אנא מלא שאלון כנדרש!");
      console.log("value of submitted is", submitted)
      e.preventDefault();
    }
    else {

      submitted = true;
      // Form is valid
      // Submit the form and redirect
      $(location).attr('href', 'thankyou.html')


    }

    // $('#contactform').fadeOut(function () {

    //   // I want to do a redirect to a thank you page once it's sent

    //   $('#form-message').fadeIn();
    // });
  })



  function isFormValid() {

    var nameValid = false;
    var phoneValid = false;
    var emailValid = false;
    var multipleValid = false;

    // Validate Name - can't be empty
    var name = document.forms["contactform"]["entry.2050503941"].value;
    if (name == "") {
      $("#entry\\.2050503941").parent().find('.error-message').html("שם מלא נדרש");
      nameValid = false;
    } else {
      $("#entry\\.2050503941").parent().find('.error-message').html("");
      nameValid = true;
    }

    // Validate Phone Number - can't be empty
    var phone = document.forms["contactform"]["entry.878764942"].value;
    if (phone == "") {
      $("#entry\\.878764942").parent().find('.error-message').html("מספר מלא נדרש");
      phoneValid = false;
    } else {
      $("#entry\\.878764942").parent().find('.error-message').html("");
      phoneValid = true;
    }

    // Validate Email - must be proper email format and not empty
    var email = document.forms["contactform"]["entry.1030703572"].value;
    if (email == "" || !validateEmail(email)) {
      $("#entry\\.1030703572").parent().find('.error-message').html(" דוא״ל נדרש");
      emailValid = false;
    } else {
      $("#entry\\.1030703572").parent().find('.error-message').html("");
      emailValid = true;
    }

    // Validate Multiple Choice - must be chosen
    var multiple = document.forms["contactform"]["entry.584848696"].value;

    if (multiple == "") {
      $("#multiple-error-message").html("בחר אחד");
      multipleValid = false;
    } else {
      $("#multiple-error-message").html("");
      multipleValid = true;
    }

    return (nameValid && phoneValid && emailValid && multipleValid)

  }



});

// Bootstrap related form validation
// (function () {
//   'use strict';
//   window.addEventListener('load', function () {


//     var forms = document.getElementsByClassName('needs-validation');


//     var validation = Array.prototype.filter.call(forms, function (form) {
//       form.addEventListener('submit', function (event) {

//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//         if (form.checkValidity() === true) {

//           $('#form-message').fadeIn();
//           $('#submit-button').hide();


//         }
//       }, false);
//     });
//   }, false);
// })();