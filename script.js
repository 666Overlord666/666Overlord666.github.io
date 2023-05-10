function verificar() {
    var senha = document.getElementById("senha").value;
    if (senha == "livre arbitrio") {
        window.location.href = "destino.html";
    } else {
        alert("Senha incorreta!");
    }
}