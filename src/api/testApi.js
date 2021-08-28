import axiosClient from "./axiosClient";

const testApi = {
    getAll: (params) => {
        return axiosClient.get('/api/vob', {params});
    }
}

export default testApi