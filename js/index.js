$(document).ready(function() {

  //remove delay for the cards once they finish appearing
  var delay = 0;
  $(".card").each(function(){
    $(this).css("-webkit-transition-delay", delay/1000 + "s").removeClass("hidden");
    delay += 200;
  }, function(){
    delay = 0;
  });
  setTimeout(function() {
    $(".card").css("-webkit-transition-delay", "");
  }, 1000);

  $(".card").click(function() {
    openContent();
  });

});

function openContent() {
  $(".row, .card-extend-back, .card-extend-back > .card-extend").addClass("open");
  $(".card-extend-back .card-extend .close-button").on('click', function(){ closeContent() });
}

function closeContent() {
  $(".row, .card-extend-back, .card-extend-back > .card-extend").removeClass("open");
}