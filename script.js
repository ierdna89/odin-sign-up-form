const listenEnterPassword = document.getElementById("password");
const listenRepeatPassword = document.getElementById("confirm-password");
const errorText = document.getElementById("error-text");
const createAccountButton = document.getElementById("create-account");

function checkPassword() {

	const enterPassword = document.getElementById("password").value;
	const repeatPassword = document.getElementById("confirm-password").value;

	if (enterPassword != repeatPassword) {
		errorText.innerHTML = "*Passwords don't match";
	}

	else {
		errorText.innerHTML = "";
	}
}


// listenEnterPassword.onkeyup = function() {checkPassword()};
// listenRepeatPassword.onkeyup = function() {checkPassword()};
createAccountButton.onclick = function() {checkPassword()};