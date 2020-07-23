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

    menuItem.forEach(item => {
        item.addEventListener('click', function() {
            $('.topnav a').removeClass('active');
            this.classList.add('active');
        })
    })
})