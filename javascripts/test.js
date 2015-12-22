$(document).ready(function() {
  var w = $(window).width();
      x = 530;
    $('.boxTitle').fadeIn(500)
    $('.boxContact').fadeIn(800)
    $('.boxMap').fadeIn(800)
    if (w <= x) {
      $('.boxMap .boxHalf').fadeIn(800)

    }
});


$('.boxSale').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxSale').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 250){
   $(this).addClass("fadeInUp");
  }
 });
});

$('.boxUser .contentsMain').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxUser .contentsMain').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 250){
   $(this).addClass("fadeInUp");
  }
 });
});

/*
 *#Shop .boxMap
 */
$('.boxMap .boxHalf').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
     w = $(window).width();
     x = 530;
 $('.boxMap .boxHalf').each(function(){
  var targetPosition = $(this).offset().top;
    if(topWindow > targetPosition - windowHeight + 200){
      $(this).addClass("fadeInLeft");
  }
 });
});


/*
 *#Shop .boxPic
 */
$(window).scroll(function(){
  var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
  $('.boxPic').each(function(){
   var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight){
    $('.boxPic').fadeIn(500)
   }
  });
 });
$('.boxPic .boxHalf').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxPic .boxHalf').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInRight");
  }
 });
});


$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxSale .contentsMain').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 250){
   $(this).addClass("fadeInUp");
  }
 });
});
