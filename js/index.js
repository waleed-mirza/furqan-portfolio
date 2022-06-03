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

// animation on scroll
const scrollElements = document.querySelectorAll(
  ".transition-left, .transition-right, .fade-in"
);

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scroll-transition");
};

const hideScrollElement = (element) => {
  element.classList.remove("scroll-transition");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
