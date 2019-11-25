import axios from 'axios';

// 获取权限列表的接口
export const getAuth = () => axios.get('/auth');

export default {};
