import axios from 'axios';

class EmployeeService {

    getEmployees(){
        return axios.get("api/users");
    }
    getEmployeeById(Id){
        return axios.get("api/users/" + Id);
    }
}

export default new EmployeeService()