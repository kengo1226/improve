const navBtn = document.getElementById("navBtn");
const navMenu = document.getElementById("navMenu");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  navBtn.classList.toggle("active");
});

// swiperr
if (window.innerWidth < 768) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
