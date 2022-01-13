import React from "react";

const Card = ({ title, content, index, onTitleClick }) => {
  return (
    <div>
      <div className="title active" onClick={() => onTitleClick(index)}>
        <i className="dropdown icon"></i>
        {title}
      </div>

      <div className="content active">{content}</div>
    </div>
  );
};

export default Card;
