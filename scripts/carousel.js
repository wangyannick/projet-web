window.addEventListener("load", function () {
  const img = document.querySelector(".carousel").querySelectorAll("img");
  let actualIndex = 0;
  var intervalID = window.setInterval(myCallback, 5000);

  function myCallback() {
    actualIndex >= img.length - 1 ? (actualIndex = 0) : (actualIndex += 1);
    console.log(actualIndex);
    img[
      actualIndex - 1 < 0 ? img.length - 1 : actualIndex - 1
    ].classList.remove("active");
    img[actualIndex].classList.add("active");
  }
});
