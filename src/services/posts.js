import axios from 'axios';

const basePostsServices = axios.create({
  baseURL: 'http://localhost:3010/api/posts'
});

const listPosts = (kind) => {
  return basePostsServices
    .get('', { params: {kind} })
    .then((res) => {
      return Promise.resolve(res.data.post);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { listPosts };
