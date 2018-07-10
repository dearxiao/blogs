
var width = document.body.clientWidth,
    num = 5
if (width < 1200) {
    num = 4
}
if (width < 760) {
    num = 1
}
var specialist = new Swiper('.specialist', {
    loop: true,
    slidesPerView: num,
    spaceBetween: 40,
    // autoplay: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})