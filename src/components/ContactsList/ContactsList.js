import React from 'react';
import PropTypes from 'prop-types';

export default function ContactsList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>                    
                    {name}: {number}
                    <button
                        typy="button"
                        onClick={()=>onDeleteContact(id)}
                    >                       
                        Delete
                    </button>
               </li> 
            ))
            }
        </ul>
    )
};

ContactsList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
}