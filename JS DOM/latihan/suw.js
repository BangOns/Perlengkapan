var tanya = true;
while (tanya) {
  var saya = prompt("Pilih  ; gajah , orang ,semut");
  var comp = parseInt(Math.random() * 10);
  console.log(comp);

  if (comp > 7) {
    comp = "gajah";
  } else if (comp > 3 && comp <= 7) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  //   menentukan rules
  var hasil = " ";
  if (saya == comp) {
    hasil = "seri";
  } else if (saya == "gajah") {
    //   hasil = (comp == "orang")?'menang':'kalah;
    if (comp == "orang") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  } else if (saya == "orang") {
    //   hasil = (comp == "semut")?'menang':'kalah;

    if (comp == "semut") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  } else if (saya == "semut") {
    //   hasil = (comp == "gajah")?'menang':'kalah;

    if (comp == "gajah") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  } else {
    hasil = "masukkan nilai yang salah";
  }
  alert(
    "pilihan kamu " +
      saya +
      " dan komputer memilih " +
      comp +
      " maka hasilnya = " +
      hasil
  );
  tanya = confirm(" lagi ?");
}
alert("terimakasih");
