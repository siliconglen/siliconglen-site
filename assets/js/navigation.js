(() => {
  const button = document.querySelector('.nav-menu-button');
  const navigation = document.querySelector('.primary-navigation');
  const backdrop = document.querySelector('.nav-backdrop');
  const background = [document.getElementById('main-content'), document.querySelector('.site-footer')].filter(Boolean);
  const mobileQuery = window.matchMedia('(max-width: 60rem)');

  if (!button || !navigation || !backdrop) return;

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';

  const setMenu = (open, returnFocus) => {
    button.setAttribute('aria-expanded', String(open));
    button.querySelector('.visually-hidden').textContent = open ? 'Close menu' : 'Open menu';
    document.body.classList.toggle('nav-is-open', open);
    background.forEach((el) => { el.inert = open; });
    if (open) {
      const first = navigation.querySelector('a[href], summary');
      if (first) first.focus();
    } else {
      navigation.querySelectorAll('details[open]').forEach((item) => item.removeAttribute('open'));
      if (returnFocus) button.focus();
    }
  };

  button.addEventListener('click', () => setMenu(!isOpen(), true));
  backdrop.addEventListener('click', () => setMenu(false, true));

  navigation.addEventListener('toggle', (event) => {
    if (!event.target.matches('details[open]')) return;
    navigation.querySelectorAll('details[open]').forEach((item) => {
      if (item !== event.target) item.removeAttribute('open');
    });
  }, true);

  navigation.addEventListener('click', (event) => {
    if (isOpen() && event.target.closest('a')) setMenu(false, false);
  });

  navigation.querySelectorAll('.nav-list__dropdown').forEach((dropdown) => {
    dropdown.addEventListener('pointerenter', () => {
      if (!mobileQuery.matches) dropdown.setAttribute('open', '');
    });
    dropdown.addEventListener('pointerleave', () => {
      if (!mobileQuery.matches) dropdown.removeAttribute('open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (isOpen()) {
      setMenu(false, true);
      return;
    }
    const openDropdown = navigation.querySelector('details[open]');
    if (openDropdown) {
      openDropdown.removeAttribute('open');
      const toggle = openDropdown.querySelector('summary');
      if (toggle) toggle.focus();
    }
  });

  mobileQuery.addEventListener('change', () => {
    if (isOpen()) setMenu(false, false);
    else navigation.querySelectorAll('details[open]').forEach((item) => item.removeAttribute('open'));
  });
})();
