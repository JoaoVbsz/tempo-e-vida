document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown > a');
  const submenu = document.querySelector('.dropdown .submenu');

  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.classList.toggle('show');
  });w

  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.remove('show');
    }
  });
});
