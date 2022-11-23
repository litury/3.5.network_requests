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
            fetch(`${URL}/${json[45].id}`)
                .then((response) => response.json())
                .then((data) => console.log(data))
        });
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

//getWithFetch();
//postWithFetch();