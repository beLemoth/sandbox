(function() {
  'use strict';

  $('.nav-hidden-bar').on('click', function() {
      $(this).toggleClass('active');
      $('.nav__list').slideToggle();
  });

})();