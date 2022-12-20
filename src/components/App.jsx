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
  }

  onSubmitHandler = newContact => { 
    const contacts = this.state.contacts;
    const isUnique = contacts.filter( contactInBook => 
      contactInBook.name === newContact.name);
    
    if (isUnique.length > 0) {
      return alert (`${newContact.name} is already in contacts.`);
    }
    else {
      this.setState(  (prevState) => {
        return ({contacts: [...prevState.contacts, newContact] })
      })
      //console.log('newContact added to phonebook');
    }
}

  onHandleFilter = event => {
    const value =  event.currentTarget.value;
    this.setState({filter: value});
  }

  searchName = () => {
    const searchingName = this.state.filter.toLowerCase();

    return this.state.contacts.filter( contact => (
      contact.name.toLowerCase().includes(searchingName)
    ));
  }

  deleteContact = id => { 
    this.setState(  prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== id)
    }))
  }

  render () {
    const {contacts, filter} = this.state;
    return (  
        <Container>
          <div className={css.phoneBookContainer}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm 
            onSubmit={this.onSubmitHandler}/>
          </div>

          <h2 className={css.title}>Contacts</h2> 

          <Filter 
          valueFilter={filter} 
          onChangeFilter={this.onHandleFilter}/>  
            
          { contacts.length > 0 && 
          (<ContactList contacts={this.searchName()} onBtnClick={this.deleteContact}/>)}  

        </Container>
      
    )
  }
};

export default App;

