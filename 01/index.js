$(document).ready(function() {
    $('.btn-register').click(function() {
        $('.login').css('visibility', 'hidden').animate({opacity: 0, marginLeft: -100}, 500);
        $('.register').css('visibility', 'visible').animate({opacity: 1, marginLeft: 0}, 500);
    })

    $('.btn-login').click(function() {
        $('.login').css('visibility', 'visible').animate({opacity: 1, marginLeft: 0}, 500);
        $('.register').css('visibility', 'hidden').animate({opacity: 0, marginLeft: -100}, 500);
    })
});