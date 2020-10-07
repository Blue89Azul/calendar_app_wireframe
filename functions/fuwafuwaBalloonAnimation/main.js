$(function() {
  $("button").click(function() {
    $(".balloon").addClass("balloonAnimation");
    $("span").toggleClass("moveStraight");

    $(".balloon:nth-child(10)").on('transitionend webkitTransitionEnd', function() {
      $(".balloon").removeClass("balloonAnimation");
    });
  });
});
