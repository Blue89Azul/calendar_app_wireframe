$(function() {
  // サイドタブの開閉
  // プロフィール一覧画面
  $(".btn__profile").on("click", function() {
    $(".shift-position__profile").addClass("open-profile");
  });
  $(".btn__close").on("click", function() {
    $(".shift-position__profile").removeClass("open-profile");
  });
  // 予定追加画面
  $(".btn__addPlan").on("click", function() {
    $(".shift-position__plan").addClass("open-plan");
  });
  $(".btn__close").on("click", function() {
    $(".shift-position__plan").removeClass("open-plan");
  });
  // プロフィール編集画面
  $(".btn__edit").on("click", function() {
    $(".shift-position__change-profile").addClass("open-change-profile");
  });
  $(".btn__close-change-profile").on("click", function() {
    $(".shift-position__change-profile").removeClass("open-change-profile");
  });









});
