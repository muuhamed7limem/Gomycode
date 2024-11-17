document.addEventListener("DOMContentLoaded", () => {

    const colorBox = document.getElementById("color-box");
    const changeColorButton = document.getElementById("change-color-btn");
  

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    changeColorButton.addEventListener("click", () => {
      const randomColor = getRandomColor();
      colorBox.style.backgroundColor = randomColor;
    });
  });
  