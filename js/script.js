$(document).ready(function(){
  $(".icon:nth-child(2)").addClass("icon_bold");
  $(".content:nth-child(2)").addClass("show");

  $(".icon").click(function(){
    $(".icon").removeClass("icon_bold");
    $(this).addClass("icon_bold");
    var index = $(this).index()+1;
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");
    });
  });
