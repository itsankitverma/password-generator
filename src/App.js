import { useState } from "react";
import "./styles.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);

  const handleChange = (e) => {
    setLength(e.target.value);
  };

  const handleClick = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword =
        newPassword +
        characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <div>
        Password Length :{" "}
        <input type="number" value={length} onChange={handleChange} />
        <button onClick={handleClick}>Generate Password</button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        Generated Password <input value={password} readOnly />{" "}
      </div>
    </div>
  );
}
