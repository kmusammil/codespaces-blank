//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_dark_portfolio&stacked=h
toggleBar = document.querySelector('.hidden-icon');
navLeft = document.querySelector('.nav-left');
toggleBar.addEventListener("click", () => {
  navLeft.classList.toggle("active"); 
  toggleBar.classList.toggle("active2");
}); 
