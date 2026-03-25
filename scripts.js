function render({ container, setValue }) {
  container.innerHTML = `
    <button id="myButton">Click Me</button>
  `;

  const button = container.querySelector("#myButton");

  button.addEventListener("click", () => {
    if (setValue) {
      setValue("Button Clicked");
    } else {
      alert("Button Clicked (Local Test)");
    }
  });
}

window.render = render;

window.onload = () => {
  const container = document.getElementById("root");
  render({ container });
};