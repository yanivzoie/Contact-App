import React, { useState } from "react";
import Playground from "./pages/Playground";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Accordion/Search";
import ContactList from "./components/Contacts/ContactList";
import Dropdown from "./components/Dropdown/Dropdown";

const options = [
  {
    label: "This is Red",
    value: "red",
  },
  {
    label: "This is Green",
    value: "green",
  },
  { label: "This is Blue", value: "blue" },
];

const HomePage = () => {
  const [selected, setSelected] = useState([0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <Search />
      <Accordion />
      <ContactList />
      <Playground />
    </div>
  );
};

export default HomePage;
