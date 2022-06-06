//AREA BERMAIN

// Menentukan Jawaban Komputer
function Komputer() {
  const Comp = Math.round(Math.random() * 10);
  if (Comp > 7) {
    return "orang";
  } else if (Comp > 3 && Comp <= 7) {
    return "gajah";
  } else {
    return "semut";
  }
}
// Rules Permainan
function hasil(Comp, saya) {
  if (saya == Comp) {
    return "Seri";
  } else if (saya == "orang") {
    if (Comp == "gajah") {
      return "kalah";
    } else {
      return "Menang";
    }
  } else if (saya == "gajah") {
    if (Comp == "semut") {
      return "kalah";
    } else {
      return "Menang";
    }
  } else if (saya == "semut") {
    if (Comp == "orang") {
      return "kalah";
    } else {
      return "Menang";
    }
  }
}

// Seleksi 1
const pil1 = document.querySelector(".orang");
const info = document.querySelector(".info");
const txt = document.createElement("p");
info.appendChild(txt);
let time = 10;
pil1.addEventListener("click", function () {
  // const caseComputer = Komputer();
  // const TakeComputer = document.querySelector(".img-komputer");
  // TakeComputer.setAttribute("src", "img/" + caseComputer + ".png");
  // const hitung = setInterval(function () {
  const caseComputer = Komputer();
  const no1 = pil1.className;
  const jawab = hasil(caseComputer, no1);
  const TakeComputer = document.querySelector(".img-komputer");
  putar();
  setTimeout(function () {
    TakeComputer.setAttribute("src", "img/" + caseComputer + ".png");

    console.log("Aku Memilih " + no1);
    console.log("Komputer Memilih " + caseComputer);
    console.log("Maka aku " + jawab);
    //   let waktu = time % 1;
    //   console.log(time);
    //   if (time < 1) {
    //     clearInterval(hitung);
    txt.innerHTML = jawab;
  }, 1000);
  //     // const ulang = setTimeout(Diulang, 1000);
  //   } else {
  //     time--;
  //     if (time % 2 == 0) {
  //       txt.innerHTML = "menang";
  //     } else {
  //       txt.innerHTML = "kalah";
  //     }
  //   }
  // }, 100);
});

// Seleksi Ke dua
const pil2 = document.querySelector(".gajah");
pil2.addEventListener("click", function () {
  // const caseComputer = Komputer();
  // const TakeComputer = document.querySelector(".img-komputer");
  // TakeComputer.setAttribute("src", "img/" + caseComputer + ".png");
  // const hitung = setInterval(function () {
  const caseComputer = Komputer();
  const no2 = pil2.className;
  const jawab = hasil(caseComputer, no2);
  const TakeComputer = document.querySelector(".img-komputer");
  putar();

  setTimeout(function () {
    TakeComputer.setAttribute("src", "img/" + caseComputer + ".png");
    console.log("Aku Memilih " + no2);
    console.log("Komputer Memilih " + caseComputer);
    console.log("Maka aku " + jawab);

    //   let waktu = time % 1;
    //   console.log(time);
    //   if (time < 1) {
    //     clearInterval(hitung);
    txt.innerHTML = jawab;
  }, 1000);
  //     // const ulang = setTimeout(Diulang, 1000);
  //   } else {
  //     time--;
  //     if (time % 2 == 0) {
  //       txt.innerHTML = "menang";
  //     } else {
  //       txt.innerHTML = "kalah";
  //     }
  //   }
  // }, 100);
});

// Seleksi 3
const pil3 = document.querySelector(".semut");
pil3.addEventListener("click", function () {
  // const caseComputer = Komputer();
  // const TakeComputer = document.querySelector(".img-komputer");
  // TakeComputer.setAttribute("src", "img/" + caseComputer + ".png");
  // const hitung = setInterval(function () {
  const caseComputer = Komputer();
  const no3 = pil3.className;
  const jawab = hasil(caseComputer, no3);
  const TakeComputer = document.querySelector(".img-komputer");
  putar();
  setTimeout(function () {
    TakeComputer.setAttribute("src", "img/" + caseComputer + ".png");
    // console.log("Aku Memilih " + no3);
    // console.log("Komputer Memilih " + caseComputer);
    // console.log("Maka aku " + jawab);

    txt.innerHTML = jawab;
  }, 1000);
  // let waktu = time % 1;
  // console.log(time);
  // if (time < 1) {
  //   clearInterval(hitung);
  //   txt.innerHTML = jawab;
  //   // const ulang = setTimeout(Diulang, 1000);
  // } else {
  //   time--;
  //   if (time % 2 == 0) {
  //     txt.innerHTML = "menang";
  //   } else {
  //     txt.innerHTML = "kalah";
  //   }
  // }
  // }, 100);
});
// function Diulang() {
//   let rr = confirm("mau di ulang");
//   if (rr == true) {
//     location.reload();
//   } else {
//     alert("terimakasih");
//   }
// }
function putar() {
  const setGambar = document.querySelector(".img-komputer");
  const gambar = ["orang", "gajah", "semut"];
  let i = 0;
  const waktu = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktu > 1000) {
      clearInterval;
      console.log(putar);
      return;
    }
    setGambar.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}
// Sampe Sini

// TAMPILAN AWAL
const tampilan = document.querySelector(".container2");
const skip = document.querySelector(".play");
const main = document.querySelector(".area-main");
skip.classList.toggle("active");
skip.addEventListener("click", function () {
  tampilan.style.display = "none";
  tampilan.style.transition = "all 1s";
  main.style.display = "block";
});
