import React, {Component} from 'react'
import UserController from '../api/UserApp/UserController.js'
import ReactHtmlParser from 'react-html-parser';

export default class UserApp extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            headers : [],
            footers : []
        }

        this.retreiveNews = this.retreiveNews.bind(this);
        
    }

    
    render () {
        //const Entities = require('html-entities').AllHtmlEntities;
        //const entities = new Entities();
        const headerVal = this.state.headers.map(xyz=>xyz.contentNodes.body.value);
        const footerVal = this.state.footers.map(xyz=>xyz.contentNodes.body.value);
         return (
             
        <div>
            <div className='UserApp'>
                <h1>Demo</h1>
            </div>

            <div className='container'>
                <button onClick={this.retreiveNews}>Click here !!</button>
                <div className = "container">
                {this.state.headers.length? ReactHtmlParser(headerVal) : null}
                <br/>
                <br/>
                {this.state.footers.length? ReactHtmlParser(footerVal) : null}
                </div>
            </div>
        </div>
        );
    }

    retreiveNews() {
        UserController.retriveHeader()
        .then(response => this.setState({headers : response.data.items}));

         UserController.retriveFooter()
        .then(response => this.setState({footers : response.data.items}));

    }

}