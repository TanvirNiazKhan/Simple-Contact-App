import { useState } from "react";
import "./Table.css";
function Table({ contacts }) {
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  const [del, setDel] = useState("");
  let filteredArr = [];
  function handleSelect(e) {
    setType(e.target.value);
  }
  if (type === "All") {
    filteredArr = contacts;
  } else {
    filteredArr = contacts.filter((contact) => contact.group === type);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  if (search) {
    filteredArr = filteredArr.filter(
      (contact) =>
        contact.name.includes(search) || contact.email.includes(search)
    );
  }
  //console.log(contacts);

  return (
    <div>
      <div
        style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
      >
        <h4 style={{ marginRight: "20px" }}>Filter:</h4>
        <select
          value={type}
          onChange={handleSelect}
          style={{ height: "30px", backgroundColor: "#1976d2" }}
        >
          <option value="All">All</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="">None</option>
        </select>
        <input
          type="search"
          placeholder="Search by name or email"
          value={search}
          onChange={handleSearch}
          style={{ marginLeft: "20px", height: "30px", width: "300px" }}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
              <td className="btn">
                <button
                  style={{
                    height: "30px",
                    width: "120px",
                    backgroundColor: "#dd2c00",
                    border: "none",
                    borderRadius: "5px",

                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
