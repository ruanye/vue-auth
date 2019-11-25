import axios from 'axios';

axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err),
);
// 获取权限列表的接口
export const getAuth = () => axios.get('/auth');

export default {};
