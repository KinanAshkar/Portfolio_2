const icon = document.getElementById("menu-icon");
const links = document.querySelector(".nav-links");

icon.onclick = () => {
  links.classList.toggle("active");
};
