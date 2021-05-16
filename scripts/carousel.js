window.addEventListener("load", function () {
  const img = document
    .querySelector(".carousel")
    .querySelectorAll(".carousel-item");
  const pagination = document
    .querySelector(".carousel-pagination")
    .querySelectorAll(".pagination-item");
  const next = document
    .querySelector(".carousel")
    .querySelector("i.icon-arrow-next");
  const back = document
    .querySelector(".carousel")
    .querySelector("i.icon-arrow-back");

  let actualIndex = 0;

  window.setInterval(autoPlay, 5000);

  function autoPlay() {
    img[actualIndex].classList.remove("active");
    pagination[actualIndex].classList.remove("active");
    actualIndex >= img.length - 1 ? (actualIndex = 0) : actualIndex++;
    img[actualIndex].classList.add("active");
    pagination[actualIndex].classList.add("active");
  }

  next.addEventListener("click", function () {
    img[actualIndex].classList.remove("active");
    pagination[actualIndex].classList.remove("active");
    actualIndex >= img.length - 1 ? (actualIndex = 0) : actualIndex++;
    img[actualIndex].classList.add("active");
    pagination[actualIndex].classList.add("active");
  });

  back.addEventListener("click", function () {
    img[actualIndex].classList.remove("active");
    pagination[actualIndex].classList.remove("active");
    actualIndex <= 0 ? (actualIndex = img.length - 1) : actualIndex--;
    img[actualIndex].classList.add("active");
    pagination[actualIndex].classList.add("active");
  });
});
