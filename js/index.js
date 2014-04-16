$(document).ready(function() {

  var del = 0;
  $(".card").each(function(){
    $(this).css('-webkit-transition-delay', del/1000 + 's').removeClass("hidden");
    del += 200;
  }, function(){
    del = 0;
  });
});