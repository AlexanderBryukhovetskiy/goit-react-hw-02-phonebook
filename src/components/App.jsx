import React, { Component }  from "react";
import css from "./App.module.css";
import { ContactForm } from "./ContactForm";
import Container from "./Container";
import { ContactList } from "./ContactList";
import {Filter} from "./Filter";



export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  onSubmitHandler = contact => { 
    console.log('onSubmit contact:', contact);        
    
    this.setState(  (prevState) => {
      return ({contacts: [...prevState.contacts, contact] });
    })
  }

  onHandleFilter = event => {
    const value =  event.currentTarget.value;
    
    this.props.onChange({...this.state, filter: value});

  //   this.setState( (prevState) => {
  //     return ({...prevState, filter: value})
  // });
    

    // render ()
  }
  
  render () {
    return (  
        <Container>
          <div className={css.phoneBookContainer}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onSubmit={this.onSubmitHandler}/>
          </div>
          <h2 className={css.title}>Contacts</h2>  


          <Filter inputValue={this.state.filter}      OnChange={this.onHandleFilter}/>    



          {/* <label>Find contact by name
            <input
            type="text"
            value={this.state.filter}
            onChange={this.handleInput}
            />
          </label> */}

          {/* { this.state.contacts.length > 0 
          && (<div>
                <h1 className={css.title}>Contacts</h1>
                <ContactList contacts={this.state.contacts}/>
              </div>)
          }   */}


          {/* { this.state.contacts.length > 0 
          && (<div>
                
                <ContactList contacts={this.state.contacts}/>
              </div>)
          }   */}
        </Container>
      
    )
  }
};

export default App;

