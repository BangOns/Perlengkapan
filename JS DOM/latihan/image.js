const container = document.querySelector(".container");
const gambar = document.querySelectorAll(".thumb");
const gam1 = document.querySelector(".gam1");
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    gam1.src = e.target.src;
    gam1.style.width = "600px";
    gam1.classList.add("fade");
    setTimeout(function () {
      gam1.classList.remove("fade");
    }, 500);
    gambar.forEach(function (gamb) {
      //   if (gamb.classList.contains("active"));
      //   gamb.classList.remove("active");
      gamb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
