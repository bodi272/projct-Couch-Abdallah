document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".clients__wrapper");
  const opinions = document.querySelectorAll(".clients__opinion");
  const btnLeft = document.querySelector(".arrow.left");
  const btnRight = document.querySelector(".arrow.right");

  let index = 0;

  function updateSlider() {
    const width = opinions[0].clientWidth;
    wrapper.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  }

  btnRight.addEventListener("click", () => {
    if (index < opinions.length - 1) index++;
    updateSlider();
  });

  btnLeft.addEventListener("click", () => {
    if (index > 0) index--;
    updateSlider();
  });
});
