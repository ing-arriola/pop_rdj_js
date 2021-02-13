import axios from "axios";
const API_URL = "https://backend-pop.herokuapp.com/";
class AuthServices{
    async register(userObject) {
         return await axios.post(API_URL + "api/user/register", userObject);
    }
    async getUsers() {
        return await axios.get(API_URL + "api/user/getUsers");
    }
}
export default new AuthServices();
