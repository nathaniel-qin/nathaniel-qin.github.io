$(document).ready(function() {

  $(window).on("resize", function () {
    var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (w > 768) {
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

  $("#collapse-button").click(function(e) {
    e.preventDefault();
    var isExpanded = document.getElementById("collapse-button").getAttribute("aria-expanded");
    if(isExpanded !== "true") {
      $("#content").animate({
        backgroundColor: "rgb(240, 240, 240)",
        opacity: "0.6"
      }, 200);
    } else {
      $("#content").animate({
        backgroundColor: "white",
        opacity: "1"
      }, 200);
    }
  });
});
