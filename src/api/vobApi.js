import axiosClient from './axiosClient';

const vobApi = {
  getAll: (params) => {
    return axiosClient.get('/api/vob', { params });
  },
};

export default vobApi;
