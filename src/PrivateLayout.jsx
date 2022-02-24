import { Outlet, Link } from "react-router-dom";
import logo from "./logo.svg";

function PrivateLayout() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link className="App-link" to="/login">
        Go to Login
      </Link>
      <Outlet />
    </header>
  );
}

export default PrivateLayout;
