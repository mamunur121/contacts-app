import React, { Component } from 'react';

class ListContacts extends Component {

    render() {
        console.log('props', this.props);
        const {contacts} = this.props;
        return (
            <ol className='contact-list'>
                {contacts.map(person =>(
                    <li key={person.id} className='contact-list-item'>
                        <div
                            className='contact-avatar'
                            style={{
                                backgroundImage: `url(${person.avatarURL})`
                            }}
                        >
                        </div>
                        <div className='contact-details'>
                            <p>{person.name}</p>
                            <p>{person.handle}</p>
                        </div>
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts;