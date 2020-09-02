$(function() {

  $(".option-btn__acount").on("click", function() {
    $(".profile").addClass("open-profile");
  });
  $(".btn__close").on("click", function() {
    $(".profile").removeClass("open-profile");
  });

  //予定入力画面　スイッチャー
  $(".change-btn").on("click", function() {
    $(this).toggleClass("active");
    var flg = $(this).hasClass("active");
    if (flg == true) {
      $("#add-plan").css("display", "none");
      $("#done-for-us").css("display", "block");
      $(".change-btn-label").html("DONE FOR US");
      $(".color-and-like-btn").html("いいね！追加");
      $("#like").css("display", "block");
      $("#color").css("display", "none");
      $(".plan-form__title").prop("disabled", true);
    } else {
      $("#add-plan").css("display", "block");
      $("#done-for-us").css("display", "none");
      $(".change-btn-label").html("ADD PLAN");
      $(".color-and-like-btn").html("色変更");
      $("#like").css("display", "none");
      $("#color").css("display", "block");
    }
  });

});
