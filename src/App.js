import { useState } from "react";
import "./App.css";
import Contact from "./Components/Contact.jsx";
import Table from "./Components/Table";
function App() {
  const [contacts, setContacts] = useState([]);
  const getInput = (values) => {
    setContacts([].concat(values, contacts));
  };
  console.log(contacts);
  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "70%",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "white", width: "100%", textAlign: "center" }}>
          Contact App
        </h2>
        <Contact getInput={getInput} />
        <Table contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
