// Модальное окно

// Открыть по кнопке
$('.about-play-button').click(function() {
    $('main').css('filter');
    $('.js-overlay-about').fadeIn();
    $('.js-overlay-about').addClass('disabled');
});

// Закрыть на крестик
$('.js-close-about').click(function() {
    $('.js-overlay-about').fadeOut();
    $('main').css('filter','none');
});

// Закрыть по клику вне окна
$(document).mouseup(function (e) {
    let popup = $('.js-popup-about');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-about').fadeOut();
        $('main').css('filter','none');
    }
});

// Слайдер спикеров

const slider = document.querySelector('.swiper-container');

let SpeakerSlider = new Swiper(slider, {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next-speaker',
        prevEl: '.swiper-button-prev-speaker',
    },
})

// Слайдер медиа 

const slider2 = document.querySelector('.swiper-container.media');

let MediaSlider = new Swiper(slider2, {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next-media',
        prevEl: '.swiper-button-prev-media',
    },
})