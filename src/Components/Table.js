import { useState } from "react";

function Table({ contacts }) {
  console.log(contacts);
  const [filter, setFilter] = useState("All");
  const [val, setVal] = useState("");
  let filterArr = [];
  const filtered = (e) => {
    setFilter(e.target.value);
  };
  if (filter === "All") {
    filterArr = contacts;
  } else {
    filterArr = contacts.filter((contact) => contact.group === filter);
  }
  if (val) {
    filterArr = filterArr.filter(
      (contact) => contact.name.includes(val) || contact.email.includes(val)
    );
  }
  return (
    <div>
      <div>
        Filter:
        <select value={filter} onChange={filtered}>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="All">All</option>
          <option value="">None</option>
        </select>
        <input
          type="search"
          value={val}
          placeholder="Search"
          onChange={(e) => setVal(e.target.value)}
        />
      </div>

      {
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filterArr.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}
export default Table;
