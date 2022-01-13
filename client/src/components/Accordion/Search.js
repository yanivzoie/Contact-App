import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [debouncedText, setDebounce] = useState("");

  const URL = "http://localhost:3006/contacts";
  const handleSearch = (e) => {
    setTerm(e.target.value);
  };

  // set a timer to update debouncedText
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounce(term);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  // Make s request with debouncedText
  useEffect(() => {
    const serach = async () => {
      const res = await axios.get(URL, {
        params: {
          name: debouncedText,
        },
      });
      console.log(res.data);
      setResult(res.data);
    };
    serach();
  }, [debouncedText]);

  const retriveData = result.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <h4>Sreach</h4>
        <input
          className="input"
          type="text"
          name="text"
          value={term}
          onChange={handleSearch}
        />
        {retriveData}
      </div>
    </div>
  );
};

export default Search;
