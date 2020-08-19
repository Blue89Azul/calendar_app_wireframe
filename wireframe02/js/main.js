$(function(){
  $(".btn__profiles").on("click", function() {
    $(".profile").addClass("open-profile");
  });
  $(".btn__close").on("click", function() {
    $(".profile").removeClass("open-profile");
  });

  $(".btn__coment-list").on("click", function(){
    $(".coment-list").addClass("open-coment-list");
  });
  $(".btn__close-coment-list").on("click", function(){
    $(".coment-list").removeClass("open-coment-list");
  });

});
