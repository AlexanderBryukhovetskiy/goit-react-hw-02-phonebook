import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

export const ContactList = ({contacts}) => {
    return (
        <ul className={css.list}>
                {contacts.map( contact => {
                    <li key={contact.id} class={css.listItem}>
                        <p>{contact.name} : &nbsp</p>
                        <p>{contact.tel}</p>
                    </li>
                })}
        </ul>
    )
}

ContactList.propTypes={
    contacts: PropTypes.arrayOf ({
        contact: PropTypes.shape ({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            tel: PropTypes.string.isRequired})
    }).isRequired 
}
