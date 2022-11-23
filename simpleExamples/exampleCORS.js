/**
 * ----------------------- ПРИМЕР -------------------------- *
 *                         CORS
 * -------------- запрет на другой домен ------------------- *
 */
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

function getWithFetchCORS() {
    fetch(postsURL,{
        //CORS - имеет несколько вариантов(no-cors, *cors, same-origin)
        mode: 'same-origin',
    })
        .then((response) => response.json())
}
// вернет ошибку так запрос отправляется с другого адреса
getWithFetchCORS()