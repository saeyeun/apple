$(document).ready(function () {
  $('.mobile_menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav_list_desktop').toggleClass('active')
    $('header').toggleClass('active')
  });
})
