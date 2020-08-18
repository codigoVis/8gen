import React from "react";

// RRD
import { Link } from "react-router-dom";

function Menu({ currentPath }) {
  return (
    <nav>
      <ul>
        <li>{currentPath === "home" ? "Home" : <Link to="/">Home</Link>}</li>
        <li>
          {currentPath === "notesBlog" ? (
            "Blog de notas"
          ) : (
            <Link to="/notesBlog">Blog de notas</Link>
          )}
        </li>

        <li>
          {currentPath === "CurrencyConverter" ? (
            "Conversor de divisas"
          ) : (
            <Link to="/CurrencyConverter">Conversor de divisas</Link>
          )}
        </li>
        <li>CORONAVIRUS</li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Menu;
