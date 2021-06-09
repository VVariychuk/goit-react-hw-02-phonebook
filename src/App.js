import React, { Component } from 'react';
import shortid from 'shortid';

import AddContactsForm from './components/AddContactsForm'
import ContactList from './components/ContactsList';
import Section from './components/Section';

class App extends Component {
  static defaultProps = {
    id: '5'
  }
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

  AddContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    }
    // this.props.id = this.props.id + 1
    this.setState(({ contacts })=> ({
      contacts: [contact, ...contacts]
    }))
  };

  DeleteContacts = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  };

  render() {
    const { contacts} = this.state;
    return (
      <>
        <Section
          title={'Phonebook'}
          children={
            <AddContactsForm onSubmit={this.AddContact}
            />
          }
        />
        <Section
          title={'Contacts'}
          children={
            <ContactList
              contacts={contacts}
              onDeleteContact={this.DeleteContacts}
            />
          }
        />
      </>
        
      
    )
   
  };
}
export default App;