import { useState } from "react";

export default function Login() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(identifier, value) {
    setInputValues((previousValues) => {
      return {
        ...previousValues,
        [identifier]: value,
      };
    });
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleInputChange("email", e.target.value)}
            id="email"
            type="email"
            name="email"
            value={inputValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => handleInputChange("password", e.target.value)}
            id="password"
            type="password"
            name="password"
            value={inputValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button onSubmit={handleSubmit} className="button">
          Login
        </button>
      </p>
    </form>
  );
}
