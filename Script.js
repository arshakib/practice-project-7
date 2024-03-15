const input = document.querySelector("input");
const button = document.querySelector("button");
const resultText = document.querySelector(".resultText");
const remainingAttempts = document.querySelector(".remainingAttempts");

input.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submited");
        });

        button.addEventListener("click", function () {
                input.addEventListener("submit", (event) => {
                    event.preventDefault();
                    console.log("submited");
                });
            });