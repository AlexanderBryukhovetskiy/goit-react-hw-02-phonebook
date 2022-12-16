import React, { Component } from "react";
import css from "./Form.module.css";
// import { nanoid } from 'nanoid'



export class Form extends Component {
    state = {
        name: '',
        contactName: ''
        // value: ''
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value});

        console.log("name:", name, "value: ", value);
    }  
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        
        this.props.onSubmit(this.state);

        this.reset();
    }

    reset = () => {
        this.setState ({ name: '', contactName: ''});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.setState.contactName}
                onChange={this.handleChange}
                />
            </label>

            <button className={css.submitBtn} type="submit">Add contact</button>

        </form>
        )
    }

} 