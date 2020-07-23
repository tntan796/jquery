document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.topnav .icon');
    const topnav = document.querySelector('.topnav');
    const menuItem = document.querySelectorAll('.topnav a:not(.icon)');
    menuButton.addEventListener('click', function() {
        if (topnav.classList.value === 'topnav') {
            topnav.classList.add('responsive');
        } else {
            topnav.className = 'topnav';
        }
    });

    menuItem.forEach((item, index) => {
        item.addEventListener('click', function() {
            $('.topnav a').removeClass('active');
            this.classList.add('active');

            // Scroll content corresponding with menu select
            const offsetTop = document.querySelector('.content .subcontent:nth-child(' + (index + 1) + ')');
            $('html,body').animate({scrollTop: offsetTop.offsetTop + ''}, 1000);
        });
    })
})