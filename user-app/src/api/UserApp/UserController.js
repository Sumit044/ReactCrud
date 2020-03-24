import Axios from "axios"

class UserController {
    retriveAllUsers() {
        return Axios.get('https://spring-mysql.herokuapp.com/rest/users');
    }

    createUser(user) {
        return Axios.post('https://spring-mysql.herokuapp.com/rest/users', user);
    }

}

export default new UserController()