import React, { Component } from 'react';
import ContactForm from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  hendleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = ({ name, number }) => {
    const newContact = {
      id: `id-${nanoid()}`,
      name,
      number,
    };

    const isExist = this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase() || el.number === number
    );

    if (isExist) {
      alert('Contact already exists');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilterContacts();
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm
          handleSubmit={this.handleSubmit}
          // handleChange={this.handleChange}
        />
        <Filter hendleChangeFilter={this.hendleChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
