import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (errors) => {
        const { response } = errors;
        if (response.status == 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }

        throw errors;
    }
);

export default axiosClient;
