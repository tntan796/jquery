document.addEventListener('DOMContentLoaded', function() {
    var thoigian = setInterval(() => {
        $('.next').trigger('click');
    }, 3000);

  $('.next').click(function() {
      clearInterval(thoigian);
      var buttonActive = $('.slideButton ul li.active');
      var buttonNext = buttonActive.next();
      buttonActive.removeClass('active');
      if(buttonNext.length == 0) {
          $('.slideButton ul li:first-child').addClass('active');
      } else {
         buttonNext.addClass('active');
      }

      var activeSlide = $('.slide.active');
      var nextSlide = activeSlide.next();
      if (nextSlide.length == 0) {
        activeSlide.addClass('slide-out-right-to-left').one('webkitAnimationEnd', function() {
            activeSlide.removeClass('slide-out-right-to-left');
            activeSlide.removeClass('active');
          });
        $('.slides .slide:first-child').addClass('active');
        $('.slides .slide:first-child').addClass('slide-in-right-to-left').one('webkitAnimationEnd', function() {
            $('.slides .slide:first-child').removeClass('slide-in-right-to-left');  
        });
      } else {
        activeSlide.addClass('slide-out-right-to-left').one('webkitAnimationEnd', function() {
            activeSlide.removeClass('slide-out-right-to-left');
            activeSlide.removeClass('active');
          });
          nextSlide.addClass('active');
          nextSlide.addClass('slide-in-right-to-left').one('webkitAnimationEnd', function() {
            nextSlide.removeClass('slide-in-right-to-left');  
          });
      }
  })

  $('.previous').click(function() {
    clearInterval(thoigian);
    var buttonActive = $('.slideButton ul li.active');
    var buttonPrev = buttonActive.prev();
    buttonActive.removeClass('active');
    if(buttonPrev.length == 0) {
        $('.slideButton ul li:last-child').addClass('active');
    } else {
        buttonPrev.addClass('active');
    }



    var activeSlide = $('.slide.active');
    var prevSlide = activeSlide.prev();
    if (prevSlide.length == 0) {
      activeSlide.addClass('slide-out-left-to-right').one('webkitAnimationEnd', function() {
          activeSlide.removeClass('slide-out-left-to-right');
          activeSlide.removeClass('active');
        });
      $('.slides .slide:last-child').addClass('active');
      $('.slides .slide:last-child').addClass('slide-in-left-to-right').one('webkitAnimationEnd', function() {
          $('.slides .slide:last-child').removeClass('slide-in-left-to-right');  
      });
    } else {
      activeSlide.addClass('slide-out-left-to-right').one('webkitAnimationEnd', function() {
          activeSlide.removeClass('slide-out-left-to-right');
          activeSlide.removeClass('active');
        });
        prevSlide.addClass('active');
        prevSlide.addClass('slide-in-left-to-right').one('webkitAnimationEnd', function() {
            prevSlide.removeClass('slide-in-left-to-right');  
        });
    }
})


    $('.slideButton ul li').click(function() {
        $('.slideButton ul li.active').removeClass('active');
        $(this).addClass('active');
        let index = $(this).index() + 1;
        $('.slide.active').addClass('slide-out-left-to-right').one('webkitAnimationEnd', function() {
            $('.slide-out-left-to-right').removeClass('active');
            $('.slide-out-left-to-right').removeClass('slide-out-left-to-right');
          });
          
        $('.slide:nth-child('+ index +')').addClass('active');
        $('.slide:nth-child('+ index +')').addClass('slide-in-left-to-right').one('webkitAnimationEnd', function() {
            $('.slide:nth-child('+ index +')').removeClass('slide-in-left-to-right');  
        });
        
    })
})