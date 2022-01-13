import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContat from "./AddContat";
import Contact from "./Contact";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContact = async () => {
    const res = await axios.get("http://localhost:3006/contacts");
    console.log(res);
    return res;
  };

  const postData = async (request) => {
    const res = await axios.post("http://localhost:3006/contacts", request);
    return res;
  };

  const deleteData = async (id) => {
    const res = await axios.get("http://localhost:3006/contacts");
    const newArr = res.data.find((item) => {
      return item.id !== res.data.id;
    });
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    if (request.name) {
      const data = await postData(request);
      setContacts([...contacts, data.data]);
    }
  };

  const removeContactHandler = async (id) => {
    await axios.delete(`http://localhost:3006/contacts/${id}`);
    const newContactList = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const renderContactList = contacts.map((item, index) => {
    return (
      <Contact
        key={item.id}
        name={item.name}
        email={item.email}
        id={item.id}
        handleDelete={removeContactHandler}
      />
    );
  });
  return (
    <div>
      <h1>Contact</h1>
      <AddContat addContactHandler={addContactHandler} />
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
