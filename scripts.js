function render({ container, setValue }) {

  // 👇 HTML yahi create hoga
  container.innerHTML = `
    <button id="myButton">Click Me</button>
  `;

  const button = container.querySelector("#myButton");

  button.addEventListener("click", () => {
    setValue("Button Clicked");
  });
}

// 👇 mandatory
window.render = render;
