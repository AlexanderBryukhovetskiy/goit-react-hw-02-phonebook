import React, { Component } from "react";
import css from "./Form.module.css";


export class Form extends Component {
    state = {
        contacts: [],
        name: ''
    }



    render () {
        return (
            <form >
                <label>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>

                <button type="submit">Add contact</button>

            </form>
        )
    }

} 