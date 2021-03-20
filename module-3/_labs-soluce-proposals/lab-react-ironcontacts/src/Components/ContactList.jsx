import React, { Component } from "react";
import contactsFromJSON from "../contacts.json";
//       ^---------you can name it whatever you want when you import it
// the important part is the relative path
import "../App.css";

class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // allContacts: contactsFromJSON,
      firstVisibleContacts: contactsFromJSON.slice(0, 5),
    };
  }

  // Iteration 1 | Display 5 Contacts
  // Display that array of 5 contacts in a <table> and display the picture, name, and popularity of each contact.

  showContacts() {
    return this.state.firstVisibleContacts.map((currentContact, index) => {
      return (
        <tr key={index}>
          <td>
            <img
              className="img-fluid img-thumbnail celebImg"
              src={currentContact.pictureUrl}
              alt={currentContact.name}
            />
          </td>
          <td>{currentContact.name}</td>
          <td>{currentContact.popularity.toFixed(2)}</td>
          <td>
            <button
              className="btn btn-secondary"
              onClick={() => this.deleteContact(currentContact.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  // Iteration 2 | Add New Random Contacts
  // Create a Add Random Contact button so that every time
  // you click on this button, it adds a new random actor.

  addRandomContact() {
    // console.log("random clicked"); Always look if  you event handler works before any logic ;)
    let randomIndex = Math.floor(contactsFromJSON.length * Math.random()); // random number between 0 and contactsFromJSON.length (excluded)
    let randomContact = contactsFromJSON[randomIndex];

    // Method 1
    // Create a copy of this.state.firstVisibleContacts
    let newList = [...this.state.firstVisibleContacts];
    // push or unshift in the copy you just created
    newList.unshift(randomContact);
    // save it in the state
    this.setState({
      firstVisibleContacts: newList,
    });

    // Method 2
    // this.setState({
    //   firstVisibleContacts: [...this.state.firstVisibleContacts, randomContact]
    // })
  }

  // Iteration 3 | Sort Contacts By Name And Popularity

  sortContacts(field) {
    // Create a different compareFunction based on "field" value
    let compareFunction;
    if (field === "name") {
      compareFunction = (a, b) => (a.name > b.name ? 1 : -1);
    } else if (field === "popularity") {
      compareFunction = (a, b) => b.popularity - a.popularity;
    }

    // this.state.contacts.slice() create a copy of the array (this.state.allContacts)
    // this.setState({
    //   firstVisibleContacts: this.state.firstVisibleContacts
    //     .slice()
    //     .sort(compareFunction),
    // });

    // Solution 2

    // Spread operator [...Array] creates a new reference to the array
    // This is needed since sort function mutates the original array :)
    this.setState({
      firstVisibleContacts: [...this.state.firstVisibleContacts].sort(
        compareFunction
      ),
    });
  }

  // Iteration 4 | Remove Contacts
  deleteContact(theIDOfTheOneToBeDeleted) {
    console.log(theIDOfTheOneToBeDeleted);
    // Method 1
    let copyOfContactsArr = this.state.firstVisibleContacts;
    const indexOfContact = this.state.firstVisibleContacts.findIndex(
      (currentContact) => currentContact.id === theIDOfTheOneToBeDeleted
    );
    copyOfContactsArr.splice(indexOfContact, 1);
    this.setState({
      firstVisibleContacts: copyOfContactsArr,
    });

    //  Method 2
    // this.setState({
    //   // filter creates a copy
    //   // in "(c,i)", "c" is the current contact, "i" is the current index
    //   firstVisibleContacts: this.state.firstVisibleContacts.filter(
    //     (c, i) => c.id !== theIDOfTheOneToBeDeleted
    //   ),
    // });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>
          IronContacts <span role="img"> ❤️ </span>
        </h1>
        <button
          className="btn btn-secondary"
          onClick={() => this.addRandomContact()}
        >
          Add random
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.sortContacts("popularity")}
        >
          Sort by popularity
        </button>
        <button
          className="btn btn-success"
          onClick={() => this.sortContacts("name")}
        >
          Sort by name
        </button>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
      </div>
    );
  }
}

export default ContactsList;
