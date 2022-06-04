$(".close-menu").on("click", function () {
  $(this).addClass("hidden");
  $(".open-menu").removeClass("hidden");
  $(".navbar .links").removeClass("hidden");
  $(".navbar .links").addClass("nav-links");
  $(".navbar, .navbar .links").addClass("open-menu");
  gsap.fromTo(
    ".navbar .links",
    { opacity: 0, y: -200 },
    { duration: 1, opacity: 1, y: 0, ease: "bounce" }
  );
});
$(".open-menu").on("click", function () {
  $(this).addClass("hidden");
  $(".close-menu").removeClass("hidden");
  $(".navbar .links").removeClass("nav-links");
  $(".navbar .links").addClass("hidden");
  $(".navbar, .navbar .links").removeClass("open-menu");
  gsap.fromTo(
    ".navbar .links",
    { opacity: 1, y: 0 },
    { duration: 1, opacity: 0, y: -200 }
  );
});
