import React, { Component }  from "react";
import css from "./App.module.css";
import { Form } from "./Form";
import Container from "./Container";



export class App extends Component {

    state = {
        contacts: [],
        name: ''
    }

    onSubmitHandler = data => { 
        console.log('onSubmit data:', data);        
        
        this.setState(  prevState => {
            return {contacts: prevState.contacts+data}})
    }
    

    render () {
        return (
            <Container>
                <Form onSubmit={this.onSubmitHandler}/>
            </Container>
        )
    }
};

export default App;