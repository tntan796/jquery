$(document).ready(function() {
    // Khởi tạo
    $('.block__content').slideUp();

    $('.block__title').click(function() {
        // Chuyển trạng thái của nội dung ở slide click
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    })

})