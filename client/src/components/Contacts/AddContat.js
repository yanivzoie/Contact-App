import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddContat = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setError({
        title: "Fucking problem!",
        message: "Please check yourself",
      });
    }
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          message={error.message}
          title={error.title}
          confirm={handleError}
        />
      )}
      <form>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default AddContat;
