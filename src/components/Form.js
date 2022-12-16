import React, { Component } from "react";
import css from "./Form.module.css";
import { nanoid } from 'nanoid'

const initialState = {
    name: '',
    number: '',
    id: ''
}

export class Form extends Component {
    state = initialState;

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value, id: nanoid()});

        console.log("name:", name, "value: ", value);
    }  
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState(initialState);
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
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </label>

                <label>Number
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
                />
                </label>

            <button className={css.submitBtn} type="submit">Add contact</button>

        </form>
        )
    }

} 