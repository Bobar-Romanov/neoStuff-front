import axios from 'axios';

const API = "http://localhost:8080";

class ListService {

    getEmployees(){
        return axios.get(API + "/users");
    }
    getEmployeeById(Id){
        return axios.get(API + "/users" + "/" + Id);
    }
}

export default new ListService()