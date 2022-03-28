import React, { useState } from "react";
import useFetch from "../../api/useFetch";
import { Navigate } from "react-router-dom";

import "./style.css";

function Login() {
  const [inputValue, setInputvalue] = useState("");
  const shouldRedirect = true;
  const { donnee, isPending } = useFetch("https://backtest01.herokuapp.com/");
  const navigate = useNavigate();
  function loginFunction() {
    if (inputValue === donnee[0].email) {
      console.log("OK");
      navigate("/todolist");
    }
  }
  const todos = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { inputValue };
    console.log(user);
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(console.log("added object ! "))
      .catch(console.log("added object non ! "));
  };

  return (
    <div className="login_container">
      <h1 className="title">TODO LIST</h1>
      {isPending && <div className="loading">Loading Data...</div>}
      <div className="login_form">
        <h2 className="title_form">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label for="mail"></label>
          <input
            className="input_login"
            type="email"
            id="mail"
            name="mail"
            placeholder="Veuillez introduire votre mail"
            required
            onChange={(event) => setInputvalue(event.target.value)}
          />
          <br />
          <input
            type="button"
            value="Se connecter"
            className="submit_login"
            onClick={loginFunction}
          />
          <input type="submit" value="créer compte" className="submit_login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
