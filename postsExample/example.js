/**
 * =================================================== *
 *                  ДОМАШНЕЕ ЗАДАНИЕ
 * =================================================== *
 * 1. Изучите пример (для наглядности в браузере установите задержку на несколько секунд)
 * 2. Добавьте возможность в ручную устанавливать количество постов (число может задавать пользователь на странице)
 * 3. Вместе с постами запрашивать пользователей по их идентификаторам (поле userId из posts) используя https://jsonplaceholder.typicode.com/users
 * 4. Вместе с постами выводите имя из поля username и город из поля city
 * =================================================== *
 * @param usersURL
 */

const postsURL = 'https://jsonplaceholder.typicode.com/posts'
const usersURL = 'https://jsonplaceholder.typicode.com/users'
const button = document.querySelector('.action-button')
const radio = document.querySelector('.radio-buttons')
const postCounter = document.querySelector('.post-number')


// вспомогательный обработчик очистки предидущих запросов
radio.addEventListener('click', () => {
	const wraper = document.querySelector('.rectangles-wraper')
	wraper.innerHTML = ''
	const data = document.querySelector('.data-wraper')
	data.innerHTML = ''
	const status = document.querySelector('.status')
	status.innerHTML = ''
})

// вставка в код текущего состояния выполнения
function showCurrentStep(text) {
	const wrap = document.querySelector('.status')
	wrap.insertAdjacentHTML('beforeend', `<div>${text}</div>`)
}

function drawRectangles() {
	showCurrentStep('3 - рисуем прямоугольники');

	const wraper = document.querySelector('.rectangles-wraper')
	wraper.innerHTML = ''

	for (let i = 0; i < postCounter.value; i++) {
		const rectangle = document.createElement('div')
		rectangle.className = 'rectangle'
		wraper.appendChild(rectangle)
	}
}

function appendPosts(posts, users) {
	showCurrentStep('2 - вставляем данные в html');

	const wraper = document.querySelector('.data-wraper')
	wraper.innerHTML = ''

	for (let i = 0; i < postCounter.value; i++) {
		showCurrentStep('1.5 - отправляем запрос юзеров');

		const post = document.createElement('div')
		const user = document.createElement('div')

		post.className = 'post'
		post.textContent = posts[i].title
		user.className = 'user'
		user.textContent = `Автор ${users[posts[i].id].username}, из ${users[posts[i].id].address.city}`

		wraper.appendChild(post)
		post.appendChild(user)
	}
}


async function sendRequest() {
	showCurrentStep('1 - отправляем запрос постов');

	const responsePost = await fetch(`${postsURL}`)
	const dataPost = await responsePost.json()

	const responseUsers = await fetch(`${usersURL}`)
	const dataUsers = await responseUsers.json()

	appendPosts(dataPost, dataUsers)
}

async function showDifferentFunction() {
	const isBlockFunction = document.querySelector('input[name="type"]:checked').value;

	// 1 Отправляем запрос -> получаем посты  /// 2 - вставляем данные в html
	isBlockFunction == 1 ? sendRequest() : await sendRequest()

	// 3 Отрисовываем прямоугольники
	drawRectangles()

}

button.addEventListener('click', showDifferentFunction)