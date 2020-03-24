import React, {Component} from 'react'
import UserController from '../api/UserApp/UserController.js'
import CreateUserComponent from '../components/CreateUserComponent'

export default class UserApp extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            users : []
        }

        this.retreiveAllUsers = this.retreiveAllUsers.bind(this);
        this.createNewUser=this.createNewUser.bind(this);
    }

    
    render () {
         return (
        <div>
            <div className='UserApp'>
                <h1>User Application</h1>
            </div>
            
            <div className='newUserForm'>
                <CreateUserComponent/>
            </div>

            <div className='container'>
                <button onClick={this.retreiveAllUsers}>Click here !!</button>

                <table className="container">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map (
                            user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phoneNumber}</td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        );
    }

    retreiveAllUsers() {
        UserController.retriveAllUsers()
        .then(response => this.setState({users : response.data}));
         //.catch(response => console.log(response))
    }

    createNewUser() {

    }
}