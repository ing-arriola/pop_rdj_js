import axios from "axios";
const API_URL = "http://localhost:3005/";
class AuthServices{
    async register(userObject) {
         return await axios.post(API_URL + "api/user/register", userObject);
    }
}
export default new AuthServices();
