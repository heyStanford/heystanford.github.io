$(document).ready(function() {

  $(window).resize(function() {
    centerPreviews();
    adjustBG();
  });

  //remove delay for the cards once they finish appearing
  var delay = 0;
  $(".card").each(function(){
    $(this).css("transition-delay", delay/1000 + "s").removeClass("hidden");
    delay += 300;
    centerPreviews();
    adjustBG();
  }, function(){
    delay = 0;
  });
  setTimeout(function() {
    $(".card").css("transition-delay", "");
  }, 1000);

  $(".card").click(function() {
    openContent();
    populateContent( $.trim($(this).text()), $(this) );
  });

});

function adjustBG() {
  if($(window).width() < 1.333333333 * $(window).height()) {
    $("body").css({
      "background-size" : "auto 100%",
      "background-position-x" : "center"
    });
  } else {
    $("body").css("background-size", "");
  }
}

function centerPreviews() {
  if( !$(".row").hasClass("open") ) {
    var height = $(".card").height() - 60;
    var previewHeight  = $("img.preview").height();
    $("img.preview").css("marginTop", (height - previewHeight)/2 );
  }
}

function openContent() {
  $(".row, .card-extend-back, .card-extend-back > .card-extend").addClass("open");
  $(".card-extend-back .card-extend .close-button").on('click', function(){ closeContent() });
}

function closeContent() {
  $(".row, .card-extend-back, .card-extend-back > .card-extend").removeClass("open");
  setTimeout(function(){centerPreviews()}, 400);
}

function populateContent(title, card) {
  $(".card-extend *:not(.pointer)").fadeOut(100);

  var index = card.parent().index();
  console.log(index);
  $(".card-extend .pointer").css("left", index * 25 + 12 + "%" );



  setTimeout(function() {
    $(".card-extend .title").text(title);
    $(".card-extend .content").html(content[title]);
  }, 150);
  setTimeout(function() { $(".card-extend *:not(.pointer)").fadeIn(100) }, 200);


}