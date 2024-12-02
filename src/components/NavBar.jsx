import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/logo_accordeon2.png";
import burger from "../assets/icons/burger-bar.png";
import cross from "../assets/icons/cross.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="navbar-container">
        <figure className="logo-container">
          <NavLink
            className="logo-link-container"
            to="/"
            aria-label="lien vers page d'acceuil"
          >
            <img id="logo_img" src={logo} alt="logo accordeon" />
            <h1 id="logo_typo">Hugo Degorre</h1>
          </NavLink>
        </figure>


        <aside className="desktop-container">
          <NavLink className="nav-link" to="/" aria-label="ACCUEIL">
            ACCUEIL
          </NavLink>

          <NavLink className="nav-link" to="/biography" aria-label="BIOGRAPHIE">
            BIOGRAPHIE
          </NavLink>

          <NavLink className="nav-link" to="/event" aria-label="ÉVÉNEMENTS">
            ÉVÉNEMENTS
          </NavLink>

          <NavLink className="nav-link" to="/directory" aria-label="REPERTOIRE">
            REPERTOIRE
          </NavLink>

          <NavLink className="nav-link" to="/contact" aria-label="CONTACT">
            CONTACT
          </NavLink>
        </aside>
      
      <aside className="mobile-container">
        <button
          className="menu-button"
          type="button"
          alt="menu déroulant"
          onClick={menuClick}
        >
          <img
            src={menuOpen ? cross : burger}
            className="burger"
            alt="burger menu"
          />
        </button>

        <section
          className={
            menuOpen
              ? "mobile-navlink-container menu-on"
              : "mobile-navlink-container menu-off"
          }
        >
          <NavLink className="nav-link" to="/" aria-label="ACCUEIL">
            ACCUEIL
          </NavLink>

          <NavLink className="nav-link" to="/biography" aria-label="BIOGRAPHIE">
            BIOGRAPHIE
          </NavLink>

          <NavLink className="nav-link" to="/event" aria-label="ÉVÉNEMENTS">
            ÉVÉNEMENTS
          </NavLink>

          <NavLink className="nav-link" to="/directory" aria-label="REPERTOIRE">
            REPERTOIRE
          </NavLink>

          <NavLink className="nav-link" to="/contact" aria-label="CONTACT">
            CONTACT
          </NavLink>
        </section>
      </aside>


      </nav>
    </>
  );
}

export default NavBar;
