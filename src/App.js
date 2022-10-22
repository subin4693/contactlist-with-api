import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import './App.css';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(details => setContacts(details.results));
  }, [])

  return (
    <div>
      <input type="text" placeholder="search contacts..." onChange={(e) => setSearch(e.target.value)} />
      {

        search.length > 0
          ? contacts.map((contact) => {
            if (contact.name.first.includes(search) | contact.email.includes(search))
              return <ContactList age={contact.dob.age} 
                name={contact.name.first}
                email={contact.email}
                avatar={contact.picture.large} 
                key={Math.floor(Math.random() * 1000000000)} />
          })
          :        
          contacts.map((contact) => {
            return <ContactList age={contact.dob.age} 
              name={contact.name.first}
              email={contact.email}
              avatar={contact.picture.large} 
              key={Math.floor(Math.random() * 1000000000)} />
          })
      }
    </div>
  );  
}
export default App;