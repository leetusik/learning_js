h1 = document.querySelector("div h1");

function handleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleClick);
