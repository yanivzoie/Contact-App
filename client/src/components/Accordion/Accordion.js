import React, { useState } from "react";
import Card from "./Card";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [items, setItems] = useState([
    { title: "Box number 1", content: "Some text with Blha Blha 111" },
    { title: "Box number 2", content: "Some text with Blha Blha 2222" },
    { title: "Box number 3", content: "Some text with Blha Blha 333" },
  ]);

  const handleActiveItem = (index) => {
    setActiveIndex(index);
    console.log(activeIndex);
  };

  const renderItemsList = items.map((item, index) => {
    return (
      <Card
        index={index}
        key={index}
        title={item.title}
        content={item.content}
        onTitleClick={handleActiveItem}
      />
    );
  });

  return (
    <div>
      <br />
      <div className="ui styled accordion">{renderItemsList}</div>
    </div>
  );
};

export default Accordion;
