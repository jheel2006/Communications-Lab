document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const video1 = document.getElementById("intro-video");
    const nextButton = document.getElementById("next-button");
    const yesButton = document.getElementById("choice-button1");
    const noButton = document.getElementById("choice-button2");

    startButton.addEventListener("click", function() {
        // Redirect to the new page
        window.location.href = "part1.html";
    });


    yesButton.addEventListener("click", function() {
        // Redirect to the new page
        window.location.href = "part3.html";
    });

    noButton.addEventListener("click", function() {
        // Redirect to the new page
        window.location.href = "choices.html";
    });
});