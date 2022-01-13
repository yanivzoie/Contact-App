import React from "react";

const Playground = () => {
  function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] == "object" && ob[i] !== null) {
        var flatObject = flattenObject(ob[i]);
        console.log(flatObject);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          toReturn[i + "." + x] = flatObject[x];
          console.log(toReturn[i + "." + x]);
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  }
  const userObject = {
    userId: 12,
    userName: "Yaniv",
    age: 41,
  };

  const flattenButton = () => {
    // const userObjectKeys = Object.keys(userObject);

    // userObjectKeys.forEach((key) => {
    //   console.log(`key: ${key}, value: ${userObject[key]}`);
    // });
    console.log(flattenObject(userObject));
    console.log(userObject);
  };

  return (
    <div>
      <button onClick={flattenButton}>Click</button>
    </div>
  );
};

export default Playground;
