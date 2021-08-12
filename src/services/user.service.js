let URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
  return fetch(URL)
      .then(value => value.json());
}
const getOneUser = (id) => {
  return fetch(`${URL}/${id}`)
      .then(value => value.json());
}
export {getUsers, getOneUser};
