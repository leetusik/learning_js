h1 = document.querySelector("div h1");

function handleClick() {
  if (h1.classList.contains("clicked")) {
    h1.classList.remove("clicked");
  } else {
    h1.classList.add("clicked");
  }
}

h1.addEventListener("click", handleClick);
