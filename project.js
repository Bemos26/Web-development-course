// variables are used to store data that can change
// constants just as the name suggests are used to store data that does not change
// string are numbers and texts
//boolean returns as true or false
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});