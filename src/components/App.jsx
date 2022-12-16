import React, { Component }  from "react";
// import css from "./App.module.css";
import { Form } from "./Form";
import Container from "./Container";
import { ContactList } from "./ContactList";



export class App extends Component {

    state = {
        contacts: [],
        name: ''
    }

    onSubmitHandler = data => { 
        console.log('onSubmit data:', data);        
        
        this.setState(  (prevState) => {
            return ({contacts: [...prevState.contacts, data]})
        })
    }
    

    render () {
        return (
            <Container>
                <Form onSubmit={this.onSubmitHandler}/>

                {(this.state.contacts) && <ContactList contacts={this.state.contacts}/>}

            </Container>
        )
    }
};

export default App;