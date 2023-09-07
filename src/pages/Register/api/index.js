import axiosInstance from "../../../axios";

const registerApi = {
    register: async (data) => {
        const res = await axiosInstance.post('/auth/register', data);

        return res.data;
    }
}
export default registerApi; 