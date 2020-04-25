import React from "react";
import "./NAVBAR.css";
import logos from "./logos.svg"
//import displayOnclick from './script-navbar.js'

function Navbar() {
  return (
    <section>
    <div class="navbar">
     <div class="navbar-container">
      <div class="dropdown ">
        <button class="dropbtn navbar-element">Aceuil</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a class="navbar-element" href=" ">
        Equipe
      </a>
      <img id="logo" src={logos} alt="Girl in a jacket"></img>
      <div class="dropdown">
        <button class="dropbtn navbar-element">Apropos</button>
        <div class="dropdown-content">
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
        </div>
      </div>
      <a class="navbar-element" href=" ">
        Contact
      </a>
    </div>
    <div class="afternavbar">
    <h1>Votre carriére commence ici</h1>
    <button class="afternavbarBTN">clicker pour rejoigner </button>
    </div>
    </div>
   
    </section>
  );
}

export default Navbar;
