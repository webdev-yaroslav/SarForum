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

const slider1 = document.querySelector('.swiper-container.speakers');

let SpeakerSlider = new Swiper(slider1, {
    slidesPerView: 4,
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next-speaker',
        prevEl: '.swiper-button-prev-speaker',
    },
})

// Слайдер медиа 

const slider2 = document.querySelector('.swiper-container.media');

let MediaSlider = new Swiper(slider2, {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next-media',
        prevEl: '.swiper-button-prev-media',
    },
})

// Слайдер о форуме

const slider3 = document.querySelector('.swiper-container.about')

let AboutSlider = new Swiper(slider3, {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
})