// const comp = Math.round(Math.random() * 10);
function pilihanKom() {
  const comp = Math.round(Math.random() * 10);
  if (comp > 7) {
    return "gajah";
  } else if (comp > 3 && comp <= 7) {
    return "orang";
  } else {
    return "semut";
  }
}
function hasil(comp, saya) {
  if (saya == comp) return "seri";
  else if (saya == "gajah") return comp == "orang" ? "menang" : "kalah";
  // if (comp == "orang") {
  //   return "menang";
  // } else {
  //   return "kalah";
  // }
  if (saya == "orang") return comp == "semut" ? "menang" : "kalah";

  // if (comp == "semut") {
  //   return "menang";
  // } else {
  //   return "kalah";
  // }
  if (saya == "semut") return comp == "gajah" ? "menang" : "kalah";

  // if (comp == "gajah") {
  //   return "menang";
  // } else {
  //   return "kalah";
  // }
}
// Seleksi satu satu

// const Gajah = document.querySelector(".gajah");
// Gajah.addEventListener("click", function () {
//   const pilKom = pilihanKom();
//   const pilkita = Gajah.className;
//   const jawab = hasil(pilKom, pilkita);
//   const gamkom = document.querySelector(".img-komputer");
//   gamkom.setAttribute("src", "img/" + pilKom + ".png");
//   // console.log("pilihan komputer = " + pilKom);
//   // console.log(comp);
//   // console.log("pilihan saya = " + pilkita);
//   // console.log("jawaban " + jawab);
//   const info = document.querySelector("div.info");
//   info.innerHTML = jawab;
// });
// const orang = document.querySelector(".orang");
// orang.addEventListener("click", function () {
//   const pilKom = pilihanKom();
//   const pilkita = orang.className;
//   const jawab = hasil(pilKom, pilkita);
//   const gamkom = document.querySelector(".img-komputer");
//   gamkom.setAttribute("src", "img/" + pilKom + ".png");
//   // console.log("pilihan komputer = " + pilKom);
//   // console.log(comp);
//   // console.log("pilihan saya = " + pilkita);
//   // console.log("jawaban " + jawab);
//   const info = document.querySelector("div.info");
//   info.innerHTML = jawab;
// });
// const semut = document.querySelector(".semut");
// semut.addEventListener("click", function () {
//   const pilKom = pilihanKom();
//   const pilkita = semut.className;
//   const jawab = hasil(pilKom, pilkita);
//   const gamkom = document.querySelector(".img-komputer");
//   gamkom.setAttribute("src", "img/" + pilKom + ".png");
//   // console.log("pilihan komputer = " + pilKom);
//   // console.log(comp);
//   // console.log("pilihan saya = " + pilkita);
//   // console.log("jawaban " + jawab);
//   const info = document.querySelector("div.info");
//   info.innerHTML = jawab;
// });

// Seleksi langsung
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    console.log(pil);
    const pilKom = pilihanKom();
    const pilkita = pil.className;
    const jawab = hasil(pilKom, pilkita);
    putar();

    const gamkom = document.querySelector(".img-komputer");
    gamkom.setAttribute("src", "img/" + pilKom + ".png");
    // console.log("pilihan komputer = " + pilKom);
    // console.log(comp);
    // console.log("pilihan saya = " + pilkita);
    // console.log("jawaban " + jawab);
    const info = document.querySelector("div.info");
    info.innerHTML = jawab;
  });
});

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  });
}
