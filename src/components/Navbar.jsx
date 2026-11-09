import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="nav" className={active ? "active" : ""}>
      <header>
        <h1>Kai Poma</h1>

        <button
          id="burger"
          onClick={() => setActive(!active)}
        >
          ≣
        </button>
      </header>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/where">Recovered Land</Link></li>
        <li><Link to="/donate">Donate</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;