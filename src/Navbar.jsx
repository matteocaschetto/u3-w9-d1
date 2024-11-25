import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://lh5.googleusercontent.com/proxy/rQFB4pp5mh7NLxpqSFNvSPTN7bJAWvpch2rAJTid67_yQzDGEBsM8CYKCmuenUzP6Qlzco5Y1wkQxhk_lxAPwUacKLTwczJoaz-4eACwnD3PgYGxR3_e6oqvxv0"
          alt=""
          style={{
            width: "300px"
          }}
        />
      </div>

      {}

      {}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">Servizi</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
