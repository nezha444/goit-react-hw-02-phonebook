import React, { Component } from 'react';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';

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

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget
    const name = form.elements.name.value
    const number = form.elements.number.value
    const newContact = {
      id: `id-${this.state.contacts.length + 1}`,
      name: name,
      number: number,
    };
    
    if (this.state.contacts.some(el => el.name === name && el.number === number)) {
      alert('Contact already exists');
    } else {
      this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }));
    }

    form.reset();
  };

  deleteContact = (event) => {
    console.log('sadsadas');

  }
  

  render() {
    // const { contacts, name } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Filter hendleChangeFilter={this.hendleChangeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
