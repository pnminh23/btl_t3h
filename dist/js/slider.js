$(document).ready(function(){
    $('.top-slider').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    })
})
$(document).ready(function(){
    $('.bot-slide .flex-row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="prev-arrow arrow"><i class="ti-angle-left"></i></div>',
        nextArrow: '<div class="next-arrow arrow"><i class="ti-angle-right"></i></div>',
    })
})