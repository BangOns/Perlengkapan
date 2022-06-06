const h1 = document.querySelector("h1");
const pencet = document.querySelector(".click");
pencet.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  h1.style.color = `rgb(${r},${g},${b})`;
});
const tombol = document.createElement("button");
const textb = document.createTextNode("Tombol Acak");
tombol.setAttribute("type", "button");
tombol.appendChild(textb);
pencet.after(tombol);

tombol.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
// kotak 1
const longkap = document.querySelectorAll("br")[1];
const kotak1 = document.createElement("div");
kotak1.setAttribute("class", "kotakmerah");
kotak1.style.width = "30px";
kotak1.style.height = "30px";
kotak1.style.backgroundColor = "red";
kotak1.style.margin = "25px auto";
longkap.after(kotak1);

const range = document.createElement("input");
range.setAttribute("type", "range");
range.setAttribute("name", "smerah");
range.setAttribute("min", "0");
range.setAttribute("max", "255");
kotak1.after(range);

range.addEventListener("input", function () {
  console.log(range.value);
  const r = range.value;
  document.body.style.backgroundColor = `rgb(${r},0,0)`;
});

// kotak 2
const kotak2 = document.createElement("div");
kotak2.setAttribute("class", "kotakbiru");
kotak2.style.width = "30px";
kotak2.style.height = "30px";
kotak2.style.backgroundColor = "blue";
kotak2.style.margin = "25px auto";
range.after(kotak2);

const range2 = document.createElement("input");
range2.setAttribute("type", "range");
range2.setAttribute("name", "sbiru");
range2.setAttribute("min", "0");
range2.setAttribute("max", "255");
kotak2.after(range2);

range2.addEventListener("input", function () {
  console.log(range2.value);
  const r = range.value;
  const g = range2.value;
  document.body.style.backgroundColor = `rgb(${r},${g},0)`;
});

// kotak 3
const kotak3 = document.createElement("div");
kotak3.setAttribute("class", "kotakhijau");
kotak3.style.width = "30px";
kotak3.style.height = "30px";
kotak3.style.backgroundColor = "green";
kotak3.style.margin = "25px auto";
range2.after(kotak3);

const range3 = document.createElement("input");
range3.setAttribute("type", "range");
range3.setAttribute("name", "shijau");
range3.setAttribute("min", "0");
range3.setAttribute("max", "255");
kotak3.after(range3);

range3.addEventListener("input", function () {
  console.log(range.value);
  const r = range.value;
  const g = range2.value;
  const b = range3.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener("mousemove", function (e) {
  const xPose = Math.round((event.clientX / window.innerWidth) * 255);
  const yPose = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPose},${yPose},0)`;
});
