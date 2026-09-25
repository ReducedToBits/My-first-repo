document.getElementById("login").onclick = function() {
    const ID = document.getElementById("id-user").value;
    const password = document.getElementById("user-password").value;
    if (ID == "SpreadLove" && password == "easypassword") {
        window.location.href = "dashboard.html"
    } else if (ID == "" || password == "") {
        document.getElementById("wrong-cred-popup").textContent = "\u24D8 Please fill in all fields";
    } else {
        document.getElementById("wrong-cred-popup").textContent = "\u24D8 Invalid User-ID or Password";
    }
}
