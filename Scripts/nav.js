$(document).ready(function() {

  $(window).on("resize", function () {
    var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (w > 767) {
      $("#navbar-content").collapse("hide");
      $("#content").css({"backgroundColor": "white", "opacity": "1"});
    }
  });

  $(".nav-option").hover(
    function() {
      $(this).animate({
        backgroundColor: "rgb(240, 240, 240)"
      }, 175);
    }, function() {
      $(this).stop(true).animate({
        backgroundColor: "white"
      }, 175);
    }
  );

  $("#main-collapse-button").click(function(e) {
    e.preventDefault();
    var isExpanded = document.getElementById("main-collapse-button").getAttribute("aria-expanded");
    if(isExpanded !== "true") {
      $("#content").animate({
        backgroundColor: "rgb(235, 235, 235)",
        opacity: "0.6"
      }, 200);
      $(".side-nav").animate({
        backgroundColor: "rgb(235, 235, 235)"
      }, 200);
      $("#footer").animate({
        backgroundColor: "rgb(235, 235, 235)",
        opacity: "0.6"
      }, 200);
      $("body").css("overflow", "hidden");
      $("#content").css("pointer-events", "none");
    } else {
      $("#content").animate({
        backgroundColor: "transparent",
        opacity: "1"
      }, 200);
      $(".side-nav").animate({
        backgroundColor: "transparent"
      }, 200);
      $("#footer").animate({
        backgroundColor: "transparent",
        opacity: "1"
      }, 200);
      $("body").css("overflow", "auto");
      $("#content").css("pointer-events", "all");
    }
  });
});
