import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;

    const filterContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );

    return (
      <div>
        <p>Contacts</p>
        <ul>
          {filter === ''
            ? contacts.map(contact => (
                <li key={contact.id}>
                  <p>{contact.name}: {contact.number}</p>
                  <button onClick={deleteContact} type='button'>Delete</button>
                </li>
              ))
            : filterContacts.map(contact => (
                <li key={contact.id}>
                  <p>{contact.name}: {contact.number}</p>
                  <button onClick={deleteContact} type='button'>Delete</button>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}
