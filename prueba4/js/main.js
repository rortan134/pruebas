const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const sendBtn = document.getElementById("send-btn");
const passwordMessage = document.getElementById("password-message");

sendBtn.style.display = "none";
passwordMessage.style.display = "none";

function checkPassword() {
    if (password.value !== "" && repeatPassword.value !== "" > 0 && password.value === repeatPassword.value) {
        sendBtn.style.display = "inline";
        passwordMessage.style.display = "none";
    } else if (password.value !== "" && repeatPassword.value !== "" && password.value !== repeatPassword.value) {
        sendBtn.style.display = "none";
        passwordMessage.style.display = "block";
    }
}

password.addEventListener("input", () => checkPassword());
repeatPassword.addEventListener("input", () => checkPassword());
