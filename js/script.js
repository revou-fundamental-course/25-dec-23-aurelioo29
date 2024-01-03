const luasBtn = document.getElementById("luasBtn");
const kelilingBtn = document.getElementById("kelilingBtn");
const luasSection = document.getElementById("hitungLuas");
const kelilingSection = document.getElementById("hitungKeliling");

// hide body section, onLoadingScreen
luasSection.style.display = "none";
kelilingSection.style.display = "none";

luasBtn.addEventListener("click", function () {
  luasSection.style.display = "block"; // Tampilkan section luas
  kelilingSection.style.display = "none"; // Sembunyikan section keliling
});

kelilingBtn.addEventListener("click", function () {
  luasSection.style.display = "none"; // Sembunyikan section luas
  kelilingSection.style.display = "block"; // Tampilkan section keliling
});

// luas function
function Luas() {
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;
  if (alas == "" || tinggi == "") {
    alert("Harap masukan angka, tidak boleh kosong !!!");
  } else if (parseFloat(tinggi) <= 0 || parseFloat(alas) <= 0) {
    alert("Tinggi dan Alas harus bilangan positif");
  } else {
    var rumusluas = (1 / 2) * (alas * tinggi);
    document.getElementById(
      "operasiLuas"
    ).innerHTML = `Luas Segitiga = 1/2 x (${alas} x ${tinggi})`;
    document.getElementById(
      "resultLuas"
    ).innerHTML = `Luas Segitiga = ${rumusluas}`;
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
  }
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("resultLuas").innerHTML = "";
  document.getElementById("operasiLuas").innerHTML = "";
}

// keliling section
function Keliling() {
  var sisi1 = document.getElementById("sisi1").value;
  var sisi2 = document.getElementById("sisi2").value;
  var sisi3 = document.getElementById("sisi3").value;

  if (sisi1 == "" || sisi2 == "" || sisi3 == "") {
    alert("Harap masukan angka, tidak boleh kosong !!!");
  } else if (
    parseFloat(sisi1) <= 0 ||
    parseFloat(sisi2) <= 0 ||
    parseFloat(sisi3) <= 0
  ) {
    alert("Sisi harus bilangan positif");
  } else {
    var rumuskeliling =
      parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    document.getElementById(
      "operasiKeliling"
    ).innerHTML = `Keliling Segitiga = ${sisi1} + ${sisi2} + ${sisi3}`;
    document.getElementById(
      "resultKeliling"
    ).innerHTML = `Keliling Segitiga = ${rumuskeliling}`;
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
  }
}

function resetKeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("operasiKeliling").innerHTML = "";
  document.getElementById("resultKeliling").innerHTML = "";
}
