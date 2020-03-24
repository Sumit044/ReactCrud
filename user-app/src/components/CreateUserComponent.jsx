import React, {Component} from 'react'
import { Formik, Form, Field } from 'formik'
import UserController from '../api/UserApp/UserController';

export default class CreateUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : '',
            phoneNumber : ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        console.log(values);
        UserController.createUser(values)
        .then(response => console.log(response))
    }


    render() {

        let name=this.state.name;
        let phoneNumber=this.state.phoneNumber;

        return <div>
                <h1>Create User</h1>
                <div className = 'container'>
                    <Formik 
                        initialValues = {{name, phoneNumber}}
                        onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className='form-group'>
                                        <label>Name</label>
                                        <Field className='form-control' type='text' name='name'></Field>
                                        <label>Contact Number</label>
                                        <Field className='form-control' type='text' name='phoneNumber'></Field>
                                        <button type='submit' className='btn btn-success' >Save</button>
                                    </fieldset>
                                </Form>
                            )
                        }
                    </Formik>
                    
                </div>
            </div>

    }


}
