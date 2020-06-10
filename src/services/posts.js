import axios from 'axios';

const basePostsServices = axios.create({
  baseURL: 'http://localhost:3010/api/posts'
});

const listPosts = (kind) => {
  return basePostsServices
    .get('', { params: { kind } })
    .then((res) => {
      return Promise.resolve(res.data.post);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const createPost = (post) => {
  console.log(post);
  /*
  kind:produtos
  material:aluminum
  description:post test 2
  userCreator:5ede769dc4e0686de8cc6eb3
  location:30, -9
  */
};

export { listPosts, createPost };
