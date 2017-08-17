var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

var enLang = document.getElementById("en-lang");
var ruLang = document.getElementById("ru-lang");

enLang.onclick = function() {
  if (enLang.style.display = "block") {
    enLang.style.display = "none";
    ruLang.style.display = "block";
  } 
}
ruLang.onclick = function() {
  if (ruLang.style.display = "block") {
    ruLang.style.display = "none";
  } 
  return enLang.style.display = "block";
}





