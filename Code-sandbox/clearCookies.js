import React from "react";
import ReactDOM from "react-dom";
import Cookie from "js-cookie";
import Home from "./home";

import "./styles.css";

function App() {
  const [name, setName] = React.useState("xx");
  const [password, setPassword] = React.useState("xy");
  const [loggin, setLoggin] = React.useState(false);

  const logChecker = () => {

  };

  const handleSubmit = e => {
    e.preventDefault();
    Cookie.set("USERNAME", name, { expires: 3 });
    Cookie.set("PASSWORD", password);
  };

  const handleLogout = () => {
    Cookie.remove("USERNAME");
    Cookie.remove("PASSWORD");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button>{loggin == true ? <Home/>}</button>
        <p>{Cookie.get("USERNAME")}</p>
        <button onClick={handleLogout}>LogOut</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
