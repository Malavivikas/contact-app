import "./App.css";
import { useState } from "react";
import Headers from "./Headers";
import AddContact from "./AddContact";
// import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {
  /* const contact = [
    {
      id: "1",
      name: "Vikas Malavi",
      email: "vikas24@gmail.com"
    },
    {
      id: "2",
      name: "Atul Malavi",
      email: "atul24@gmail.com"
    }
  ]; */
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  return (
    <div>
      <Headers />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
