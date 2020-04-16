import Axios from "axios"

class UserController {

    retriveHeader() {
        return Axios.get('http://localhost:8080/header');
    }

    retriveFooter() {
        return Axios.get('http://localhost:8080/footer');
    }

}

export default new UserController()