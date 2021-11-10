"use strict";

// app js
var questionButtons = document.querySelectorAll(".question__button");
window.addEventListener("DOMContentLoaded", function () {
  questionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.getAttribute("aria-expanded") == "false") {
        questionButtons.forEach(function (button) {
          closeAnswer(button);
        });
        openAnswer(button);
      } else {
        closeAnswer(button);
      }
    });
  });

  function closeAnswer(button) {
    var answerContainer = document.getElementById(button.getAttribute("aria-controls"));
    var answer = answerContainer.querySelector("p");
    answerContainer.setAttribute("style", "");
    answerContainer.classList.remove("expanded");
    answer.classList.remove("visible");
    button.setAttribute("aria-expanded", "false");
    button.querySelector(".bx").classList.remove("bx-minus");
    button.querySelector(".bx").classList.add("bx-plus");
  }

  function openAnswer(button) {
    var answerContainer = document.getElementById(button.getAttribute("aria-controls"));
    var answer = answerContainer.querySelector("p");
    answerContainer.style.height = "".concat(answer.offsetHeight, "px");
    answerContainer.classList.add("expanded");
    answer.classList.add("visible");
    button.setAttribute("aria-expanded", "true");
    button.querySelector(".bx").classList.remove("bx-plus");
    button.querySelector(".bx").classList.add("bx-minus");
  }
});
window.addEventListener("resize", function () {
  questionButtons.forEach(function (button) {
    if (button.getAttribute("aria-expanded") == "true") {
      var answerContainer = document.getElementById(button.getAttribute("aria-controls"));
      var answer = answerContainer.querySelector("p");
      answerContainer.style.height = "".concat(answer.offsetHeight, "px");
    }
  });
});