$(document).ready(function() {
var stickyNavTop = $('.sitenav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.sitenav').addClass('sticky');
} else {
    $('.sitenav').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});