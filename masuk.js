let loginBTN = document.getElementById("login");
loginBTN.onclick = login;

function login(e) {
  e.preventDefault();

  let emailLog = document.getElementById("email").value;
  let passwordLog = document.getElementById("password").value;

  let data = sessionStorage.getItem("infoSession");
  data = JSON.parse(data);
  let locEmail = data.email;
  let locPassword = data.password;

  if (locEmail == emailLog && locPassword == passwordLog) {
    alert("Berhasil Login");
    window.location = "index.html";
  } else {
    alert("Email / Password salah");
  }
}
