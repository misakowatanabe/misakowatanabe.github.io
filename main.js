// Make the navbar appear when scrolling + setting of background color of navbar
$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 50) {
    $(".navbar.bg").css("background-color", "transparent");
  } else {
    $(".navbar.bg").css("background-color", "#1d2527e1");
  }
});

// Make home button function: to scroll to top
var btn = $(".logo");
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".main-text .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/([,']|\w)/g,"<span class='letter'>$&</span>" // Use regex
);

anime.timeline({loop: false})
  .add({
    targets: '.main-text .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.main-text .line',
    translateX: [0, document.querySelector('.main-text .letters').getBoundingClientRect().width + 25],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.main-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.main-text .line1',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 0
  });