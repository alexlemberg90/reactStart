let URL = 'https://jsonplaceholder.typicode.com/comments';

const getComments = () => {
    return fetch(URL)
        .then(value => value.json());
}
const getOneComment = (id) => {
    return fetch(`${URL}/${id}`)
        .then(value => value.json());
}
export {getComments, getOneComment};