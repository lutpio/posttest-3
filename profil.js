let x = localStorage.getItem("info");
x = JSON.parse(x);

document.getElementById("sapa").innerHTML = "Profil Lengkap, " + x.nama;

document.getElementById("nama").value = x.nama;
document.getElementById("kelamin").value = x.kelamin;
document.getElementById("kelas").value = x.kelas;
document.getElementById("asal").value = x.sekolah;
document.getElementById("mengikuti").value = x.mengikuti;
document.getElementById("alat").value = x.alat;
document.getElementById("penyakit").value = x.penyakit;
document.getElementById("email").value = x.email;
