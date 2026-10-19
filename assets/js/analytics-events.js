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

  var page = window.location.pathname;

  // read-30s: sent once, after 30 seconds of the page being visible in total.
  var visibleSeconds = 0;
  var readTimer = window.setInterval(function () {
    if (document.visibilityState !== 'visible') return;
    visibleSeconds += 1;
    if (visibleSeconds >= 30) {
      window.clearInterval(readTimer);
      track('read-30s', { page: page });
    }
  }, 1000);

  // scroll-75: sent once, when the visitor reaches 75% of a page that is at least 1.5 screens tall.
  var scrollSent = false;
  var scrollQueued = false;
  function checkScroll() {
    scrollQueued = false;
    if (scrollSent) return;
    var docHeight = document.documentElement.scrollHeight;
    var viewHeight = window.innerHeight;
    if (docHeight < viewHeight * 1.5) return;
    if ((window.scrollY + viewHeight) / docHeight >= 0.75) {
      scrollSent = true;
      window.removeEventListener('scroll', onScroll);
      track('scroll-75', { page: page });
    }
  }
  function onScroll() {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(checkScroll);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();
