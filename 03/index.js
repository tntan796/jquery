$(document).ready(function() {
    $('.subnav').click(function() {
        const offsetTop = $('.tab:nth-child(' + ($(this).index() + 1) + ')').offset().top;
        $("html,body").animate({ scrollTop: offsetTop + '' }, 1000);
    });
})