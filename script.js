const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  };

  mobileMenuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const shouldShow = mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', String(!shouldShow));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      closeMenu();
    }
  });
}
