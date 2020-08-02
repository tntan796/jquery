document.addEventListener('DOMContentLoaded', function() {
   $('.open-dialog').click(function() {
      $('.backdrop').addClass('active');
      $('.dialog').addClass('active');
   });

   $('.btn-close').click(function() {
       $('.backdrop').removeClass('active');
       $('.dialog').removeClass('active');
   })
})