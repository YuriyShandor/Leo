$(document).ready(function(){
  $(".icon").click(function(){
    $(".icon").removeClass("icon_bold");
    $(this).addClass("icon_bold");
    var index = $(this).index();
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");
    });
  });
