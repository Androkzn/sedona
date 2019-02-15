(function() {
  'use strict'
  var link = document.querySelector(".button-search-hotel"),
    popup = document.querySelector(".form-show"),
    form = popup.querySelector("form"),
    checkin = popup.querySelector("[name=check-in-date]");

  link.addEventListener("click", function(evt) {
    popup.classList.toggle("modal-show");
    checkin.focus();
  });
})()