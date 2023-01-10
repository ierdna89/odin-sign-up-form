const listenEnterPassword = document.getElementById("password");
const listenRepeatPassword = document.getElementById("confirm-password");
const errorText = document.getElementById("error-text");
const createAccountButton = document.getElementById("create-account");
const signupForm = document.getElementById("subscribeform");

signupForm.onsubmit = function(e) {

	const enterPassword = document.getElementById("password").value;
	const repeatPassword = document.getElementById("confirm-password").value;

	if (enterPassword === repeatPassword) {
		listenEnterPassword.style.borderColor = "green";
		listenRepeatPassword.style.borderColor = "green";
		errorText.innerHTML = "";
		alert('Signed up!');
		// Disable on successful sign-up — but don't disable pending valid input!
		createAccountButton.disabled = 'true';
	}
	else {
		event.preventDefault();
		errorText.innerHTML = "*Passwords don't match";
		listenEnterPassword.style.borderColor = "red";
		listenRepeatPassword.style.borderColor = "red";
	}
}
