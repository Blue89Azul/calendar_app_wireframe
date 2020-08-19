$(function() {
      $(".btn__profiles").on("click", function() {
        $(".profile").addClass("open-profile");
      });
      $(".btn__close").on("click", function() {
        $(".profile").removeClass("open-profile");
      });

      $(".btn__coment-list").on("click", function() {
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
            $(".change-btn-label").html("DONE FOR ME");
            $(".color-and-like-btn").html("いいね！追加＞");
            $(".color-and-like-btn").attr({"data-toggle":"modal", "data-target" :"#modal__likes"});
          } else {
            $("#add-plan").css("display", "block");
            $("#done-for-us").css("display", "none");
            $(".change-btn-label").html("ADD PLAN");
            $(".color-and-like-btn").html("色変更");
            $(".color-and-like-btn").attr({"data-toggle":"modal", "data-target" :"#modal__colors"});
          }});


      });
