$(document).ready(function(){
  
var rellax = new Rellax('.rellax');
 


  
  
  
  $(function() {
  var pos1 = 0;
$(window).scroll(function() {
  var pos2 = $(window).scrollTop();

  if(pos2 > pos1) {
    $('.header').css('display', 'none');
  }
  if(pos1 > pos2) {
    $('.header').css('display', 'block');
  }
  pos1 = pos2;
})
})
  
  
});


$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
  
   
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right > bounds.right || viewport.left < bounds.left || viewport.bottom > bounds.bottom || viewport.top < bounds.top));
    
};

/*
 
$(window).scroll(function() {
   if ($('.detector').isOnScreen() == true) {
     //alert("removing orange");
     $('.header').css('display','none');   
   } else { 
    //alert("removing red");
     $('.header').css('display','block');   
   } 

});
*/


$('.faculty_t').click(function(){
  $('.filter_t').toggleClass('show');
})

$('.hamburger').click(function(){
  $('.menu').toggleClass('show');
})