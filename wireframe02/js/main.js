$(function(){
  $(".btn__profiles").on("click", function() {
    $(".profile").addClass("open-profile");
  });
  $(".btn__close").on("click", function() {
    $(".profile").removeClass("open-profile");
  });

});
