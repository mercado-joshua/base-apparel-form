"use strict";

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    init();
  }
});

function init() {
  var form = document.querySelector("[data-js-signup-form]");
  var email = document.querySelector("[data-js-email]");
  var error = document.querySelector("[data-js-error]");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    /** if email is invalid */

    if (!email.value.match(pattern)) {
      form.classList.add("-invalid");
      error.textContent = "Please enter a valid email address";
    } else {
      form.classList.remove("-invalid");
      error.textContent = "";
    }
    /** if email is empty */


    if (email.value === "") {
      form.classList.add("-invalid");
      error.textContent = "Please enter an email address";
    }
  });
}