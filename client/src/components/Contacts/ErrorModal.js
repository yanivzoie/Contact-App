import React from "react";

const ErrorModal = (props) => {
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <header>
        <p>{props.message}</p>
      </header>
      <footer>
        <button onClick={props.confirm}>OK</button>
      </footer>
    </div>
  );
};

export default ErrorModal;
