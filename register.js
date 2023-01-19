let regisBTN = document.getElementById("submit");
regisBTN.onclick = regis;

function regis(e) {
  e.preventDefault();

  let emailLog = document.getElementById("email").value;
  let password1Log = document.getElementById("password1").value;
  let password2Log = document.getElementById("password2").value;

  let data = localStorage.getItem("info");
  data = JSON.parse(data);
  let locEmail = data.email;

  if (emailLog == locEmail) {
    if (password1Log == password2Log) {
      let Demail = emailLog.trim();
      let Dpassword = password1Log.trim();

      let infoSession = {
        email: Demail,
        password: Dpassword,
      };
      sessionStorage.setItem("infoSession", JSON.stringify(infoSession));
      alert("Berhasil Register");
      window.location = "masuk.html";
    } else {
      alert("Password Tidak Sama");
    }
  } else {
    alert("email anda salah, silahkan coba lagi");
    alert(
      "gunakan email yang digunakan saat mengisi formulir pendaftaran anggota"
    );
  }
}
