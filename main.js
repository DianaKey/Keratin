// Add minimal JavaScript for the burger menu
document.querySelector('.header__burger').addEventListener('click', function() {
  this.classList.toggle('is-active');
  document.querySelector('.header__nav').classList.toggle('is-open');
});