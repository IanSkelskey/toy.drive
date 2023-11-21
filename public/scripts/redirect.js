// redirect.js
(function() {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;

  console.log('Redirect from sessionStorage:', redirect);
  console.log('Current window location:', window.location.href);

  if (redirect && redirect !== window.location.href) {
    window.history.replaceState(null, null, redirect);
    console.log('Window location after redirect:', window.location.href);
  }
})();
