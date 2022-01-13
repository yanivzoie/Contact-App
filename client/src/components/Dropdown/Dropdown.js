import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onbBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onbBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onbBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderdOptions = options.map((item) => {
    if (item.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={item.value}
        onClick={() => onSelectedChange(item)}
      >
        {item.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="fild">
        <label className="label" htmlFor="">
          Select a color
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visibale active" : ""}`}
        >
          <i className="dropdown icon"></i>

          <div className="tex">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderdOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
