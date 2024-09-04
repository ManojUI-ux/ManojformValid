import { useState } from "react";
import React from "react";
import "./Input.css";

function Input() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [uoutput, setUoutput] = useState("");
  const [output, setOutput] = useState("");

  const Validate = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrorMessage(true);
      setUoutput("");
    } else {
      setErrorMessage(false);
      setName("");
      setUoutput(`Username: ${username}`);
    }
    if (password === "") {
      setErrorPassword(true);
      setOutput("");
    } else {
      setErrorPassword(false);
      setPassword("");
      setOutput(`Password: ${password}`);
    }
  };

  const handleUsernameChange = (event) => {
    setName(event.target.value);
    setErrorMessage(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage(false);
  };

  return (
    <>
      <div className="main">
        <p className=" text-center text-primary book">ManojBook</p>
        <div className="back ">
          <div className="nu">
            <form onSubmit={Validate}>
              <input
                type="text"
                name="name"
                value={username}
                className="Paa"
                placeholder="Enter your Email"
                onChange={handleUsernameChange}
              />

              {errorMessage === false && username.length >= 0 ? (
                <p className="error1">{username}</p>
              ) : (
                <p className="error">Enter the valid email</p>
              )}
              <input
                type="password"
                name="name"
                className="Paa"
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              {errorPassword === false && password.length >= 0 ? (
                <p className="error1">{password}</p>
              ) : (
                <p className="error">Enter the your password</p>
              )}
              <button type="submit" className="submit btn btn-primary">
                Submit
              </button>
              <div className="out">
                <div className=" p-5">
                  {uoutput && <p className="output">{uoutput}</p>}
                  {output && <p className="output">{output}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
