const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");
const main = document.querySelector("main");
const header = document.querySelector("header");
const headerWrapper = document.querySelector(".header__wrapper");
const colorValue = document.querySelector(".colorValue");

function calculateBackgroundColor(redSlider, greenSlider, blueSlider) {
  main.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
  headerWrapper.style.backgroundColor = `rgba(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value}, 0.5)`;
  colorValue.textContent = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
}

header.addEventListener("change", (e) => {
  calculateBackgroundColor(redSlider, greenSlider, blueSlider);
});
