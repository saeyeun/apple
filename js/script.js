$(document).ready(function () {
  // $('.mainSlide').slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true,
  //   pauseOnHover : false,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   draggable: false,
  //   responsive: [
  //           {
  //             breakpoint: 733,
  //             settings: {
  //               arrows: true,
  //               infinite: true,
  //               dots: true
  //             }
  //           },
  //           // {
  //           //   breakpoint: 600,
  //           //   settings: {
  //           //     slidesToShow: 2,
  //           //     slidesToScroll: 2
  //           //   }
  //           // },
  //           // {
  //           //   breakpoint: 480,
  //           //   settings: {
  //           //     slidesToShow: 1,
  //           //     slidesToScroll: 1
  //           //   }
  //           // }
  //           // You can unslick at a given breakpoint now by adding:
  //           // settings: "unslick"
  //           // instead of a settings object
  //         ]
  // });

  // $('.mobile-menu').click(function (e) {
  //   e.preventDefault();
  //   $(this).toggleClass('active');
  //   if ($(this).hasClass('active')) {
  //     $('header').animate({ height: "100vh" }, 500).css('background-color', '#fff');
  //   } else {
  //     $('header').animate({ height: "4.8rem" }, 500).css('background-color',  'rgba(251,251,253,0.8)');
  //   }
  // });
//   function headerHeight() {
//     // 화면 크기가 833px 이하일 때 height값 설정
//     if ($(window).width() <= 833) {
//         $('header').css('height', '4.8rem');
//     } else {
//         $('header').css('height', '4.4rem');
//     }
// }

// // 브라우저 창의 크기가 변경될 때마다 headerHeight 함수를 호출하도록 설정
// $(window).resize(headerHeight);

$('.mobile_menu').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav_list_desktop').toggleClass('active')
    $('header').toggleClass('active')
    // active 클래스를 가지고 있다면 height가 100vh로 변경
    // if ($(this).hasClass('active')) {
    //     $('header').animate({height: "100vh"}, 500).css('background-color', '#fff');
    //     // $('.nav-list-desktop').fadeIn(500);
    //     // $('.nav-list-desktop').css('height', '100%');
    //   } else {
    //   // active 클래스를 가지고 있지 않다면 height가 다시 0으로 줄어듦
    //   $('header').animate({height: "4.8rem"}, 500, function() {
    //     $(this).css('background-color', 'rgba(251,251,253,0.8)');
    //     // $('.nav-list-desktop').fadeOut(500);
    //     // $('.nav-list-desktop').css('height', '0');
    //     headerHeight();
    //   });
    // }
});
})
