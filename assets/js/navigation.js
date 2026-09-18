(() => {
  const button = document.querySelector('.nav-menu-button');
  const navigation = document.querySelector('.primary-navigation');
  const backdrop = document.querySelector('.nav-backdrop');
  const mobileQuery = window.matchMedia('(max-width: 60rem)');

  if (!button || !navigation || !backdrop) return;

  const setMenu = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.querySelector('.visually-hidden').textContent = open ? 'Close menu' : 'Open menu';
    document.body.classList.toggle('nav-is-open', open);
    if (!open) navigation.querySelectorAll('details[open]').forEach((item) => item.removeAttribute('open'));
  };

  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  backdrop.addEventListener('click', () => setMenu(false));
  navigation.addEventListener('toggle', (event) => {
    if (!event.target.matches('details[open]')) return;

    navigation.querySelectorAll('details[open]').forEach((item) => {
      if (item !== event.target) item.removeAttribute('open');
    });
  }, true);
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      button.focus();
    }
  });
  mobileQuery.addEventListener('change', () => setMenu(false));
})();
