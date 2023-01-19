let namaInput = document.getElementById("nama");
let emailInput = document.getElementById("email");
let kelasInput = document.getElementById("kelas");
let sekolahInput = document.getElementById("asal");
let alatInput = document.getElementById("alat");
let penyakitInput = document.getElementById("penyakit");
let alasanInput = document.getElementById("alasan");
let mengikutiInput = document.getElementById("mengikuti");
let kelaminInput = document.getElementById("kelamin");

document
  .getElementById("daftarForm")
  .addEventListener("submit", function (evt) {
    evt.preventDefault();

    var nama = namaInput.value.trim();
    var email = emailInput.value.trim();
    var kelas = kelasInput.value.trim();
    var sekolah = sekolahInput.value.trim();
    var alat = alatInput.value.trim();
    var penyakit = penyakitInput.value.trim();
    var alasan = alasanInput.value.trim();
    var mengikuti = mengikutiInput.value.trim();
    var kelamin = kelaminInput.value.trim();

    var info = {
      nama: nama,
      email: email,
      kelas: kelas,
      sekolah: sekolah,
      alat: alat,
      penyakit: penyakit,
      alasan: alasan,
      mengikuti: mengikuti,
      kelamin: kelamin,
    };

    localStorage.setItem("info", JSON.stringify(info));
    window.location = "index.html";
  });
