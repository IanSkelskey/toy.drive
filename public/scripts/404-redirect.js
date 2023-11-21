// 404-redirect.js
document.addEventListener('DOMContentLoaded', function() {
  var path = window.location.pathname;
  console.log('Original path:', path);

  sessionStorage.redirect = path;
  console.log('Stored in sessionStorage:', sessionStorage.redirect);

  window.location.href = '/toy.drive';
  console.log('Redirecting to home page');
});
