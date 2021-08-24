import axios from 'axios';

const axiosWithAuth=()=>{
    const token=localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://ft-african-marketplace-05-back.herokuapp.com/api',
        headers: {
            authorization:token
        }
    });
};
export default axiosWithAuth;