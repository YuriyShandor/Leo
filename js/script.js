$(document).ready(function(){
  $(".content_1, .content_2, .content_3, .content_4").hide();
  $(".icon_1").click(function(){
    $(this).addClass("icon_bold");
    $(".icon_2, .icon_3, .icon_4").removeClass("icon_bold");
    $(".content_1").show();
    $(".content_2, .content_3, .content_4").hide();
  });

  $(".icon_2").click(function(){
    $(this).addClass("icon_bold");
    $(".icon_1, .icon_3, .icon_4").removeClass("icon_bold");
    $(".content_2").show();
    $(".content_1, .content_3, .content_4").hide();
  });

  $(".icon_3").click(function(){
    $(this).addClass("icon_bold");
    $(".icon_1, .icon_2, .icon_4").removeClass("icon_bold");
    $(".content_3").show();
    $(".content_1, .content_2, .content_4").hide();
  });

  $(".icon_4").click(function(){
    $(this).addClass("icon_bold");
    $(".icon_1, .icon_2, .icon_3").removeClass("icon_bold");
    $(".content_4").show();
    $(".content_1, .content_2, .content_3").hide();
  });

  });
