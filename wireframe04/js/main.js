$(function() {
  $(".option-btn__main").on("click", function() {
    $(".option-btn-items > .sub-item").toggle();
    $(".contents").toggleClass("content-cover");
  });


  $(".option-btn__acount").on("click", function() {
    $(".profile").addClass("open-profile");
  });
  $(".btn__close").on("click", function() {
    $(".profile").removeClass("open-profile");
  });

  $(".option-btn__coment-list").on("click", function() {
    $(".coment-list").addClass("open-coment-list");
  });
  $(".btn__close-coment-list").on("click", function() {
    $(".coment-list").removeClass("open-coment-list");
  });

  //予定入力画面　スイッチャー
  $(".change-btn").on("click", function() {
    $(this).toggleClass("active");
    var flg = $(this).hasClass("active");
    if (flg == true) {
      $("#add-plan").css("display", "none");
      $("#done-for-us").css("display", "block");
      $(".change-btn-label").html("DONE FOR US");
      $("#like").css("display", "block");
      $("#color").css("display", "none");
    } else {
      $("#add-plan").css("display", "block");
      $("#done-for-us").css("display", "none");
      $(".change-btn-label").html("ADD PLAN");
      $("#like").css("display", "none");
      $("#color").css("display", "block");
    }
  });

  // 今月の一枚
  $("body").append('<div class="gray-layer"></div><div class="over-layer"></div>');
  $(".gray-layer").click(function() {
    $(".gray-layer, .over-layer").hide();
  });

  $("a.modal-img").click(function() {
    $(".gray-layer").show();
    $(".over-layer").show().html("<img src='" + $(this).attr("href") + "'>");
    return false;
  });


});
