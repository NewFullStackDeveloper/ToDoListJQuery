$(document).ready(function() {
  // Code to be executed when the DOM is ready

  $('.item').click(function() {
    $(this).find('.image').toggleClass('checked');
    $(this).find('.text').toggleClass('strike-through');
  });

});