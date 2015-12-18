$(document).ready(function() {
		$('.boxTitle').fadeIn(500)
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

$('.boxMap').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxMap').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 300){
   $(this).addClass("fadeInLeft");
  }
 });
});

$('.boxPic').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.boxPic').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 250){
   $(this).addClass("fadeInRight");
  }
 });
});
