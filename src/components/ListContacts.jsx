import React, { Component } from 'react';

class ListContacts extends Component {

    render() {
        console.log('props', this.props);
        const {contacts} = this.props;
        return (
            <ol className='contact-list'>
                {contacts.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ol>
        )
    }
}

export default ListContacts;