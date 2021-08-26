import axios from 'axios';

const axiosWithAuth=()=>{
    const token=localStorage.getItem("token")
    console.log(token);
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://ft-african-marketplace-05-back.herokuapp.com/api"
    });
};
export default axiosWithAuth;