import $ from 'jquery';

$(function () {
    $('.close').click(function (e) {
        e.preventDefault();
        $('.video-embed').attr('src', '');
        setTimeout(() => {
            $('.video-embed').attr('src', 'https://www.youtube.com/embed/JMGkbrETU8M');

        }, 500)
    });
})