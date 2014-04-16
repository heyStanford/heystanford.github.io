$(document).ready(function() {

  $(window).resize(function() {
    centerPreviews();
  });

  //remove delay for the cards once they finish appearing
  var delay = 0;
  $(".card").each(function(){
    $(this).css("-webkit-transition-delay", delay/1000 + "s").removeClass("hidden");
    delay += 200;
    centerPreviews();
  }, function(){
    delay = 0;
  });
  setTimeout(function() {
    $(".card").css("-webkit-transition-delay", "");
  }, 1000);

  $(".card").click(function() {
    openContent();
    populateContent( $.trim($(this).text()) );
  });

});

function centerPreviews() {
  var height = $(".card").height() - 60;
  var previewHeight  = $("img.preview").height();
  $("img.preview").css("paddingTop", (height - previewHeight)/2 );
}

function openContent() {
  $(".row, .card-extend-back, .card-extend-back > .card-extend").addClass("open");
  $(".card-extend-back .card-extend .close-button").on('click', function(){ closeContent() });
}

function closeContent() {
  $(".row, .card-extend-back, .card-extend-back > .card-extend").removeClass("open");
}

function populateContent(title) {
  $(".card-extend *").fadeOut(100);
  setTimeout(function() {
    $(".card-extend .title").text(title);
    $(".card-extend .content").text(content[title]);
    console.log(title);
    console.log(content[title]);
  }, 150);
  setTimeout(function() { $(".card-extend *").fadeIn(100) }, 200);


}