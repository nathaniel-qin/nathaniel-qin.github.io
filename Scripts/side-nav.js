$(document).ready(function() {

  $(".side-nav-opt").hover(
    function() {
      $(this).animate({
        backgroundColor: "rgb(240, 240, 240)"
      }, 175);
    }, function() {
      $(this).stop(true).animate({
        backgroundColor: "transparent"
      }, 175);
    }
  );

});
