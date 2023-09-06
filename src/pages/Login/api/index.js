import axiosInstance from "../../../axios"

const loginApi = {
    login: async (data) => {
        const res = await axiosInstance.post('/auth/login', data);
        return res.data;
    }
}
export default loginApi