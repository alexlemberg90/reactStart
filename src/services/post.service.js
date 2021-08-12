import axios from "axios";

let postsUrl = {
    baseURL: `https://jsonplaceholder.typicode.com/posts`,
};

let posts = axios.create(postsUrl);

const getPosts = () => {
   return  posts.get('');
};
const getOnePost = (id) => {
  return posts.get(`/` + id);
};

export {getPosts, getOnePost};