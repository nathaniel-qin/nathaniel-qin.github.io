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

  $(window).on("resize", function () {
    var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (w > 991) {
      $("#side-navbar-content").collapse("hide");
    }
  });
});
