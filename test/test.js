
const usersURL = 'https://jsonplaceholder.typicode.com/posts'
const button = document.querySelector('.action-button')

function sendRequest() {
	return fetch(usersURL)
		.then(response => response.json())
		.then(data => ap)
}


async function testFunc() {
	await sendRequest
	console.log(sendRequest())
}



button.addEventListener('click',testFunc)