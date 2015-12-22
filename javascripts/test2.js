$(function(){
  var w = $(window).width();
  var x = 530;
  if(w <= x) {
    $('.boxMap .boxHalf').fadeIn(800)
    $('.boxMap .boxHalf').css("visibility","visible")
    $('.boxPic .boxHalf').fadeIn(800)
    $('.boxPic .boxHalf').css("visibility","visible")
  } else {
    $(window).scroll(function(){
      var windowHeight = $(window).height(),
          topWindow = $(window).scrollTop();
      $('.boxMap .boxHalf').each(function(){
      var targetPosition = $(this).offset().top;
        if(topWindow > targetPosition - windowHeight + 200){
          $(this).addClass("fadeInLeft");
        }
      });
      $('.boxPic .boxHalf').each(function(){
       var targetPosition = $(this).offset().top;
       if(topWindow > targetPosition - windowHeight + 200){
        $(this).addClass("fadeInRight");
       }
      });
    });
    $('.boxMap .boxHalf').css("display","block")
    $('.boxPic .boxHalf').css("display","block")
  }
});

$(document).ready(function() {
  var w = $(window).width();
  var x = 530;
    $('.boxTitle').fadeIn(500)
    $('.boxContact').fadeIn(800)
    $('.boxMap').fadeIn(800)
});


$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxUser .contentsMain').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 250){
   $(this).addClass("fadeInUp");
  }
  });
  $('.boxPic').each(function(){
   var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight){
    $('.boxPic').fadeIn(500)
   }
  });
  $('.boxSale .contentsMain').each(function(){
   var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight + 100){
    $(this).addClass("fadeInUp");
   }
  });
});
