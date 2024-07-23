$(function() {
  $('.question').click(function() {
    $(this).toggleClass('open');
    $(this).next().slideToggle();

$('.question').not($(this)).next().slideUp();

$('.question').not($(this)).removeClass('open');
  });
});