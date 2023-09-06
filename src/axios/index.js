import axios from 'axios'


const axiosInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_URL
    }
)
const getToken = () => {
    const token = localStorage.getItem('token');
    console.log('TOKEEEN', token)
    return token;
}
export const axiosPrivate = axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_URL,

    }
)
axiosPrivate.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            };
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
export default axiosInstance; 
