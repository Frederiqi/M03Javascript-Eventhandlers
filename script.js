/* deel 1: alert nav klik op eerste button */

const alertButton = document.getElementById("mybutton");

alertButton.addEventListener("click", function () {
    alert("button clicked");
});

/* deel 2: van blauwe naar rode achterground nav klik op tweede button (change background): */

const bodycolorButton = document.getElementById("mybutton2");

const bodyColor = document.querySelector(".blue-background");

bodycolorButton.addEventListener("click", function () {
    bodyColor.classList.add("red-background");
});

/* deel 3: toggle kleur van background nav klik op derde button */


const bodycolorToggleButton = document.querySelector(".btn-toggle");

const toggleColor = document.querySelector(".blue-background");

bodycolorToggleButton.addEventListener("click", function () {
    toggleColor.classList.toggle("red-background");
});
