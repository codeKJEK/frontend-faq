// app js
const questionButtons = document.querySelectorAll(".question__button");

window.addEventListener("DOMContentLoaded", () => {
    questionButtons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.getAttribute("aria-expanded") == "false") {
                questionButtons.forEach(button => {
                    closeAnswer(button);
                });
                openAnswer(button);
            } else {
                closeAnswer(button);
            }
        })
    })
    function closeAnswer(button) {
        let answerContainer = document.getElementById(button.getAttribute("aria-controls"));
        let answer = answerContainer.querySelector("p");
        answerContainer.setAttribute("style", "");
        answerContainer.classList.remove("expanded");
        answer.classList.remove("visible");
        button.setAttribute("aria-expanded", "false");
        button.querySelector(".bx").classList.remove("bx-minus");
        button.querySelector(".bx").classList.add("bx-plus");
    }
    function openAnswer(button) {
        let answerContainer = document.getElementById(button.getAttribute("aria-controls"));
        let answer = answerContainer.querySelector("p");
        answerContainer.style.height = `${answer.offsetHeight}px`;
        answerContainer.classList.add("expanded");
        answer.classList.add("visible");
        button.setAttribute("aria-expanded", "true");
        button.querySelector(".bx").classList.remove("bx-plus");
        button.querySelector(".bx").classList.add("bx-minus");
    }
})

window.addEventListener("resize", () => {
    questionButtons.forEach(button => {
        if(button.getAttribute("aria-expanded") == "true") {
            let answerContainer = document.getElementById(button.getAttribute("aria-controls"));
            let answer = answerContainer.querySelector("p");
            answerContainer.style.height = `${answer.offsetHeight}px`;
        }
    })
})
