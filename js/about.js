// Make the navbar appear when scrolling + setting of background color of navbar
$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 50) {
    $(".navbar.bg").css("background-color", "transparent");
  } else {
    $(".navbar.bg").css("background-color", "#1d2527bd");
  }
});

// Go-to-top button
var btn = $("#top-button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});