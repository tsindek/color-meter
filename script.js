const body = document.querySelector("body");
const header = document.querySelector("header");
const headerWrapper = document.querySelector(".header__wrapper");
const colorValue = document.querySelector(".colorValue");
const randomButton = document.querySelector(".random-button");

function calculateBackgroundColor(red, green, blue) {
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  colorValue.textContent = `rgb(${red}, ${green}, ${blue})`;
}

header.addEventListener("input", (e) => {
  const redSlider = document.querySelector("#red-slider").value;
  const greenSlider = document.querySelector("#green-slider").value;
  const blueSlider = document.querySelector("#blue-slider").value;

  calculateBackgroundColor(redSlider, greenSlider, blueSlider);
});

function getRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((colorData) => {
      const red = colorData.rgb.r;
      const green = colorData.rgb.g;
      const blue = colorData.rgb.b;

      calculateBackgroundColor(red, green, blue);
    });
}

randomButton.addEventListener("click", () => {
  getRandomColor();
});
