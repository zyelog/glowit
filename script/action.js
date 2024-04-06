// 원하는 소스만 가져올수있음
// $('header').load('include/header_js.html', function(){ //<-콜백함수
//     $('.hamburger').click(function(){
//         $('.hamburger').toggleClass('on')
//         $('nav').toggleClass('on')
//     })
// })

$(".hamburger").click(function () {
  $(".hamburger").toggleClass("on");
  $("nav").toggleClass("on");
});

$(".hambuger").click(function () {
  $(".modal").stop().fadeToggle();
  $(".hambuger nav").toggleClass("on");
  $(this).toggleClass("on");
});
