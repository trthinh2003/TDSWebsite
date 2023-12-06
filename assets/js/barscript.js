var headerBar = document.querySelector('.header-bars');
headerBar.onclick = function() {
  headerNav = document.querySelector("nav");
  headerNav.classList.toggle("open");
}