document.addEventListener('DOMContentLoaded', function() {
    TweenMax.staggerFrom(
        $('.noidung .to'), // phần tử được chọn
        1, // thời gian chuyển động
        { top: 100, opacity: 0 },
        0.4 // thời gian cách nhau giữa mỗi hiệu ứng
    );
})