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

  //予定入力画面　スイッチャー
  $(".change-btn").click(transform);



  function transform() {
    $(this).toggleClass("active");
    var flg = $(this).hasClass("active")

    if (flg == true) {
      // 予定タイトル
      $(".form__title").attr('placeholder', 'DONE FOR US タイトル');
      //スイッチャー文言
      $(".change-btn-label").html("DONE FOR US");
      // 予定スロット変更
      $(".form__times").css("display", "none");
      $(".form__times-doneForUs").css("display", "block");
      //色変更
      $(".color-box").css("display", "none");
      $("input[type=checkbox].like+label>img").css("display", "block");
    } else {
      // 予定タイトル
      $(".form__title").attr('placeholder', '予定タイトル');
      //スイッチャー文言
      $(".change-btn-label").html("ADD PLAN");
      // 予定スロット変更
      $(".form__times").css("display", "block");
      $(".form__times-doneForUs").css("display", "none");
      //色変更
      $(".color-box").css("display", "block");
      $("input[type=checkbox].like+label>img").css("display", "none");
    }


  }








});
