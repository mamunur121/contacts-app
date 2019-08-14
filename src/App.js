import React from 'react';
import './App.css';

import ListContacts from "./components/ListContacts";


class App extends React.Component{
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ],
  };

  // clicking a button one of the contact details will disappear;
  removeContact = (contact) => {
    this.setState((currentState)=> ({
      contacts: currentState.contacts.filter((c)=> {
       // console.log(c.id);
        return c.id !== contact.id;
      })
    }))
  };
  render() {
    return(
        <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
        />
    );
  }
}


export default App;
