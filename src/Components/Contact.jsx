import { useState } from "react";
import shortid from "shortid";
const initialState = {
  name: "",
  email: "",
  group: "",
};

const Contact = ({ getInput }) => {
  const [values, setValue] = useState({ ...initialState });
  const { name, email, group } = values;
  const handleInput = (e) => {
    setValue({
      ...values,
      id: shortid.generate(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      getInput(values);
      setValue({ ...initialState });
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Name:
            </label>
            <input
              type="name"
              name="name"
              value={name}
              onChange={handleInput}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInput}
            />
          </div>
          <label
            htmlFor="group"
            style={{
              color: "white",
              fontWeight: "bold",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            Type:
          </label>
          <select
            name="group"
            id=""
            value={group}
            onChange={handleInput}
            style={{ height: "25px", width: "200px" }}
          >
            <option value="">Select the type</option>

            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </select>
          <br />
          <input
            type="submit"
            style={{
              marginTop: "20PX",
              height: "30px",
              width: "120px",
              backgroundColor: "#1e88e5",
              border: "none",
              borderRadius: "5px",
              marginBottom: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            value="Create Contact"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
