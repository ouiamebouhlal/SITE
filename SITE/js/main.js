$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times'); // icon changes
        $('.navbar').slideToggle();      // show/hide navbar
    });
});
