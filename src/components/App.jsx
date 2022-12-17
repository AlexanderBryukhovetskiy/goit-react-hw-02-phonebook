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

    onSubmitHandler = contact => { 
        console.log('onSubmit contact:', contact);        
        
        this.setState(  (prevState) => {
            ({contacts: [...prevState.contacts, contact] })
        })
    }
    

    render () {
        return (            
                <Container>
                    <h1>Phone-book</h1>
                    <Form onSubmit={this.onSubmitHandler}/>
                
                
                    
                    {(this.state.contacts) && <ContactList contacts={this.state.contacts}/>}  
                </Container>
        )
    }
};

export default App;

