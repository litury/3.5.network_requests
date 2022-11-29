/**
 * ========================================================= *
 *                     ДОМАШНЕЕ ЗАДАНИЕ
 * ========================================================= *
 *  1. Перепишите данные методы
 *  Вместо цепочки then используйте async\await
 * ========================================================= *
 */

/**
 * ----------------------- ПРИМЕР -------------------------- *
 *                         FETCH
 * ------------------ сетевые запросы ---------------------- *
 */
const URL = 'https://jsonplaceholder.typicode.com/posts';

function getWithFetch() {
	fetch(URL)
		.then((response) => response.json())
		.then((json) => {
			/**
			 * ------------------------------------------- *
			 *              ВАШ КОД ТУТ
			 * ------------------------------------------- *
			 * как вы можете переписать promise chaining
			 * через async await?
			 */
			console.log(json); // получили массив из 100 постов

			// сделали запрос чтобы получить подробные данные поста №45
			fetch(`${URL}/${json[44].id}`)
				.then((response) => response.json())
				.then((data) => console.log(data))
		});
}

async function getWithAsync(url) {

	const response = await fetch(`${url}`)
	const data = await response.json()

	console.log(data)

	const responseData = await fetch(`${url}/${data[44].id}`)
	const post = await responseData.json()

	console.log(post)
}

function postWithFetch() { // сохранение нового поста
	fetch(URL, {
		method: 'POST',
		body: JSON.stringify({
			title: 'test post 53x',
			body: 'lorem',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
}

async function postWithAsync(url) {
	const postSend = await fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			title: 'test post 53x',
			body: 'lorem',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	const data = await postSend.json()
	console.log(data)
}

//getWithFetch();
getWithAsync(URL)
postWithAsync(URL)
//postWithFetch();