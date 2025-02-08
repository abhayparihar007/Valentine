const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'yashika'; // Replace with your secret code
const secretCode2 = 'karishma'; 
const secretCode3 = 'kashish'; 
const secretCode4 = 'mansi'; 
const secretCode5 = 'disha'; 
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	}else if (userInput === secretCode2) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	}else if (userInput === secretCode3) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	}else if (userInput === secretCode4) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else if (userInput === secretCode5) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} 
	else {
		resultDiv.innerHTML = 'Please enter correct password to know my feelings';
	}
});
