import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  group: "",
};

function Contact({ getContact }) {
  const [value, setValue] = useState({ ...initialState });
  const { name, email, group } = value;
  const onSubmit = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.name && value.email) {
      getContact(value);
      setValue({ ...initialState });
    } else {
      alert("Invalid value");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onSubmit}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onSubmit}
        />
      </div>
      <div>
        <label htmlFor="type">Type: </label>
        <select name="group" id="group" value={group} onChange={onSubmit}>
          <option value="">Select you group</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <input
        type="submit"
        name="Submit this contact"
        value="Create new Contact"
      />
    </form>
  );
}

export default Contact;
