$(window).load(function() { // makes sure the whole site is loaded
  $('.loading-page').delay(1500).fadeOut('fast'); // will fade out the white DIV that covers the website.
    setTimeout( function(){
    $('#no-scrollbar').css('overflow-y','scroll'); //Non funzionava come il semplice delay e fadeout avendo il .css
      },1500);
});
