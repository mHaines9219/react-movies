import { useState } from "react";

export default function LoginPage(props) {
  const [input, setInput] = useState("");

  const handleChange = (evt) => {
    setInput(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setUser(input);
  };
  return (
    <>
      <h1>Log In:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}
