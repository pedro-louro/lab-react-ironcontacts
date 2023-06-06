import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

const contactsArray = contacts.slice(0, 5);

function App() {
  // const firstContacts = contacts.slice(0,5)

  const [firstContacts, setContacts] = useState(
    contactsArray
  );

  const addRandomContact = () => {
    const addedContacts = [...firstContacts];
    const randomContact = Math.floor(
      Math.random() * (contacts.length - 1 - 5) +
        5
    );
    addedContacts.push(contacts[randomContact]);
    setContacts(addedContacts);
  };

  const sortByName = () => {
    const toSortName = [...firstContacts];

    toSortName.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(toSortName);
  };

  const SortByPopularity = () => {
    const toSortNumber = [...firstContacts];
    toSortNumber.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(toSortNumber);
  };

  const removeContact = id => {
    const toDelete = [...firstContacts];
    const withDeletedContact = toDelete.filter(
      contact => id !== contact.id
    );
    setContacts(withDeletedContact);
  };

  return (
    <div className='App'>
      <h2>IronContacts</h2>
      <button onClick={() => addRandomContact()}>
        Add Random Contact
      </button>
      <button onClick={() => SortByPopularity()}>
        Sort by Popularity
      </button>
      <button onClick={() => sortByName()}>
        Sort By Name
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {firstContacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt='The contact/actor'
                    height='200'
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? '🏆' : ''}
                </td>
                <td>
                  {contact.wonEmmy ? '🏆' : ''}
                </td>
                <td>
                  <button
                    onClick={() =>
                      removeContact(contact.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
