function render({ container, setValue }) {
  if (!container) return;

  container.innerHTML = "";

  const btn = document.createElement("button");
  btn.innerText = "Click Me";

  btn.onclick = () => {
    if (setValue) {
      setValue("Button Clicked");
    } else {
      alert("Clicked (test)");
    }
  };

  container.appendChild(btn);
}

window.render = render;
