const listenEnterPassword = document.getElementById("password");
const listenRepeatPassword = document.getElementById("confirm-password");
const errorText = document.getElementById("error-text");
const createAccountButton = document.getElementById("create-account");
const signupForm = document.getElementById("subscribeform");

// function checkPassword() {

// 	const enterPassword = document.getElementById("password").value;
// 	const repeatPassword = document.getElementById("confirm-password").value;

// 	if (enterPassword != repeatPassword) {
// 		errorText.innerHTML = "*Passwords don't match";
// 		preventSubmit():
// 	}
// 	else {
// 		errorText.innerHTML = "";
// 	}
// }

// // listenEnterPassword.onkeyup = function() {checkPassword()};
// // listenRepeatPassword.onkeyup = function() {checkPassword()};
// createAccountButton.onclick = function() {checkPassword()};




// function preventSubmit() {
// 	signupForm.addEventListener("submit", 
// 		function(event) {
// 			event.preventDefault();
// 		}
// 	);
// }




createAccountButton.addEventListener("click", (e) =>
	{	

		const enterPassword = document.getElementById("password").value;
		const repeatPassword = document.getElementById("confirm-password").value;
		
		if (enterPassword != repeatPassword) {
			errorText.innerHTML = "*Passwords don't match";
			listenEnterPassword.style.borderColor = "red";
			listenRepeatPassword.style.borderColor = "red";
			console.log("click");
			event.preventDefault();
		}
		else {
			console.log("poc");
			listenEnterPassword.style.borderColor = "greeen";
			listenRepeatPassword.style.borderColor = "green";
			errorText.innerHTML = "";
		}
  	
});