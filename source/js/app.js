(function() {
  'use strict';

  $('.nav-hidden').on('click', function() {
      $(this).find('.nav-hidden-bar').toggleClass('active');
      $('.nav__list').slideToggle();
  });

})();