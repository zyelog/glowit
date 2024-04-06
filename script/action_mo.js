$('.hambuger').click(function(){
    $('.modal').stop().fadeToggle()
    $('nav').toggleClass('on')
    $(this).toggleClass('on')
})


// $('.gnb li').click(function(){
//     $('.lnb').stop().slideUp()
//     $(this).children('.lnb').stop().slideToggle()
// })


//show(), hide(), toggle()
//fadeIn(), fadeOut(), fadeToggle()
//slideDown(), slideUp(), slideToggle()
//addClass(), removeClass(), toggleClass()