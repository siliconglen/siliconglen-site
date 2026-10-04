(function () {
  function track(name, data) {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(name, data);
    }
  }
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var page = window.location.pathname;
    if (href.indexOf('mailto:') === 0) {
      track('email-click', { page: page });
      return;
    }
    if (link.classList.contains('btn')) {
      track('cta-click', { page: page, label: link.textContent.trim(), target: link.pathname });
      return;
    }
    if (/^https?:$/.test(link.protocol) && link.hostname !== window.location.hostname) {
      track('outbound-click', { page: page, host: link.hostname });
    }
  });
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      var topic = form.querySelector('#topic');
      track('contact-form-submit', { topic: topic ? topic.value : '' });
    });
  }
})();
