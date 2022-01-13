import React from "react";

const Contact = ({ name, email, handleDelete, id }) => {
  return (
    <div className="ui segment">
      <h3>Name: {name}</h3>
      Email: {email}
      <i className="trash icon" onClick={() => handleDelete(id)}></i>
    </div>
  );
};

export default Contact;
