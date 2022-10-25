import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleOnChangeInput(e) {
    const { name, value } = e.target;

    setContact((prevValue) => {
      return {
        // put the whole prevValue fields, eg. fName : val, lName: val, and use array syntax to add the new value .
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleOnChangeInput}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleOnChangeInput}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleOnChangeInput}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
