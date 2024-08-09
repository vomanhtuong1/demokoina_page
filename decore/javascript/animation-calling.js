const phoneIcon = document.querySelector('.header-contact-us-phone');

phoneIcon.addEventListener('mouseover', () => {
  phoneIcon.classList.add('shake');
});

phoneIcon.addEventListener('mouseout', () => {
  phoneIcon.classList.remove('shake');
});
