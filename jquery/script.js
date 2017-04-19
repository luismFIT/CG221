$(document).ready(function(){
  $("#hide").click(function(){
      $("img").fadeOut("slow");
        });
  $("#show").click(function(){
      $("img").fadeIn("slow");
        });

    $("img").dblclick(function(){
        $(this).fadeOut("slow");
        });
});
