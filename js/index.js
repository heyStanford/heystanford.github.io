$(document).ready(function() {

  centerPreviews();
  adjustBG();

  $(window).resize(function() {
    centerPreviews();
    adjustBG();
  });

  $(".card").click(function() {
    openContent();
    populateContent( $.trim($(this).text()), $(this) );
  });

});

$(window).load(function() {
  showBody();
  setTimeout(function(){ showHeader() }, 1500);
  setTimeout(function(){ showCards() }, 4000);
});

function showBody() {
  $(".load-container, body").toggleClass("hidden");
}

function showHeader() {
  var delay = 0;
  $(".header *").each(function(){
    $(this).css("transition-delay", delay/1000 + "s").removeClass("hidden");
    delay += 1000;
    centerPreviews();
    adjustBG();
  }, function(){
    delay = 0;
  });
}

function showCards() {
  var delay = 0;
  $(".card").each(function(){
    $(this).css("transition-delay", delay/1000 + "s").removeClass("hidden");
    delay += 400;
    centerPreviews();
    adjustBG();
  }, function(){
    delay = 0;
  });
  setTimeout(function() {
    $(".card").css("transition-delay", "");
  }, 1000);
}

function adjustBG() {
  if($(window).width() < 1.333333333 * $(window).height()) {
    $("body").css({
      "background-size" : "auto 100%",
      "background-position" : "center"
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
  $(".card-extend *:not(.pointer)").fadeOut(300);

  var index = card.parent().index();
  console.log(index);
  $(".card-extend .pointer").css("left", index * 25 + 12 + "%" );



  setTimeout(function() {
    $(".card-extend .title").text(title);
    $(".card-extend .content").html(content[title]);
  }, 400);
  setTimeout(function() { $(".card-extend *:not(.pointer)").fadeIn(300) }, 500);
}