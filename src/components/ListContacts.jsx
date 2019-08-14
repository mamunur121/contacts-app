import React from 'react';
import PropTypes from 'prop-types';

class ListContacts extends React.Component{
    state = {value: ''};

    handleChange =(event)=> {
        this.setState({value: event.target.value.trim()});
    };

    clearQuery =()=> {
      this.setState({
          value: ''
      })
    };


    render() {
        const {value} = this.state;
        const {contacts, onDeleteContact} = this.props;

        const showingContacts = (value === '')
            ? contacts
            : contacts.filter(c=> (
                c.name.toLowerCase().includes(value.toLowerCase())
            ));
        return(
            <div className='list-contacts'>
                {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input
                        type='text'
                        className='search-contacts'
                        placeholder='Search Contacts...'
                        value={value}
                        onChange={this.handleChange}
                    />
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>
                            Now showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {showingContacts.map(person =>(
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
                            <button
                                className='contact-remove'
                                onClick={()=> onDeleteContact(person)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

        );
    }


}

ListContacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired
};


export default ListContacts;