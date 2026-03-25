export default function render({ container, setValue }) {
  const btn = document.createElement("button");
  btn.innerText = "Click Me";

  btn.onclick = () => {
    setValue("Button Clicked");
  };

  container.appendChild(btn);
}
