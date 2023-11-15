import api from ".";

export default {
    find: () => api.get('/api/posts?populate=thumbnail,author').then(res => res.data.data),
    detail: (id) => api.get(`/api/posts/${id}?populate=thumbnail,author`).then(res => res.data.data),
};